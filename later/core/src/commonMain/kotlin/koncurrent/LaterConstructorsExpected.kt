@file:Suppress(
    "FunctionName",
    "EXPECT_ACTUAL_INCOMPATIBILITY" // for kotlin jvm, K2 would fail to compile once removed
)

package koncurrent

expect fun <T> Later(
    executor: Executor = Executors.default(),
    handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T>

expect fun <T> PendingLater(executor: Executor = Executors.current()): PendingLater<T>

//expect fun <T> Executor.later(noinline builder: ProgressPublisher.() -> T): Later<T> {
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

//@JsExport
//@JsName("laterOf")
//inline fun <T> Later(
//    value: T,
//    executor: Executor = Executors.current()
//): Later<T> = SuccessfulLater(value, executor)
//
expect fun <T> SuccessfulLater(value: T, executor: Executor = Executors.current()): Later<T>
expect fun FailedLater(error: Throwable, executor: Executor = Executors.current()): Later<Nothing>
//
//@JsExport
//@JvmOverloads
//fun TODOLater(
//    message: String = "Not implemented",
//    executor: Executor = Executors.current()
//): Later<Nothing> = PendingLater<Nothing>(executor).apply {
//    rejectWith(NotImplementedError(message))
//}
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