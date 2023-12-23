package koncurrent.internal

import kase.Result
import koncurrent.Executor
import koncurrent.Awaited
import koncurrent.MutableAwaited

abstract class AbstractAwaited<T> : MutableAwaited<T> {

    abstract fun <R> thenRaw(
        executor: Executor?,
        onResolved: ((T) -> R)?,
        onRejected: ((Throwable) -> R)?
    ): MutableAwaited<R>

    override fun <R> then(
        onResolved: (T) -> R,
        onRejected: (Throwable) -> R,
        executor: Executor,
    ) = thenRaw(executor = executor, onResolved = onResolved, onRejected)

    override fun <R> then(
        onResolved: (T) -> R,
        onRejected: (Throwable) -> R
    ) = thenRaw(executor = null, onResolved = onResolved, onRejected)

    override fun <R> then(
        onResolved: (T) -> R,
        executor: Executor,
    ) = thenRaw(executor = executor, onResolved = onResolved, null)

    override fun <R> then(
        onResolved: (T) -> R
    ) = thenRaw(executor = null, onResolved = onResolved, null)

    abstract fun <R> andThenRaw(executor: Executor?, onResolved: (T) -> Awaited<R>): MutableAwaited<R>

    override fun <R> andThen(
        onResolved: (T) -> Awaited<R>,
        executor: Executor,
    ) = andThenRaw(executor = executor, onResolved = onResolved)

    override fun <R> andThen(
        onResolved: (T) -> Awaited<R>
    ) = andThenRaw(executor = null, onResolved)

    override fun catch(
        handler: (Throwable) -> @UnsafeVariance T,
        executor: Executor,
    ) = thenRaw(executor = executor, onResolved = null, handler)

    override fun catch(
        handler: (Throwable) -> @UnsafeVariance T
    ) = thenRaw(executor = null, onResolved = null, handler)

    abstract fun completeRaw(executor: Executor?, cleaner: (state: Result<T>) -> Any?): Awaited<T>

    override fun complete(
        cleaner: (state: Result<T>) -> Any?,
        executor: Executor,
    ) = completeRaw(executor = executor, cleaner = cleaner)

    override fun complete(
        cleaner: (state: Result<T>) -> Any?
    ) = completeRaw(executor = null, cleaner = cleaner)
}