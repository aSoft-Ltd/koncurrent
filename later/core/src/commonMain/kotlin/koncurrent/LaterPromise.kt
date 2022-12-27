@file:JsExport @file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import functions.Callback
import kase.Executing
import kase.ExecutorState
import kase.Failure
import kase.Pending
import kase.progress.ProgressState
import kase.Result
import kase.progress.Stage
import kase.progress.StageProgress
import kase.progress.StageProgressBag
import kase.Success
import kollections.List
import kollections.iListOf
import kollections.toIList
import koncurrent.later.filterSuccess
import koncurrent.later.filterSuccessValues
import koncurrent.later.internal.LaterHandler
import koncurrent.later.internal.LaterQueueItem
import koncurrent.later.internal.PlatformConcurrentMonad
import koncurrent.later.internal.toPlatformConcurrentMonad
import kotlinx.atomicfu.locks.ReentrantLock
import kotlinx.atomicfu.locks.reentrantLock
import kotlinx.atomicfu.locks.withLock
import kotlinx.collections.atomic.mutableAtomicListOf
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
    private val progressStateQueue = mutableAtomicListOf<(ExecutorState<T>) -> Unit>()

    private val progressBag = StageProgressBag()
    override var state: ExecutorState<T> = Pending

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
        fun <T> allFulfilled(vararg laters: Later<T>): LaterPromise<List<Success<T>>> = all(*laters).then {
            it.filterSuccess()
        }

        @JvmStatic
        fun <T> allFulfilledValues(vararg laters: Later<T>): LaterPromise<List<T>> = allFulfilled(*laters).then { list ->
            list.filterSuccessValues()
        }

        @JvmStatic
        fun <T> all(vararg laters: Later<T>): LaterPromise<List<Result<T>>> {
            val inputs = laters.map { it as LaterPromise }
            val later = LaterPromise<List<Result<T>>>(executor = SynchronousExecutor)
            val states: MutableMap<LaterPromise<T>, Result<T>?> = inputs.associateWith { null }.toMutableMap()
            inputs.forEach { l ->
                l.complete({ state ->
                    lock.withLock {
                        states[l] = state
                        if (inputs.map { it.state }.all { it is Result<*> }) {
                            val stateList = inputs.map { it.state }.filterIsInstance<Result<T>>().toIList()
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
            is Success -> propagateFulfilled(s.data)
            is Failure -> propagateRejected(s.cause)
            else -> {}
        }
        return later
    }

    override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?) = then(onResolved, onRejected, executor)

    @JvmSynthetic
    override fun <R> then(onResolved: (T) -> R) = then(onResolved, null)

    override fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor): LaterPromise<R> {
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

    override fun <R> andThen(onResolved: (T) -> Thenable<R>) = andThen(onResolved, executor)

    @JvmSynthetic
    override fun complete(cleanUp: (state: Result<T>) -> Any?, executor: Executor) = cleanUp(executor, cleanUp)

    override fun complete(cleanUp: (state: Result<T>) -> Any?) = cleanUp(executor, cleanUp)


    internal fun cleanUp(executor: Executor, cleanUp: (state: Result<T>) -> Any?): LaterPromise<out T> {
        val s = this.state
        if (s is Result<*>) {
            cleanUp(s as Result<T>)
            return when (s) {
                is Success -> Later.resolve(s.data, executor) as LaterPromise<T>
                is Failure -> Later.reject(s.cause, executor) as LaterPromise<T>
            }
        }

        val later = LaterPromise<T>(executor = executor)
//        later.progressQueue.addAll(progressQueue.toList())
        val resolve = { value: T ->
            cleanUp(Success(value))
            value
        }
        val rejected = { err: Throwable ->
            cleanUp(Failure(err, actions = iListOf()))
            err as T
        }
        finallyQueue.add(LaterQueueItem(later, resolve, rejected))
        return later
    }

    override fun toCompletable(): PlatformConcurrentMonad<out T> = toPlatformConcurrentMonad(executor)

    override fun toCompletable(executor: Executor): PlatformConcurrentMonad<out T> = toPlatformConcurrentMonad(executor)

    override fun onUpdate(callback: (ExecutorState<T>) -> Unit): Later<T> {
        progressStateQueue.add(callback)
        return this
    }

    override fun onUpdate(callback: Callback<ExecutorState<T>>): Later<T> = onUpdate(callback::invoke)

    override fun setStages(vararg stageNames: String): List<Stage> = progressBag.setStages(*stageNames)

    override fun updateProgress(p: StageProgress): ProgressState {
        if (state is Result<*>) {
            return ProgressState.unset()
        }
        val s = Executing(progress = progressBag.updateProgress(p))
        state = s
        notifyState(s)
        return s.progress
    }

    private fun notifyState(s: ExecutorState<T>) {
        progressStateQueue.forEach { callback ->
            callback(s)
        }
    }

    override fun resolveWith(value: @UnsafeVariance T): Boolean {
        if (state !is Result<*>) {
            try {
                state = Success(value)
                notifyState(state)
                propagateFulfilled(value)
            } catch (err: Throwable) {
                rejectWith(err)
            }
            return true
        }
        return false
    }

    override fun rejectWith(error: Throwable): Boolean {
        if (state !is Result<*>) {
            state = Failure(error, actions = iListOf())
            notifyState(state)
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
