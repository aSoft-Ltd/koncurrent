@file:Suppress("FunctionName")

package koncurrent

expect inline fun <T> Executor.pending(noinline block: () -> T): Pending<out T>

expect inline fun <T> pending(noinline block: () -> T): Pending<out T>

expect inline fun <T> ResolvedPending(value: T): Pending<out T>

expect inline fun <T> RejectedPending(error: Throwable): Pending<out T>

expect inline fun <T> ControlledPending(): Pending<out T>