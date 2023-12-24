package koncurrent.later

import kase.Result
import koncurrent.Executor
import koncurrent.Executors
import koncurrent.Later

expect fun <T, R> Later<T>.then(executor: Executor = Executors.default(), onResolved: (T) -> R): Later<R>

expect fun <T, R> Later<T>.andThen(executor: Executor = Executors.default(), onResolved: (T) -> Later<R>): Later<R>

expect fun <T> Later<T>.catch(executor: Executor = Executors.default(), recover: (Throwable) -> T): Later<T>

expect fun <T> Later<T>.finally(executor: Executor = Executors.default(), cleanUp: (state: Result<T>) -> Unit): Later<T>