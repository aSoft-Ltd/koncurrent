package koncurrent.awaited

import kase.ExecutorState
import kase.Failure
import kase.Result
import kase.Success
import koncurrent.Awaited
import koncurrent.FailedAwaited
import koncurrent.awaited
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.async
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

/**
 * Converts and instance of this [Awaited] into a [Deferred]
 */
fun <T> Awaited<T>.asDeferred(scope: CoroutineScope): Deferred<T> = scope.async(start = CoroutineStart.LAZY) { await() }

/**
 * Suspends this [Awaited] and resumes with the result, or exception
 *
 * If this [Awaited] is already in a [Result] state,
 * it returns the [Success.data] immediately or throws the [Failure.cause]
 */
suspend fun <T> Awaited<T>.await(onUpdate: ((ExecutorState<T>) -> Unit)? = null): T = suspendCancellableCoroutine { cont ->
    if (onUpdate != null) this.onUpdate(onUpdate)
    finally {
        when (it) {
            is Success -> cont.resume(it.data)
            is Failure -> cont.resumeWithException(it.cause)
        }
    }
}

/**
 * Convert's this [Deferred] into a [Awaited]
 */
@OptIn(ExperimentalCoroutinesApi::class)
fun <T> Deferred<T>.asAwaited(): Awaited<T> = if (isCompleted) when (val exp = getCompletionExceptionOrNull()) {
    is Throwable -> FailedAwaited(exp)
    else -> awaited(getCompleted())
} else awaited<T> { resolve, reject ->
    invokeOnCompletion {
        when (val e = getCompletionExceptionOrNull()) {
            null -> resolve(getCompleted())
            else -> reject(e)
        }
    }
}