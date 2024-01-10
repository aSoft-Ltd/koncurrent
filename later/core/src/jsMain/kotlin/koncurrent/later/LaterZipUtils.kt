package koncurrent.later

import koncurrent.Later

actual inline fun <T, S, R> Later<T>.zip(
    other: Later<S>,
    noinline onResolve: (Pair<T, S>) -> R
): Later<R> = andThen { first ->
    other.then { second -> onResolve(first to second) }
}

actual inline fun <T, S, R> Later<T>.andZip(
    other: Later<S>,
    noinline onResolve: (Pair<T, S>) -> Later<R>
): Later<R> = andThen { first ->
    other.andThen { second -> onResolve(first to second) }
}