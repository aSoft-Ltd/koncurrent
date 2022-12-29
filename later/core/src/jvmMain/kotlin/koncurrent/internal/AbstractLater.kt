package koncurrent.internal

import functions.Callback
import functions.Function1I1R
import kase.Result
import koncurrent.Executor
import koncurrent.Later
import koncurrent.PendingLater
import koncurrent.Thenable
import java.util.concurrent.Callable

actual abstract class AbstractLater<T> : PendingLater<T>, Later<T> {

    actual abstract override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Later<R>

    override fun <R> then(
        resolver: Function1I1R<T, R>,
        recover: Function1I1R<Throwable, R>,
        executor: Executor
    ) = then(onResolved = resolver::invoke, recover::invoke, executor)

    actual override fun <R> then(
        onResolved: ((T) -> R)?,
        onRejected: ((Throwable) -> R)?
    ) = then(onResolved = onResolved, onRejected, null)

    override fun <R> then(
        resolver: Function1I1R<T, R>,
        recover: Function1I1R<Throwable, R>
    ) = then(onResolved = resolver::invoke, recover::invoke, null)

    actual override fun <R> then(
        onResolved: (T) -> R,
        executor: Executor
    ) = then(onResolved = onResolved, null, executor)

    override fun <R> then(
        onResolved: Function1I1R<T, R>,
        executor: Executor
    ) = then(onResolved = onResolved::invoke, null, executor)

    actual override fun <R> then(
        onResolved: (T) -> R
    ) = then(onResolved = onResolved, null, null)

    override fun <R> then(
        onResolved: Function1I1R<T, R>
    ) = then(onResolved = onResolved::invoke, null, null)

    actual abstract override fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor?): Later<R>

    override fun <R> andThen(
        resolver: Function1I1R<T, Thenable<R>>,
        executor: Executor
    ) = andThen(onResolved = resolver::invoke, executor)

    actual override fun <R> andThen(
        onResolved: (T) -> Thenable<R>
    ) = andThen(onResolved = onResolved, null)

    override fun <R> andThen(
        onResolved: Function1I1R<T, Thenable<R>>
    ) = andThen(onResolved = onResolved::invoke, null)

    actual override fun catch(
        handler: (Throwable) -> @UnsafeVariance T,
        executor: Executor
    ) = then(null, handler, executor)

    override fun error(
        handler: Function1I1R<Throwable, @UnsafeVariance T>,
        executor: Executor
    ) = then(onResolved = null, handler::invoke, executor)

    actual override fun catch(
        handler: (Throwable) -> @UnsafeVariance T
    ) = then(onResolved = null, handler, null)

    override fun error(
        handler: Function1I1R<Throwable, @UnsafeVariance T>
    ) = then(onResolved = null, handler::invoke, null)

    actual abstract override fun complete(cleaner: (state: Result<T>) -> Any?, executor: Executor?): Later<T>

    override fun complete(
        completer: Callback<Result<T>>, executor: Executor
    ) = complete(cleaner = completer::invoke, executor)

    actual override fun complete(
        cleaner: (state: Result<T>) -> Any?
    ) = complete(cleaner = cleaner, null)

    override fun complete(
        completer: Callback<Result<T>>
    ) = complete(cleaner = completer::invoke, null)
}