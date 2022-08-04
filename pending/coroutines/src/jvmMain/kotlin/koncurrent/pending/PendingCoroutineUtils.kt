package koncurrent.pending

import koncurrent.Pending
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

actual suspend fun <T> Pending<out T>.await(): T {
    if (isDone) return get() as T

    return suspendCancellableCoroutine { cont ->
        whenComplete { obj, err ->
            if (obj != null) cont.resume(obj)
            if (err != null) cont.resumeWithException(err)
        }
    }
}