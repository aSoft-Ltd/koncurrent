package koncurrent.promise

import koncurrent.Promise
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.retry
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException


private inline val Any.isPromise get() : Boolean = asDynamic()?.constructor?.name == "Promise"
suspend fun <T> Promise<T>.await(): T = if (isPromise) suspendCancellableCoroutine { cont ->
    then(
        onFulfilled = { cont.resume(it) },
        onRejected = { cont.resumeWithException(it) }
    )
} else unsafeCast<T>()