package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.Executor
import koncurrent.Later
import koncurrent.MutablePromise

@JsName("later_then")
actual inline fun <T, R> Later<T>.then(executor: Executor, noinline onResolved: (T) -> R): Later<R> = then(onResolved)

actual inline fun <T, R> Later<T>.andThen(executor: Executor, noinline onResolved: (T) -> Later<R>): Later<R> = then(onResolved).unsafeCast<Later<R>>()

@JsName("later_catch")
actual inline fun <T> Later<T>.catch(executor: Executor, noinline recover: (Throwable) -> T): Later<T> = unsafeCast<MutablePromise<T>>().catch(recover)

@JsName("later_finally") // so that js does not call the underline finally
actual inline fun <T> Later<T>.finally(executor: Executor, crossinline cleanUp: (state: Result<T>) -> Unit): Later<T> {
    val res = unsafeCast<MutablePromise<T>>()
    res.then {
        cleanUp(Success(it))
    }.catch {
        cleanUp(Failure(it)).unsafeCast<Nothing>()
    }
    return this
}