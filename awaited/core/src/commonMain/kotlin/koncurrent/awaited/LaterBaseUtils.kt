@file:JvmName("BaseUtilsCommon")
@file:Suppress("NOTHING_TO_INLINE")

package koncurrent.awaited

import kase.Result
import koncurrent.Awaited
import koncurrent.Executor
import kotlin.jvm.JvmName

inline fun <T, R> Awaited<T>.then(
    executor: Executor,
    noinline onResolved: (T) -> R
) = then(onResolved, executor)

inline fun <T, R> Awaited<T>.andThen(
    executor: Executor,
    noinline onResolved: (T) -> Awaited<R>
) = andThen(onResolved, executor)

inline fun <T> Awaited<T>.catch(
    executor: Executor,
    noinline recover: (Throwable) -> T
) = catch(recover, executor)

inline fun <T> Awaited<T>.finally(
    noinline cleanUp: (state: Result<T>) -> Unit
) = complete(cleanUp)

inline fun <T> Awaited<T>.finally(
    executor: Executor,
    noinline cleanUp: (state: Result<T>) -> Unit
) = complete(cleanUp, executor)

inline fun <T, S, R> Awaited<T>.zip(
    other: Awaited<S>,
    noinline onResolve: (Pair<T, S>) -> R
): Awaited<R> = andThen { first ->
    other.then { second -> onResolve(first to second) }
}

inline fun <T, S, R> Awaited<T>.andZip(
    other: Awaited<S>,
    noinline onResolve: (Pair<T, S>) -> Awaited<R>
): Awaited<R> = andThen { first ->
    other.andThen { second -> onResolve(first to second) }
}