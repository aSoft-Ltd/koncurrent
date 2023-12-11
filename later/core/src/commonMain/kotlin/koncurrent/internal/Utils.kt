@file:JvmName("UtilsCommon")
@file:Suppress("NO_ACTUAL_FOR_EXPECT")

package koncurrent.internal

import koncurrent.Executor
import koncurrent.LaterPromise
import kotlin.jvm.JvmName

internal expect fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): PlatformConcurrentMonad<T>

//internal expect fun <T, R> ((T) -> R).asExecutor(): Executor

//internal expect fun <T, R> Executor.asResolver(): (T) -> R