@file:Suppress("FunctionName", "NON_EXPORTABLE_TYPE", "NOTHING_TO_INLINE")

package koncurrent

inline fun <T> T.toLater(
    executor: Executor = Executors.current()
) = SuccessfulLater(this,executor)

inline fun <T> Later(
    value: T,
    executor: Executor = Executors.current()
) = SuccessfulLater(value, executor)

inline fun FailedLater(
    message: String,
    executor: Executor = Executors.current()
) = FailedLater(RuntimeException(message),executor)

inline fun TODOLater(
    message: String = "Not implemented",
    executor: Executor = Executors.current()
) = FailedLater(NotImplementedError(message),executor)

//fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>> = Laters(*laters).then { it.filterSuccess() }
//
//fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>> = SuccessfulLaters(*laters).then { list ->
//    list.mapValues()
//}
//
//
//private val lock: ReentrantLock = reentrantLock()
//fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>> {
//    val later = LaterPromise<List<Result<T>>>(executor = Executors.current())
//    if(laters.isEmpty()) {
//        later.resolveWith(emptyList())
//        return later
//    }
//    val inputs = laters.map { it as LaterPromise }
//    var resolved = false
//    inputs.forEach { l ->
//        l.finally(Executors.current()) {
//            if (!resolved) lock.withLock {
//                val states = inputs.map { it.state }
//                if (states.all { it is Result<Any?> }) {
//                    resolved = true
//                    val stateList = states.filterIsInstance<Result<T>>()
//                    later.resolveWith(stateList)
//                }
//            }
//        }
//    }
//    return later
//}