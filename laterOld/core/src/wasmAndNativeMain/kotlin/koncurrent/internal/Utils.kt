package koncurrent.internal

import koncurrent.Executor
import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catchPromise

internal actual fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): LaterPromise<T> = this