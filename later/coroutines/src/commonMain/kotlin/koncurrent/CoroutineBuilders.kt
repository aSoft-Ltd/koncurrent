package koncurrent

import kotlinx.coroutines.*
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext

fun <T> CoroutineScope.later(
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.() -> T
): Later<T> {
    val later = Later.pending<T>()
    launch(context, start) {
        try {
            later.resolveWith(block())
        } catch (err: Throwable) {
            later.rejectWith(err)
        }
    }
    return later
}
