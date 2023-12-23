package koncurrent.internal

import koncurrent.Executor
import koncurrent.LaterPromise
import koncurrent.Promise
import koncurrent.later.toPromise

internal actual fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): Promise<T> = toPromise()

//internal actual fun <T, R> ((T) -> R).asExecutor(): Executor = unsafeCast<Executor>()

//internal actual fun <T, R> Executor.asResolver(): (T) -> R = unsafeCast<(T) -> R>()