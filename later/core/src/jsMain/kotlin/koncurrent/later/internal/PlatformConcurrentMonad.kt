package koncurrent.later.internal

import koncurrent.Promise

actual typealias PlatformConcurrentMonad<T> = Promise<T>