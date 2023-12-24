@file:JvmName("BaseUtilsCommon")
@file:Suppress("NOTHING_TO_INLINE")

package koncurrent.later

import kase.Result
import koncurrent.Executor
import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catch
import kotlin.jvm.JvmName

inline fun <T, R> Later<T>.then(
    executor: Executor,
    noinline onResolved: (T) -> R
) = then(onResolved, executor)

inline fun <T, R> Later<T>.andThen(
    executor: Executor,
    noinline onResolved: (T) -> Later<R>
) = andThen(onResolved, executor)

inline fun <T> Later<T>.catch(
    executor: Executor,
    noinline recover: (Throwable) -> T
) = catch(recover, executor)

inline fun <T> Later<T>.finally(
    noinline cleanUp: (state: Result<T>) -> Unit
) = complete(cleanUp)

inline fun <T> Later<T>.finally(
    executor: Executor,
    noinline cleanUp: (state: Result<T>) -> Unit
) = complete(cleanUp, executor)

inline fun <T, S, R> Later<T>.zip(
    other: Later<S>,
    noinline onResolve: (Pair<T, S>) -> R
): Later<R> = andThen { first ->
    other.then { second -> onResolve(first to second) }
}

inline fun <T, S, R> Later<T>.andZip(
    other: Later<S>,
    noinline onResolve: (Pair<T, S>) -> Later<R>
): Later<R> = andThen { first ->
    other.andThen { second -> onResolve(first to second) }
}