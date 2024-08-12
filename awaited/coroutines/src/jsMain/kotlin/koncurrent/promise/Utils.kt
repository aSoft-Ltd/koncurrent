package koncurrent.promise

import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import koncurrent.Promise


private inline val Any.isPromise get() : Boolean = asDynamic()?.constructor?.name == "Promise"

suspend fun <T> Promise<T>.await(): T = if (isPromise) suspendCancellableCoroutine { cont ->
    then(
        onFulfilled = { cont.resume(it) },
        onRejected = { cont.resumeWithException(it) }
    )
} else unsafeCast<T>()