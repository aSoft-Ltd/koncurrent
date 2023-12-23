package koncurrent.later

import koncurrent.Later

inline fun <T, S, R> Later<T>.zip(
    other: Later<S>,
    noinline onResolve: (Pair<T, S>) -> R
) = andThen { first ->
    other.then { second -> onResolve(first to second) }
}

inline fun <T, S, R> Later<T>.andZip(
    other: Later<S>,
    noinline onResolve: (Pair<T, S>) -> Later<R>
) = andThen { first ->
    other.andThen { second -> onResolve(first to second) }
}