package koncurrent.later

import kase.ExecutorState
import kase.Failure
import kase.Result
import kase.Success
import koncurrent.Later
import koncurrent.Thenable
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
fun <T> Thenable<T>.asDeferred(scope: CoroutineScope): Deferred<T> = scope.async(start = CoroutineStart.LAZY) { await() }

/**
 * Suspends this [Thenable] and resumes with the result, or exception
 *
 * If this [Thenable] is already in a [Result] state,
 * it returns the [Success.data] immediately or throws the [Failure.cause]
 */
suspend fun <T> Thenable<T>.await(onUpdate: ((ExecutorState<T>) -> Unit)? = null): T = if (this is Later) {
    await(onUpdate)
} else throw RuntimeException("Thenable is not a Later")

/**
 * Suspends this [Later] and resumes with the result, or exception
 *
 * If this [Later] is already in a [Result] state,
 * it returns the [Success.data] immediately or throws the [Failure.cause]
 */
suspend fun <T> Later<T>.await(onUpdate: ((ExecutorState<T>) -> Unit)? = null): T = suspendCancellableCoroutine { cont ->
    if (onUpdate != null) this.onUpdate(onUpdate)
    finally {
        when (it) {
            is Success -> cont.resume(it.data)
            is Failure -> cont.resumeWithException(it.cause)
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

/**
 * Convert's this [Deferred] into a [Later]
 */
@OptIn(ExperimentalCoroutinesApi::class)
fun <T> Deferred<T>.asThenable(): Thenable<T> = asLater()