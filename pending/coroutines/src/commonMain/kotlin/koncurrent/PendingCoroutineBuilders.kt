@file:Suppress("PackageDirectoryMismatch")

package koncurrent

import koncurrent.pending.rejectWith
import koncurrent.pending.resolveWith
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext

fun <T> CoroutineScope.pending(
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.() -> T
): Pending<out T> {
    val pending = ControlledPending<T>()
    launch(context, start) {
        try {
            pending.resolveWith(block())
        } catch (err: Throwable) {
            pending.rejectWith(err)
        }
    }
    return pending
}