@file:JvmName("BaseUtilsCommon")

package koncurrent.thenable

import koncurrent.Executor
import koncurrent.Thenable
import kotlin.jvm.JvmName

inline fun <T, R> Thenable<T>.then(
    executor: Executor,
    noinline resolver: (T) -> R
): Thenable<R> = then(resolver, null, executor)

inline fun <T> Thenable<T>.catch(
    executor: Executor,
    noinline handler: (Throwable) -> T
): Thenable<T> = then(null, handler, executor)

fun <T, R> Thenable<T>.andThen(
    executor: Executor,
    resolver: (T) -> Thenable<R>
) : Thenable<R> = andThen(resolver, executor)