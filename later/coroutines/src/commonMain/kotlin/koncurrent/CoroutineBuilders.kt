package koncurrent

import kase.progress.ProgressBus
import kase.progress.ProgressPublisher
import kase.progress.VoidProgressBus
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext

fun <T> CoroutineScope.later(
    bus: ProgressBus = VoidProgressBus,
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.(ProgressPublisher) -> T
): Later<T> {
    val later = PendingLater<T>()
    launch(context, start) {
        try {
            val res = block(bus)
            println("Resolving with $res")
            later.resolveWith(res)
        } catch (err: Throwable) {
            println("Rejecting with ${err.message}")
            later.rejectWith(err)
        }
    }
    return later
}