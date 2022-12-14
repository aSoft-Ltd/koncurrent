package koncurrent

import kase.progress.ProgressPublisher
import kotlinx.coroutines.*
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext

fun <T> CoroutineScope.later(
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.(ProgressPublisher) -> T
): Later<T> {
    val later = PendingLater<T>()
    launch(context, start) {
        try {
            later.resolveWith(block(later))
        } catch (err: Throwable) {
            later.rejectWith(err)
        }
    }
    return later
}