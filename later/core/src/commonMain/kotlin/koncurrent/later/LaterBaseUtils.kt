@file:JvmName("BaseUtilsCommon")

package koncurrent.later

import kase.Result
import koncurrent.Executor
import koncurrent.Later
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