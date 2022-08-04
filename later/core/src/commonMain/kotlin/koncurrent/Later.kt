@file:JsExport @file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import functions.Consumer
import functions.Function
import koncurrent.later.filterFulfilled
import koncurrent.later.filterFulfilledValues
import koncurrent.later.internal.LaterHandler
import koncurrent.later.internal.LaterQueueItem
import koncurrent.later.internal.PlatformConcurrentMonad
import koncurrent.later.internal.toPlatformConcurrentMonad
import koncurrent.later.then
import kotlinx.atomicfu.locks.ReentrantLock
import kotlinx.atomicfu.locks.reentrantLock
import kotlinx.atomicfu.locks.withLock
import kotlinx.collections.atomic.mutableAtomicListOf
import kotlinx.collections.interoperable.List
import kotlinx.collections.interoperable.toInteroperableList
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic
import kotlin.jvm.JvmSynthetic

class Later<T>(handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)? = null, val executor: Executor = Executors.default()) {

    @JsName("_ignore_fromHandler")
    @JvmOverloads
    constructor(handler: LaterHandler<T>, executor: Executor = Executors.default()) : this({ resolve, reject -> handler.execute(resolve, reject) }, executor)

    private val thenQueue = mutableAtomicListOf<LaterQueueItem<T, *>>()
    private val finallyQueue = mutableAtomicListOf<LaterQueueItem<T, *>>()

    @JvmSynthetic
    @JsName("_ignore_state")
    var state: ConcurrentState<T> = PendingState

    init {
        executor.execute {
            try {
                handler?.invoke(::resolveWith, ::rejectWith)
            } catch (err: Throwable) {
                rejectWith(err)
            }
        }
    }

