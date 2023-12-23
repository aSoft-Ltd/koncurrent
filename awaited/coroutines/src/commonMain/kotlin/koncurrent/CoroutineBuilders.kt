package koncurrent

import kase.progress.ProgressPublisher
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext

fun <T> CoroutineScope.awaited(
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.(ProgressPublisher) -> T
): Awaited<T> {
    val awaited = MutableAwaited<T>()
    launch(context, start) {
        try {
            awaited.resolveWith(block(awaited))
        } catch (err: Throwable) {
            awaited.rejectWith(err)
        }
    }
    return awaited
}