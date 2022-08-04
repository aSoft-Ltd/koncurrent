package koncurrent.later.internal

import java.util.concurrent.CompletableFuture

actual typealias PlatformConcurrentMonad<T> = CompletableFuture<T>