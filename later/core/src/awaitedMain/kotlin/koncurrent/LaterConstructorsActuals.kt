@file:Suppress("FunctionName", "NON_EXPORTABLE_TYPE", "NOTHING_TO_INLINE")

package koncurrent

actual inline fun <T> Later(
    executor: Executor,
     noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T> = awaited(executor, handler)

actual inline fun <T> PendingLater(executor: Executor): Later<T> = MutableAwaited(executor)

//inline fun <T> Executor.later(noinline builder: ProgressPublisher.() -> T): Later<T> {
//    val l = PendingLater<T>(executor = this)
//    execute {
//        try {
//            l.resolveWith(builder(l))
//        } catch (err: Throwable) {
//            l.rejectWith(err)
//        }
//    }
//    return l
//}

actual inline fun <T> SuccessfulLater(
    value: T,
    executor: Executor
): Later<T> = SuccessfulAwaited(value, executor)

actual inline fun FailedLater(
    error: Throwable,
    executor: Executor
): Later<Nothing> = FailedAwaited(error, executor)

//
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