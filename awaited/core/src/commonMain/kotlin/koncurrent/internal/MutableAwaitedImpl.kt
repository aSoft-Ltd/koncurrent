package koncurrent.internal

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
import kollections.add
import kollections.clear
import kollections.forEach
import kollections.mutableAtomicListOf
import koncurrent.Awaited
import koncurrent.AwaitedHandler
import koncurrent.Executor
import koncurrent.Executors
import koncurrent.FailedAwaited
import koncurrent.MutableAwaited
import koncurrent.SuccessfulAwaited
import kotlinx.JsExportIgnore
import kotlin.js.JsName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmSynthetic

@PublishedApi
internal class MutableAwaitedImpl<T>(handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)? = null, val executor: Executor = Executors.default()) : AbstractAwaited<T>(), MutableAwaited<T> {

    @JsExportIgnore
    @JvmOverloads
    constructor(handler: AwaitedHandler<T>, executor: Executor = Executors.default()) : this({ resolve, reject -> handler.execute(resolve, reject) }, executor)

    private val thenQueue = mutableAtomicListOf<AwaitedQueueItem<T, Any?>>()
    private val finallyQueue = mutableAtomicListOf<AwaitedQueueItem<T, Any?>>()
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
    override fun <R> thenRaw(executor: Executor?, onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): MutableAwaitedImpl<R> {
        val awaited = MutableAwaitedImpl<R>(executor = executor ?: this.executor)
        val item = AwaitedQueueItem(awaited = awaited as MutableAwaitedImpl<Any?>, resolver = onResolved, recover = onRejected)
        thenQueue.add(item)
        when (val s = state) {
            is Success -> propagateSuccess(s.data)
            is Failure -> propagateFailure(s.cause)
            else -> {}
        }
        return awaited
    }

    override fun <R> andThenRaw(executor: Executor?, onResolved: (T) -> Awaited<R>): MutableAwaitedImpl<R> {
        val exec = executor ?: this.executor
        val Awaited = MutableAwaitedImpl<R>(executor = executor ?: exec)
        then(onResolved = { res ->
            exec.execute {
                try {
                    onResolved(res).then(onResolved = { Awaited.resolveWith(it) }, onRejected = { Awaited.rejectWith(it) }, executor = exec
                    )
                } catch (err: Throwable) {
                    Awaited.rejectWith(err)
                }
            }
        }, onRejected = { Awaited.rejectWith(it) }, executor = exec
        )
        return Awaited
    }

    @JvmSynthetic
    override fun completeRaw(executor: Executor?, cleaner: (state: Result<T>) -> Any?): MutableAwaitedImpl<out T> {
        val exec = executor ?: this.executor
        val s = state
        if (s is Result<Any?>) {
            cleaner(s as Result<T>)
            return when (s) {
                is Success -> SuccessfulAwaited(s.data, exec) as MutableAwaitedImpl<T>
                is Failure -> FailedAwaited(s.cause, exec) as MutableAwaitedImpl<T>
            }
        }

        val Awaited = MutableAwaitedImpl<T>(executor = exec)
        val resolver: (T) -> T = {
            cleaner(Success(it))
            Awaited.resolveWith(it)
            it
        }
        val recover: (Throwable) -> T = { err: Throwable ->
            cleaner(Failure(err))
            Awaited.rejectWith(err)
            throw err
        }
        finallyQueue.add(AwaitedQueueItem(Awaited, resolver, recover))
        return Awaited
    }

    override fun onUpdate(callback: (ExecutorState<T>) -> Unit): Awaited<T> {
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

    private fun notifyState(s: ExecutorState<T>) {
        progressStateQueue.forEach { callback ->
            callback(s)
        }
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

    private fun <T> AwaitedQueueItem<T, Any?>.propagateSuccess(value: T): Boolean {
        val r = resolver ?: return awaited.resolveWith(value)
        executor.execute {
            try {
                awaited.resolveWith(r(value))
            } catch (err: Throwable) {
                awaited.rejectWith(err)
            }
        }
        return true
    }

    private fun <T> AwaitedQueueItem<T, Any?>.propagateFinalSuccess(value: T): Boolean {
        val r1 = resolver ?: return awaited.resolveWith(value)
        executor.execute {
            try {
                awaited.resolveWith(r1(value))
            } catch (err: Throwable) {
                val r2 = recover
                if (r2 == null) {
                    awaited.rejectWith(err)
                    return@execute
                }

                try {
                    awaited.resolveWith(r2(err))
                } catch (error: Throwable) {
                    err.addSuppressed(error)
                    awaited.rejectWith(err)
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

    private fun <T> AwaitedQueueItem<T, Any?>.propagateFailure(error: Throwable): Boolean {
        val r = recover ?: return awaited.rejectWith(error)
        executor.execute {
            try {
                val res = r(error)
                awaited.resolveWith(res)
            } catch (err: Throwable) {
                error.addSuppressed(err)
                awaited.rejectWith(error)
            }
        }
        return true
    }

    private fun <T> AwaitedQueueItem<T, Any?>.propagateFinalFailure(error: Throwable): Boolean {
        val r = recover ?: return awaited.rejectWith(error)
        executor.execute {
            try {
                awaited.resolveWith(r(error))
            } catch (err: Throwable) {
                error.addSuppressed(err)
                awaited.rejectWith(error)
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

    override fun toString(): String = "Awaited($state)"
}