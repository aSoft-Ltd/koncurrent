package koncurrent.internal

import koncurrent.Executor
import koncurrent.LaterPromise

internal actual fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): LaterPromise<T> = this