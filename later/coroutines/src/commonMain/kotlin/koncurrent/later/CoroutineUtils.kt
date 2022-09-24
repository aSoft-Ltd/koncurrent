package koncurrent.later

import koncurrent.*
import kotlinx.coroutines.*
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

/**
 * Converts and instance of this [Later] into a [Deferred]
 */
fun <T> Later<T>.asDeferred(scope: CoroutineScope): Deferred<T> = scope.async(start = CoroutineStart.LAZY) { await() }

/**
 * Suspends this [Later] and resumes with the result, or exception
 *
 * If this [Later] is already in a [Settled] state,
 * it returns the [Fulfilled.value] immediately or throws the [Rejected.cause]
 */
suspend fun <T> Later<T>.await(onProgress: ((Progress) -> Unit)? = null): T = suspendCancellableCoroutine<T> { cont ->
    if (onProgress != null) progress(onProgress)
    finally {
        when (it) {
            is Fulfilled -> cont.resume(it.value)
            is Rejected -> cont.resumeWithException(it.cause)
        }
    }
}

/**
 * Convert's this [Deferred] into a [Later]
 */
@OptIn(ExperimentalCoroutinesApi::class)
fun <T> Deferred<T>.asLater(): Later<T> = if (isCompleted) when (val exp = getCompletionExceptionOrNull()) {
    is Throwable -> Later.reject(exp)
    else -> Later.resolve(getCompleted())
} else Later<T> { resolve, reject ->
    invokeOnCompletion {
        when (val e = getCompletionExceptionOrNull()) {
            null -> resolve(getCompleted())
            else -> reject(e)
        }
    }
}
