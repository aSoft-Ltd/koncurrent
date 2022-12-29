package koncurrent.internal

import kase.Result
import koncurrent.Executor
import koncurrent.Later
import koncurrent.PendingLater
import koncurrent.Thenable

actual abstract class AbstractLater<T> : PendingLater<T>, Later<T> {

    actual abstract override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Later<R>

    actual override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?) = then(onResolved, onRejected, null)

    actual override fun <R> then(onResolved: (T) -> R, executor: Executor) = then(onResolved, null, executor)

    actual override fun <R> then(onResolved: (T) -> R) = then(onResolved, null, null)

    actual abstract override fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor?): Later<R>

    actual override fun <R> andThen(onResolved: (T) -> Thenable<R>) = andThen(onResolved, null)

    actual override fun catch(handler: (Throwable) -> @UnsafeVariance T) = then(null, handler, null)

    actual override fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor) = then(null, handler, executor)

    actual abstract override fun complete(cleaner: (state: Result<T>) -> Any?, executor: Executor?): Later<T>

    actual override fun complete(cleaner: (state: Result<T>) -> Any?) = complete(cleaner, null)
}