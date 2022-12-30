package koncurrent.internal

import koncurrent.Executor
import koncurrent.LaterPromise

internal actual fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): LaterPromise<T> = this

internal actual fun <T, R> ((T) -> R).asExecutor(): Executor = error("")

internal actual fun <T, R> Executor.asResolver(): (T) -> R = error("")