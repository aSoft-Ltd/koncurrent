package koncurrent

import kase.Executing
import kase.ExecutorState
import kase.Failure
import kase.Pending
import kase.Result
import kase.Success
import kase.progress.ProgressPublisher
import kase.progress.ProgressState
import kase.progress.Stage
import kase.progress.StageProgress
import kase.progress.StageProgressBag
import kollections.List
import kollections.add
import kollections.clear
import kollections.forEach
import kollections.mutableAtomicListOf
import kotlinx.JsExportIgnore
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmSynthetic

class Awaited<out T>(
    handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)? = null,
    val executor: Executor = Executors.default()
) : AbstractAwaited<T>(), ProgressPublisher {

    @JsExportIgnore
    @JvmOverloads
    constructor(handler: Handler<T>, executor: Executor = Executors.default()) : this({ resolve, reject -> handler.execute(resolve, reject) }, executor)

    private val thenQueue = mutableAtomicListOf<AwaitedQueueItem<T, Any?>>()
    private val finallyQueue = mutableAtomicListOf<AwaitedQueueItem<T, Any?>>()
    private val progressStateQueue = mutableAtomicListOf<(ExecutorState<T>) -> Unit>()

    private val progressBag = StageProgressBag()
    var state: ExecutorState<@UnsafeVariance T> = Pending

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
    private fun <R> thenRaw(executor: Executor?, onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Awaited<R> {
        val awaited = MutableAwaited<R>(executor = executor ?: this.executor)
        val item = AwaitedQueueItem(awaited = awaited as Awaited<Any?>, resolver = onResolved, recover = onRejected)
        thenQueue.add(item)
        when (val s = state) {
            is Success -> propagateSuccess(s.data)
            is Failure -> propagateFailure(s.cause)
            else -> {}
        }
        return awaited
    }

    private fun <R> andThenRaw(executor: Executor?, onResolved: (T) -> Awaited<R>): Awaited<R> {
        val exec = executor ?: this.executor
        val awaited = MutableAwaited<R>(executor = executor ?: exec)
        then(onResolved = { res ->
            exec.execute {
                try {
                    onResolved(res).then(onResolved = { awaited.resolveWith(it) }, onRejected = { awaited.rejectWith(it) }, executor = exec
                    )
                } catch (err: Throwable) {
                    awaited.rejectWith(err)
                }
            }
        }, onRejected = { awaited.rejectWith(it) }, executor = exec
        )
        return awaited
    }

    @JvmSynthetic
    fun completeRaw(executor: Executor?, cleaner: (state: Result<T>) -> Any?): Awaited<out T> {
        val exec = executor ?: this.executor
        val s = state
        if (s is Result<Any?>) {
            cleaner(s as Result<T>)
            return when (s) {
                is Success -> SuccessfulAwaited(s.data, exec) as Awaited<T>
                is Failure -> FailedAwaited(s.cause, exec) as Awaited<T>
            }
        }

        val awaited = MutableAwaited<T>(executor = exec)
        val resolver: (T) -> T = {
            cleaner(Success(it))
            awaited.resolveWith(it)
            it
        }
        val recover: (Throwable) -> T = { err: Throwable ->
            cleaner(Failure(err))
            awaited.rejectWith(err)
            throw err
        }
        finallyQueue.add(AwaitedQueueItem(awaited, resolver, recover))
        return awaited
    }

    fun onUpdate(callback: (ExecutorState<T>) -> Unit): Awaited<T> {
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

    fun resolveWith(value: @UnsafeVariance T): Boolean {
        if (state is Result<Any?>) return false

        state = Success(value)
        notifyState(state)
        propagateSuccess(value)
        return true
    }

    fun rejectWith(error: Throwable): Boolean {
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

    fun <R> then(
        onResolved: (T) -> R,
        onRejected: (Throwable) -> R,
        executor: Executor,
    ) = thenRaw(executor = executor, onResolved = onResolved, onRejected)

    fun <R> then(
        onResolved: (T) -> R,
        onRejected: (Throwable) -> R
    ) = thenRaw(executor = null, onResolved = onResolved, onRejected)

    fun <R> then(
        onResolved: (T) -> R,
        executor: Executor,
    ) = thenRaw(executor = executor, onResolved = onResolved, null)

    fun <R> then(
        onResolved: (T) -> R
    ) = thenRaw(executor = null, onResolved = onResolved, null)

    fun <R> andThen(
        onResolved: (T) -> Awaited<R>,
        executor: Executor,
    ) = andThenRaw(executor = executor, onResolved = onResolved)

    fun <R> andThen(
        onResolved: (T) -> Awaited<R>
    ) = andThenRaw(executor = null, onResolved)

    fun catch(
        handler: (Throwable) -> @UnsafeVariance T,
        executor: Executor,
    ) = thenRaw(executor = executor, onResolved = null, handler)

    fun catch(
        handler: (Throwable) -> @UnsafeVariance T
    ) = thenRaw(executor = null, onResolved = null, handler)

    fun complete(
        cleaner: (state: Result<T>) -> Any?,
        executor: Executor,
    ) = completeRaw(executor = executor, cleaner = cleaner)

    fun complete(
        cleaner: (state: Result<T>) -> Any?
    ) = completeRaw(executor = null, cleaner = cleaner)

    override fun toString(): String = "Awaited($state)"
}