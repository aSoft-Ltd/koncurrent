package koncurrent.later

import koncurrent.Executor
import koncurrent.Later
import kase.Result

actual inline fun <T, R> Later<T>.then(
    executor: Executor,
    noinline onResolved: (T) -> R
): Later<R> {
    val l = toPendingLater()
    return l.then(executor, onResolved)
}

actual inline fun <T, R> Later<T>.then(
    noinline onResolved: (T) -> R
): Later<R> {
    val l = toPendingLater()
    return l.then(l.executor, onResolved)
}

actual fun <T, R> Later<T>.andThen(
    executor: Executor,
    onResolved: (T) -> Later<R>
): Later<R> {
    val l = toPendingLater()
    return l.andThen(executor, onResolved)
}

actual fun <T, R> Later<T>.andThen(
    onResolved: (T) -> Later<R>
): Later<R> {
    val l = toPendingLater()
    return l.andThen(l.executor, onResolved)
}

actual fun <T> Later<T>.catch(
    executor: Executor,
    recover: (Throwable) -> T
): Later<T> {
    val l = toPendingLater()
    return l.catch(executor, recover)
}

actual fun <T> Later<T>.catch(
    recover: (Throwable) -> T
): Later<T> {
    val l = toPendingLater()
    return l.catch(l.executor, recover)
}

actual fun <T> Later<T>.finally(
    executor: Executor,
    cleanUp: (state: Result<T>) -> Unit
): Later<T> {
    val l = toPendingLater()
    return l.finally(executor, cleanUp)
}

actual fun <T> Later<T>.finally(
    cleanUp: (state: Result<T>) -> Unit
): Later<T> {
    val l = toPendingLater()
    return l.finally(l.executor, cleanUp)
}