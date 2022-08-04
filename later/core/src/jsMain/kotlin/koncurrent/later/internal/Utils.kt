package koncurrent.later.internal

import koncurrent.Executor
import koncurrent.Later
import koncurrent.Promise
import koncurrent.later.toPromise

internal actual fun <T> Later<T>.toPlatformConcurrentMonad(executor: Executor): Promise<out T> = toPromise()

internal actual fun <T> Later<T>.toPlatformConcurrentMonad(): Promise<out T> = toPromise()
