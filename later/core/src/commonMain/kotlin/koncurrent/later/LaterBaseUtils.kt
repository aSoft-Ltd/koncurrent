package koncurrent.later

import koncurrent.Executor
import koncurrent.Later
import kase.Result

expect fun <T, R> Later<T>.then(executor: Executor, onResolved: (T) -> R): Later<R>
expect fun <T, R> Later<T>.then(onResolved: (T) -> R): Later<R>

expect fun <T, R> Later<T>.andThen(executor: Executor, onResolved: (T) -> Later<R>): Later<R>
expect fun <T, R> Later<T>.andThen(onResolved: (T) -> Later<R>): Later<R>

expect fun <T> Later<T>.catch(executor: Executor, recover: (Throwable) -> T): Later<T>
expect fun <T> Later<T>.catch(recover: (Throwable) -> T): Later<T>

expect fun <T> Later<T>.finally(executor: Executor, cleanUp: (state: Result<T>) -> Unit): Later<T>
expect fun <T> Later<T>.finally(cleanUp: (state: Result<T>) -> Unit): Later<T>