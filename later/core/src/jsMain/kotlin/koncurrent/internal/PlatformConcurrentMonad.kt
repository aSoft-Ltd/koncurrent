package koncurrent.internal

import koncurrent.Promise

actual typealias PlatformConcurrentMonad<T> = Promise<T>