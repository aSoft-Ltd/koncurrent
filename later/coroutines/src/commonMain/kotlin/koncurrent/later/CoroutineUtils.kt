package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import kase.progress.ProgressBus
import kase.progress.ProgressState
import kase.progress.VoidProgressBus
import koncurrent.FailedLater
import koncurrent.Later
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.async
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

/**
 * Converts and instance of this [Later] into a [Deferred]
 */
fun <T> Later<T>.asDeferred(scope: CoroutineScope): Deferred<T> = scope.async(start = CoroutineStart.LAZY) { await() }

/**
 * Suspends this [Later] and resumes with the result, or exception
 *
 * If this [Later] is already in a [Result] state,
 * it returns the [Success.data] immediately or throws the [Failure.cause]
 */
suspend fun <T> Later<T>.await(bus: ProgressBus = VoidProgressBus, onUpdate: ((ProgressState) -> Unit)? = null): T = suspendCancellableCoroutine { cont ->
    if (onUpdate != null) bus.onUpdate(onUpdate)
    finally { res->
        when (res) {
            is Success -> cont.resume(res.data)
            is Failure -> cont.resumeWithException(res.cause)
        }
    }
}

/**
 * Convert's this [Deferred] into a [Later]
 */
@OptIn(ExperimentalCoroutinesApi::class)
fun <T> Deferred<T>.asLater() = if (isCompleted) when (val exp = getCompletionExceptionOrNull()) {
    is Throwable -> FailedLater(exp)
    else -> Later(getCompleted())
} else Later<T> { resolve, reject ->
    invokeOnCompletion {
        when (val e = getCompletionExceptionOrNull()) {
            null -> resolve(getCompleted())
            else -> reject(e)
        }
    }
}