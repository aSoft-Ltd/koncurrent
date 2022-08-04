@file:Suppress("NOTHING_TO_INLINE", "FunctionName")

package koncurrent

import java.util.concurrent.CompletableFuture

actual inline fun <T> Executor.pending(noinline block: () -> T): Pending<out T> = CompletableFuture.supplyAsync(block, this)

actual inline fun <T> pending(noinline block: () -> T): Pending<out T> = CompletableFuture.supplyAsync(block)

actual inline fun <T> ResolvedPending(value: T): Pending<out T> = CompletableFuture.completedFuture(value)

actual inline fun <T> RejectedPending(error: Throwable): Pending<out T> = CompletableFuture.failedFuture(error)

actual inline fun <T> ControlledPending(): Pending<out T> = CompletableFuture()