@file:JvmName("BaseUtilsCommon")

package koncurrent.thenable

import koncurrent.Executor
import koncurrent.Thenable
import kotlin.jvm.JvmName

inline fun <T, R> Thenable<T>.then(
    executor: Executor,
    noinline onSuccess: (T) -> R
): Thenable<R> = then(onSuccess, null, executor)

inline fun <T> Thenable<T>.catch(
    executor: Executor,
    noinline handler: (Throwable) -> T
): Thenable<T> = then(null, handler, executor)

inline fun <T> Thenable<T>.catch(
    noinline handler: (Throwable) -> T
): Thenable<T> = then(null, handler)

fun <T, R> Thenable<T>.andThen(
    executor: Executor,
    onResolved: (T) -> Thenable<R>
) = andThen(onResolved, executor)