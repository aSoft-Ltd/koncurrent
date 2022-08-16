package koncurrent.later.internal

import koncurrent.Executor
import koncurrent.Later
import koncurrent.LaterPromise

internal actual fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): LaterPromise<out T> = then({ it }, null, executor)