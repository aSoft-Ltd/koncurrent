@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import kase.ExecutorState
import kase.Result
import koncurrent.internal.PlatformConcurrentMonad
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmSynthetic

actual interface Later<out T> : Thenable<T> {
    actual val state: ExecutorState<T>

    /**
     * Schedules a code block to be executed by the provided [executor] after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    actual override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    actual override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    @JsName("_ignore_then3")
    actual fun <R> then(onResolved: (T) -> R, executor: Executor): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    @JvmSynthetic
    actual override fun <R> then(onResolved: (T) -> R): Later<R>

    @JvmSynthetic
    actual override fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor?): Later<R>

    @JvmSynthetic
    actual override fun <R> andThen(onResolved: (T) -> Thenable<R>): Later<R>

    actual override fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Later<T>

    actual override fun catch(handler: (Throwable) -> @UnsafeVariance T): Later<T>

    @JvmSynthetic
    @JsName("_ignore_completeInExecutor")
    actual fun complete(cleaner: (state: Result<T>) -> Any?, executor: Executor?): Later<T>

    @JvmSynthetic
    actual fun complete(cleaner: (state: Result<T>) -> Any?): Later<T>

    @JsName("toPromise")
    actual fun toCompletable(): PlatformConcurrentMonad<out T>

    @JsName("_ignore_toPromise")
    actual fun toCompletable(executor: Executor): PlatformConcurrentMonad<out T>

    actual fun onUpdate(callback: (ExecutorState<T>) -> Unit): Later<T>
}