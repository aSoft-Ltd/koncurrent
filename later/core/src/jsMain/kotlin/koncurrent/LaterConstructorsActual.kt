@file:Suppress(
    "FunctionName",
    "NOTHING_TO_INLINE",
    "ACTUAL_WITHOUT_EXPECT"
)

package koncurrent

import kase.Executing
import kase.ExecutorState
import kase.Failure
import kase.Result
import kase.Success
import kase.progress.ProgressBus
import kase.progress.ProgressPublisher
import kase.progress.VoidProgressBus
import kase.toExecutorState
import kollections.List
import kollections.all
import kollections.associate
import kollections.emptyList
import kollections.filterIsInstance
import kollections.keys
import kollections.set
import kollections.toMutableMap
import kollections.values
import koncurrent.later.finally
import koncurrent.later.filterSuccess
import koncurrent.later.mapValues
import koncurrent.later.then

actual inline fun <T> Later(
    executor: Executor,
    noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T> = Promise(handler).unsafeCast<Later<T>>()

actual fun <T> PendingLater(executor: Executor): Later<T> {
    var resolver: Resolver<T>? = null
    var rejector: Rejecter? = null
    return Promise { res, rej ->
        resolver = res
        rejector = rej
    }.unsafeCast<Later<T>>().also {
        it.resolver = resolver
        it.rejecter = rejector
    }
}

actual fun <T> Executor.later(
    bus: ProgressBus = VoidProgressBus,
    builder: ProgressPublisher.() -> T
): Later<T> = Promise { res, rej ->
    execute {
        try {
            res(builder(bus))
        } catch (err: Throwable) {
            rej(err)
        }
    }
}

actual inline fun <T> SuccessfulLater(
    value: T,
    executor: Executor
): Later<T> = Promise { res, _ -> res(value) }.unsafeCast<Later<T>>()

actual inline fun FailedLater(
    error: Throwable,
    executor: Executor
): Later<Nothing> = Promise<Nothing> { _, rej -> rej(error) }.unsafeCast<Later<Nothing>>()

@JsName("laterFromCollection")
actual fun <T> Laters(them: Collection<Later<T>>) : Later<List<Result<T>>> = Laters(*them.toList().toTypedArray())
actual fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>> {
    if (laters.isEmpty()) return Promise { res, _ -> res(emptyList()) }
    val executor = Executors.default()
    return Promise { res, _ ->
        val inputs = laters.associate { it to (Executing() as ExecutorState<T>) }.toMutableMap()
        inputs.keys.forEach { l ->
            l.finally(executor) { res ->
                val state = res.toExecutorState()
                inputs[l] = state
                if (inputs.values.all { it is Success || it is Failure }) {
                    res(inputs.values.filterIsInstance<Result<T>>())
                }
            }
        }
    }
}

actual inline fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>> = Laters(*laters).then { it.filterSuccess() }

actual inline fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>> = SuccessfulLaters(*laters).then { list ->
    list.mapValues()
}