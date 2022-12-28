@file:JvmName("BaseUtilsCommon")

package koncurrent.later

import kase.Result
import koncurrent.Executor
import koncurrent.Later
import kotlin.jvm.JvmName

inline fun <T, R> Later<T>.then(
    executor: Executor,
    noinline onSuccess: (T) -> R
): Later<R> = then(onSuccess, null, executor)

inline fun <T> Later<T>.catch(
    executor: Executor,
    noinline handler: (Throwable) -> T
): Later<T> = then(null, handler, executor)

inline fun <T> Later<T>.catch(
    noinline handler: (Throwable) -> T
): Later<T> = then(null, handler)

fun <T> Later<T>.finally(
    executor: Executor,
    cleanUp: (state: Result<T>) -> Unit
) = complete(cleanUp, executor)

fun <T> Later<T>.finally(
    cleanUp: (state: Result<T>) -> Unit
) = complete(cleanUp)

fun <T, R> Later<T>.andThen(
    executor: Executor,
    onResolved: (T) -> Later<R>
) = andThen(onResolved, executor)