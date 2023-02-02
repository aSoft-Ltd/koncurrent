package koncurrent

import kase.Executing
import kase.ExecutorState
import kase.Failure
import kase.Pending
import kase.Result
import kase.Success
import kase.progress.ProgressState
import kase.progress.Stage
import kase.progress.StageProgress
import kase.progress.StageProgressBag
import kollections.List
import koncurrent.internal.AbstractLater
import koncurrent.internal.LaterHandler
import koncurrent.internal.LaterQueueItem
import koncurrent.internal.PlatformConcurrentMonad
import koncurrent.internal.toPlatformConcurrentMonad
import kollections.mutableAtomicListOf
import kotlin.js.JsName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmSynthetic

class LaterPromise<T>(handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)? = null, val executor: Executor = Executors.default()) : AbstractLater<T>(), PendingLater<T> {

    @JsName("_ignore_fromHandler")
    @JvmOverloads
    constructor(handler: LaterHandler<T>, executor: Executor = Executors.default()) : this({ resolve, reject -> handler.execute(resolve, reject) }, executor)

    private val thenQueue = mutableAtomicListOf<LaterQueueItem<T, Any?>>()
    private val finallyQueue = mutableAtomicListOf<LaterQueueItem<T, Any?>>()
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

    @JvmSynthetic
    override fun <R> thenRaw(executor: Executor?, onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): LaterPromise<R> {
        val later = LaterPromise<R>(executor = executor ?: this.executor)
        val item = LaterQueueItem(later = later, resolver = onResolved, recover = onRejected)
        thenQueue.add(item)
        when (val s = state) {
            is Success -> propagateSuccess(s.data)
            is Failure -> propagateFailure(s.cause)
            else -> {}
        }
        return later
    }

    override fun <R> andThenRaw(executor: Executor?, onResolved: (T) -> Later<R>): LaterPromise<R> {
        val exec = executor ?: this.executor
        val later = LaterPromise<R>(executor = executor ?: exec)
        then(onResolved = { res ->
            exec.execute {
                try {
                    onResolved(res).then(onResolved = { later.resolveWith(it) }, onRejected = { later.rejectWith(it) }, executor = exec
                    )
                } catch (err: Throwable) {
                    later.rejectWith(err)
                }
            }
        }, onRejected = { later.rejectWith(it) }, executor = exec
        )
        return later
    }

    @JvmSynthetic
    override fun completeRaw(executor: Executor?, cleaner: (state: Result<T>) -> Any?): LaterPromise<out T> {
        val exec = executor ?: this.executor
        val s = state
        if (s is Result<Any?>) {
            cleaner(s as Result<T>)
            return when (s) {
                is Success -> SuccessfulLater(s.data, exec) as LaterPromise<T>
                is Failure -> FailedLater(s.cause, exec) as LaterPromise<T>
            }
        }

        val later = LaterPromise<T>(executor = exec)
        val resolver: (T) -> T = {
            cleaner(Success(it))
            later.resolveWith(it)
            it
        }
        val recover: (Throwable) -> T = { err: Throwable ->
            cleaner(Failure(err))
            later.rejectWith(err)
            throw err
        }
        finallyQueue.add(LaterQueueItem(later, resolver, recover))
        return later
    }

    override fun toCompletable(): PlatformConcurrentMonad<T> = toPlatformConcurrentMonad(executor)

    override fun toCompletable(executor: Executor): PlatformConcurrentMonad<T> = toPlatformConcurrentMonad(executor)

    override fun onUpdate(callback: (ExecutorState<T>) -> Unit): Later<T> {
        progressStateQueue.add(callback)
        return this
    }

    override fun setStages(vararg stageNames: String): List<Stage> = progressBag.setStages(*stageNames)

    override fun updateProgress(p: StageProgress): ProgressState {
        if (state is Result<Any?>) return ProgressState.unset()

        val s = Executing(progress = progressBag.updateProgress(p))
        state = s
        notifyState(s)
        return s.progress
    }

    private fun notifyState(s: ExecutorState<T>) = progressStateQueue.forEach { callback ->
        callback(s)
    }

    override fun resolveWith(value: T): Boolean {
        if (state is Result<Any?>) return false

        state = Success(value)
        notifyState(state)
        propagateSuccess(value)
        return true
    }

    override fun rejectWith(error: Throwable): Boolean {
        if (state is Result<Any?>) return false

        state = Failure(error)
        notifyState(state)
        propagateFailure(error)
        return true
    }

    private fun <T> LaterQueueItem<T, Any?>.propagateSuccess(value: T): Boolean {
        val r = resolver ?: return later.resolveWith(value)
        executor.execute {
            try {
                later.resolveWith(r(value))
            } catch (err: Throwable) {
                later.rejectWith(err)
            }
        }
        return true
    }

    private fun <T> LaterQueueItem<T, Any?>.propagateFinalSuccess(value: T): Boolean {
        val r1 = resolver ?: return later.resolveWith(value)
        executor.execute {
            try {
                later.resolveWith(r1(value))
            } catch (err: Throwable) {
                val r2 = recover
                if (r2 == null) {
                    later.rejectWith(err)
                    return@execute
                }

                try {
                    later.resolveWith(r2(err))
                } catch (error: Throwable) {
                    err.addSuppressed(error)
                    later.rejectWith(err)
                }
            }
        }
        return true
    }

    private fun propagateSuccess(value: T) {
        thenQueue.forEach { it.propagateSuccess(value) }
        thenQueue.clear()
        finallyQueue.forEach { it.propagateFinalSuccess(value) }
        finallyQueue.clear()
    }

    private fun <T> LaterQueueItem<T, Any?>.propagateFailure(error: Throwable): Boolean {
        val r = recover ?: return later.rejectWith(error)
        executor.execute {
            try {
                val res = r(error)
                later.resolveWith(res)
            } catch (err: Throwable) {
                error.addSuppressed(err)
                later.rejectWith(error)
            }
        }
        return true
    }

    private fun <T> LaterQueueItem<T, Any?>.propagateFinalFailure(error: Throwable): Boolean {
        val r = recover ?: return later.rejectWith(error)
        executor.execute {
            try {
                later.resolveWith(r(error))
            } catch (err: Throwable) {
                error.addSuppressed(err)
                later.rejectWith(error)
            }
        }
        return true
    }

    private fun propagateFailure(error: Throwable) {
        thenQueue.forEach { it.propagateFailure(error) }
        thenQueue.clear()
        finallyQueue.forEach { it.propagateFinalFailure(error) }
        finallyQueue.clear()
    }

    override fun toString(): String = "Later($state)"
}