package koncurrent.internal

import kase.Result
import koncurrent.Executor
import koncurrent.Later
import koncurrent.PendingLater
import koncurrent.Thenable

expect abstract class AbstractLater<T>() : PendingLater<T>, Later<T> {

    abstract override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Later<R>

    override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Later<R>

    override fun <R> then(onResolved: (T) -> R, executor: Executor): Later<R>

    override fun <R> then(onResolved: (T) -> R): Later<R>

    abstract override fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor?): Later<R>

    override fun <R> andThen(onResolved: (T) -> Thenable<R>): Later<R>

    override fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Later<T>

    override fun catch(handler: (Throwable) -> @UnsafeVariance T): Later<T>

    abstract override fun complete(cleaner: (state: Result<T>) -> Any?, executor: Executor?): Later<T>

    override fun complete(cleaner: (state: Result<T>) -> Any?): Later<T>
}