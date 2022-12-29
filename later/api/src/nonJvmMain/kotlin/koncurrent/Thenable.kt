@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmSynthetic

actual interface Thenable<out T> {
    @JvmSynthetic
    @JsName("_ignore_thenWithResolverAndRejectAndExecutor")
    actual fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Thenable<R>

    @JvmSynthetic
    @JsName("_ignore_thenWithResolverAndReject")
    actual fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Thenable<R>

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    @JvmSynthetic
    actual fun <R> then(onResolved: (T) -> R): Thenable<R>

    @JvmSynthetic
    @JsName("_ignore_andThenWithExecutor")
    actual fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor?): Thenable<R>

    @JvmSynthetic
    actual fun <R> andThen(onResolved: (T) -> Thenable<R>): Thenable<R>

    @JsName("error")
    actual fun catch(handler: (Throwable) -> @UnsafeVariance T): Thenable<T>

    @JsName("_ignore_errorWithExecutor")
    actual fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Thenable<T>
}