@file:Suppress("FunctionName", "NOTHING_TO_INLINE")

package koncurrent

actual inline fun <T> Later(
    executor: Executor,
    noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<out T> = MutablePromise(handler).unsafeCast<Later<T>>()

actual fun <T> PendingLater(executor: Executor): PendingLater<T> {
    var resolver: Resolver<T>? = null
    var rejector: Rejecter? = null
    return MutablePromise { res, rej ->
        resolver = res
        rejector = rej
    }.unsafeCast<PendingLater<T>>().also {
        it.resolver = resolver
        it.rejecter = rejector
    }
}

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
//
//@JsName("wrapInLater")
//inline fun <T> T.toLater(
//    executor: Executor = Executors.current()
//) : Later<T> = Later(this,executor)
//
//@JsExport
//@JsName("laterOf")
//inline fun <T> Later(
//    value: T,
//    executor: Executor = Executors.current()
//): Later<T> = SuccessfulLater(value, executor)
//
actual inline fun <T> SuccessfulLater(
    value: T,
    executor: Executor
): Later<out T> = MutablePromise { res, _ -> res(value) }.unsafeCast<Later<T>>()
actual inline fun FailedLater(
    error: Throwable,
    executor: Executor
): Later<out Nothing> = MutablePromise<Nothing> {_,rej->rej(error)}.unsafeCast<Later<Nothing>>()

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