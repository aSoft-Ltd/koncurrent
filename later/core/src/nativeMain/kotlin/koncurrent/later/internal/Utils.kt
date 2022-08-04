package koncurrent.later.internal

import koncurrent.Executor
import koncurrent.Later

internal actual fun <T> Later<T>.toPlatformConcurrentMonad(): Later<out T> = this

internal actual fun <T> Later<T>.toPlatformConcurrentMonad(executor: Executor): Later<out T> = then({ it }, null, executor)