@file:Suppress("FunctionName")

package koncurrent

@PublishedApi
internal inline fun <T> laterBuilder(resolve: (T) -> Unit, reject: (Throwable) -> Unit, block: () -> T) {
    try {
        resolve(block())
    } catch (err: Throwable) {
        reject(err)
    }
}

actual inline fun <T> Executor.pending(noinline block: () -> T): Pending<out T> = Later(this) { resolve, reject ->
    laterBuilder(resolve, reject, block)
}

actual inline fun <T> pending(noinline block: () -> T): Pending<out T> = Later { resolve, reject ->
    laterBuilder(resolve, reject, block)
}

actual inline fun <T> ResolvedPending(value: T): Pending<out T> = Later.resolve(value)

actual inline fun <T> RejectedPending(error: Throwable): Pending<out T> = Later.reject(error)

actual inline fun <T> ControlledPending(): Pending<out T> = Later()