package koncurrent.internal

import koncurrent.Executor
import koncurrent.LaterPromise
import koncurrent.Promise
import koncurrent.later.toPromise

internal actual fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): Promise<T> = toPromise()
