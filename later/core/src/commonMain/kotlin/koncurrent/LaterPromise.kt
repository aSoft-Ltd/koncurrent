@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import functions.Callback
import koncurrent.later.filterFulfilled
import koncurrent.later.filterFulfilledValues
import koncurrent.later.internal.LaterHandler
import koncurrent.later.internal.LaterQueueItem
import koncurrent.later.internal.PlatformConcurrentMonad
import koncurrent.later.internal.toPlatformConcurrentMonad
import kotlinx.atomicfu.locks.ReentrantLock
import kotlinx.atomicfu.locks.reentrantLock
import kotlinx.atomicfu.locks.withLock
import kotlinx.collections.atomic.mutableAtomicListOf
import kotlinx.collections.interoperable.List
import kotlinx.collections.interoperable.toInteroperableList
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic
import kotlin.jvm.JvmSynthetic

class LaterPromise<T>(handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)? = null, val executor: Executor = Executors.default()) : PendingLater<T> {

    @JsName("_ignore_fromHandler")
    @JvmOverloads
    constructor(handler: LaterHandler<T>, executor: Executor = Executors.default()) : this({ resolve, reject -> handler.execute(resolve, reject) }, executor)

    private val thenQueue = mutableAtomicListOf<LaterQueueItem<T, *>>()
    private val finallyQueue = mutableAtomicListOf<LaterQueueItem<T, *>>()
    private val progressQueue = mutableAtomicListOf<(Progress) -> Unit>()

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
        fun <T> pending(executor: Executor = SynchronousExecutor) = LaterPromise<T>(executor = executor)

        @JvmStatic
        @JvmOverloads
        fun <T> resolve(value: T, executor: Executor = SynchronousExecutor): LaterPromise<T> {
            val l = LaterPromise<T>(executor = executor)
            l.resolveWith(value)
            return l
        }

        @JvmStatic
        @JvmOverloads
        fun reject(error: Throwable, executor: Executor = SynchronousExecutor): LaterPromise<Nothing> {
            val l = LaterPromise<Nothing>(executor = executor)
            l.rejectWith(error)
            return l
        }

        private val lock: ReentrantLock = reentrantLock()

        @JvmStatic
        fun <T> allFulfilled(vararg laters: Later<T>): LaterPromise<List<Fulfilled<T>>> = all(*laters).then {
            it.filterFulfilled()
        }

        @JvmStatic
        fun <T> allFulfilledValues(vararg laters: Later<T>): LaterPromise<List<T>> = allFulfilled(*laters).then { list ->
            list.filterFulfilledValues()
        }

        @JvmStatic
        fun <T> all(vararg laters: Later<T>): LaterPromise<List<Settled<T>>> {
            val inputs = laters.map { it as LaterPromise }
            val later = LaterPromise<List<Settled<T>>>(executor = SynchronousExecutor)
            val states = inputs.associateWith { it.state }.toMutableMap()
            inputs.forEach { l ->
                l.complete({ state ->
                    lock.withLock {
                        states[l] = state
                        if (inputs.map { it.state }.all { it is Settled }) {
                            val stateList = inputs.map { it.state }.filterIsInstance<Settled<T>>().toInteroperableList()
                            later.resolveWith(stateList)
                        }
                    }
                }, SynchronousExecutor)
            }
            return later
        }
    }

    /**
     * Schedules a code block to be executed after this [LaterPromise] resolves
     * This Method should be called from Kotlin only
     */
    @JvmSynthetic
    override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor): LaterPromise<R> {
        val later = LaterPromise<R>(executor = executor)
        val item = LaterQueueItem(later = later, resolver = onResolved, rejecter = onRejected)
        thenQueue.add(item)
        when (val s = state) {
            is Fulfilled -> propagateFulfilled(s.value)
            is Rejected -> propagateRejected(s.cause)
            else -> {}
        }
        return later
    }

    override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?) = then(onResolved, onRejected, executor)

    @JvmSynthetic
    override fun <R> then(onResolved: (T) -> R) = then(onResolved, null)

    override fun <R> andThen(onResolved: (T) -> Later<R>, executor: Executor): LaterPromise<R> {
        val later = LaterPromise<R>(executor = executor)
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

    override fun <R> andThen(onResolved: (T) -> Later<R>) = andThen(onResolved, executor)

    @JvmSynthetic
    override fun complete(cleanUp: (state: Settled<T>) -> Any?, executor: Executor) = cleanUp(executor, cleanUp)

    override fun complete(cleanUp: (state: Settled<T>) -> Any?) = cleanUp(executor, cleanUp)


    internal fun cleanUp(executor: Executor, cleanUp: (state: Settled<T>) -> Any?): LaterPromise<out T> {
        val s = this.state
        if (s is Settled) {
            cleanUp(s)
            return when (s) {
                is Fulfilled -> Later.resolve(s.value, executor) as LaterPromise<T>
                is Rejected -> Later.reject(s.cause, executor) as LaterPromise<T>
            }
        }

        val later = LaterPromise<T>(executor = executor)
        later.progressQueue.addAll(progressQueue.toList())
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

    override fun toCompletable(): PlatformConcurrentMonad<out T> = toPlatformConcurrentMonad(executor)

    override fun toCompletable(executor: Executor): PlatformConcurrentMonad<out T> = toPlatformConcurrentMonad(executor)

    override fun progress(callback: Callback<Progress>): Later<T> = progress(callback::invoke)
    override fun progress(callback: (Progress) -> Unit): Later<T> {
        progressQueue.add(callback)
        return this
    }

    override fun updateProgress(done: Long, total: Long): Boolean {
        if (state !is PendingState) {
            return false
        }
        progressQueue.forEach { callback ->
            callback(Progress(done, total))
        }
        (thenQueue + finallyQueue).forEach {
            executor.execute {
                val later = it.later as LaterPromise<Any?>
                later.updateProgress(done, total)
            }
        }
        return true
    }

    override fun resolveWith(value: @UnsafeVariance T): Boolean {
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

    override fun rejectWith(error: Throwable): Boolean {
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
                val later = it.later as PendingLater<Any?>
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
                val later = it.later as PendingLater<Any?>
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
            val later = it.later as PendingLater<Any?>
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
            val later = it.later as PendingLater<Any?>
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
