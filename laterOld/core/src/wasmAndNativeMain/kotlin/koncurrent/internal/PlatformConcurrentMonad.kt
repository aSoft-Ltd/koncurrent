package koncurrent.internal

import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catchPromise

actual typealias PlatformConcurrentMonad<T> = LaterPromise<T>