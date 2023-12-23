package koncurrent

import koncurrent.awaited.toCompletableFuture
import java.util.concurrent.CompletableFuture

actual abstract class AbstractNativeAwaited<out T> : NativeAwaited<T> {
    override fun toCompletableFuture(): CompletableFuture<out T> = (this as Awaited<T>).toCompletableFuture()
}