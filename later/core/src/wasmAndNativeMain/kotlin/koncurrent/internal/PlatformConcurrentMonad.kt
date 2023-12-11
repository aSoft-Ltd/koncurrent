package koncurrent.internal

import koncurrent.LaterPromise

actual typealias PlatformConcurrentMonad<T> = LaterPromise<T>