package koncurrent.later

import koncurrent.*
import kotlinx.coroutines.*
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

/**
 * Converts and instance of this [Later] into a [Deferred]
 */
fun <T> Later<out T>.asDeferred(scope: CoroutineScope): Deferred<T> = scope.async(start = CoroutineStart.LAZY) { await() }

/**
 * Suspends this [Later] and resumes with the result, or exception
 *
 * If this [Later] is already in a [Settled] state,
 * it returns the [Fulfilled.value] immediately or throws the [Rejected.cause]
 */
suspend fun <T> Later<out T>.await(): T = suspendCancellableCoroutine<T> { cont ->
    finally {
        when (it) {
            is Fulfilled -> cont.resume(it.value)
            is Rejected -> cont.resumeWithException(it.cause)
        }
    }
}
//suspend fun <T> Later<out T>.await(): T = when (val s = state) {
////    is Settled -> when (s) {
////        is Fulfilled -> s.value
////        is Rejected -> throw s.cause
////    }
////    is PendingState -> suspendCancellableCoroutine { cont ->
////        then({ value -> cont.resume(value) }, { err -> cont.resumeWithException(err) }, executor)
////    }
//    suspendCancellableCoroutine<T> { cont->
//        finally {
//            when(it) {
//                is Fulfilled -> cont.resume(it.value)
//                is Rejected -> cont.resumeWithException(it.cause)
//            }
//        }
//    }
//}

/**
 * Convert's this [Deferred] into a [Later]
 */
@OptIn(ExperimentalCoroutinesApi::class)
fun <T> Deferred<T>.asLater(): Later<out T> = if (isCompleted) when (val exp = getCompletionExceptionOrNull()) {
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