    companion object {
        @JvmStatic
        @JvmOverloads
        fun <T> resolve(value: T, executor: Executor = SynchronousExecutor): Later<out T> {
            val l = Later<T>(executor = executor)
            l.resolveWith(value)
            return l
        }

        @JvmStatic
        @JvmOverloads
        fun reject(error: Throwable, executor: Executor = SynchronousExecutor): Later<out Nothing> {
            val l = Later<Nothing>(executor = executor)
            l.rejectWith(error)
            return l
        }

        private val lock: ReentrantLock = reentrantLock()

        @JvmStatic
        fun <T> allFulfilled(vararg laters: Later<out T>): Later<out List<Fulfilled<T>>> = all(*laters).then {
            it.filterFulfilled()
        }

        @JvmStatic
        fun <T> allFulfilledValues(vararg laters: Later<out T>): Later<out List<T>> = allFulfilled(*laters).then { list ->
            list.filterFulfilledValues()
        }

        @JvmStatic
        fun <T> all(vararg laters: Later<out T>): Later<out List<Settled<T>>> {
            val later = Later<List<Settled<T>>>(executor = SynchronousExecutor)
            val states = laters.associateWith { it.state }.toMutableMap()
            laters.forEach { l ->
                l.complete({ state ->
                    lock.withLock {
                        states[l] = state
                        if (laters.map { it.state }.all { it is Settled }) {
                            val stateList = laters.map { it.state }.filterIsInstance<Settled<T>>().toInteroperableList()
                            later.resolveWith(stateList)
                        }
                    }
                }, SynchronousExecutor)
            }
            return later
        }
    }

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method should be called from Kotlin only
     */
    @JvmSynthetic
    @JsName("_ignore_thenWithExecutor")
    fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)? = null, executor: Executor = this.executor): Later<out R> {
        val later = Later<R>(executor = executor)
        val item = LaterQueueItem(later = later, resolver = onResolved, rejecter = onRejected)
        thenQueue.add(item)
        when (val s = state) {
            is Fulfilled -> propagateFulfilled(s.value)
            is Rejected -> propagateRejected(s.cause)
            else -> {}
        }
        return later
    }

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method should be called from Javascript
     */
    @JvmSynthetic
    fun <S> then(onResolved: (T) -> S, executor: Executor = this.executor): Later<out S> = then(onResolved, null, executor)

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method should be called from java
     */
    @JvmOverloads
    @JsName("_ignore_then")
    fun <S> then(onResolved: Function<T, S>, executor: Executor = this.executor): Later<out S> = then(
        executor = executor, onResolved = { value -> onResolved.invoke(value) }, onRejected = null
    )

    fun <S> flatten(onResolved: (T) -> Later<out S>, executor: Executor = this.executor): Later<out S> {
        val later = Later<S>(executor = executor)
        then(executor = executor, onResolved = { res ->
            executor.execute {
                try {
                    val resolved = onResolved(res)
                    resolved.then(executor = executor, onResolved = {
                        later.resolveWith(it)
                    }, onRejected = {
                        later.rejectWith(it)
                    })
                } catch (err: Throwable) {
                    later.rejectWith(err)
                }
            }
        }, onRejected = {
            later.rejectWith(it)
        })
        return later
    }

    @JvmOverloads
    @JsName("_ignore_flatten")
    fun <R> flatten(onResolved: Function<T, Later<out R>>, executor: Executor = this.executor) = flatten(onResolved::invoke, executor)

    fun error(handler: (Throwable) -> T, executor: Executor = this.executor): Later<out T> = then(null, handler, executor)

    /**
     * Same as calling catch on javascript or kotlin
     */
    @JsName("_ignore_error")
    @JvmOverloads
    fun <T> error(handler: Function<Throwable, T>, executor: Executor = this.executor): Later<out T> = then(executor = executor, onResolved = null, onRejected = { err -> handler.invoke(err) })

    /**
     * Same as calling finally on javascript or kotlin
     */
    @JsName("_ignore_complete")
    @JvmOverloads
    fun complete(handler: Consumer<in Settled<T>>, executor: Executor = this.executor) = cleanUp(executor, cleanUp = { state -> handler.accept(state) })

    @JvmSynthetic
    fun complete(cleanUp: (state: Settled<T>) -> Any?, executor: Executor = this.executor) = cleanUp(executor, cleanUp)

    internal fun cleanUp(executor: Executor, cleanUp: (state: Settled<T>) -> Any?): Later<out T> {
        val s = this.state
        if (s is Settled) {
            cleanUp(s)
            return when (s) {
                is Fulfilled -> Later.resolve(s.value, executor) as Later<T>
                is Rejected -> Later.reject(s.cause, executor) as Later<T>
            }
        }

        val later = Later<T>(executor = executor)
        val resolve = { value: T ->
            cleanUp(Fulfilled(value))
            value
        }
        val rejected = { err: Throwable ->
            cleanUp(Rejected(err))
            err as T
        }
        finallyQueue.add(LaterQueueItem(later, resolve, rejected))
        return later
    }

    @JvmName("toCompletableFuture")
    @JsName("toPromise")
    fun toPending(): PlatformConcurrentMonad<out T> = toPlatformConcurrentMonad()

    @JvmName("toCompletableFuture")
    @JsName("_ignore_toPromise")
    fun toPending(executor: Executor): PlatformConcurrentMonad<out T> = toPlatformConcurrentMonad(executor)

    fun resolveWith(value: @UnsafeVariance T): Boolean {
        if (state is PendingState) {
            try {
                state = Fulfilled(value)
                propagateFulfilled(value)
            } catch (err: Throwable) {
                rejectWith(err)
            }
            return true
        }
        return false
    }

    fun rejectWith(error: Throwable): Boolean {
        if (this.state is PendingState) {
            this.state = Rejected(error)
            propagateRejected(error)
            return true
        }
        return false
    }

    private fun propagateFulfilled(value: T) {
        thenQueue.forEach {
            executor.execute {
                val later = it.later
                try {
                    val resolver = it.resolver
                    if (resolver != null) {
                        later.resolveWith(resolver(value))
                    } else {
                        later.resolveWith(value)
                    }
                } catch (err: Throwable) {
                    later.rejectWith(err)
                }
            }
        }
        finallyQueue.forEach {
            executor.execute {
                val later = it.later
                try {
                    val resolver = it.resolver
                    if (resolver != null) later.resolveWith(resolver(value))
                } catch (err: Throwable) {
                    try {
                        val rejecter = it.rejecter
                        if (rejecter != null) later.resolveWith(rejecter(err))
                    } catch (error: Throwable) {
                        err.addSuppressed(error)
                        later.rejectWith(err)
                    }
                }
            }
        }
        thenQueue.clear()
        finallyQueue.clear()
    }

    private fun propagateRejected(error: Throwable) {
        thenQueue.forEach {
            val later = it.later
            executor.execute {
                try {
                    val rejecter = it.rejecter
                    if (rejecter != null) {
                        later.resolveWith(rejecter(error))
                    } else {
                        later.rejectWith(error)
                    }
                } catch (err: Throwable) {
                    error.addSuppressed(err)
                    later.rejectWith(error)
                }
            }
        }

        finallyQueue.forEach {
            val later = it.later
            executor.execute {
                try {
                    val rejecter = it.rejecter
                    if (rejecter != null) later.resolveWith(rejecter(error))
                } catch (err: Throwable) {
                    error.addSuppressed(err)
                    later.rejectWith(error)
                }
            }
        }
        thenQueue.clear()
        finallyQueue.clear()
    }

    override fun toString(): String = "Later($state)"
}
