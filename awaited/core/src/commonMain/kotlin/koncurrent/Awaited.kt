@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import kase.ExecutorState
import kase.Result
import kotlinx.JsExport
import kotlinx.JsExportIgnore

interface Awaited<out T> : NativeAwaited<T> {
    val state: ExecutorState<T>

    /**
     * Schedules a code block to be executed by the provided [executor] after this [Awaited] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsExportIgnore
    fun <R> then(onResolved: ((T) -> R), onRejected: ((Throwable) -> R), executor: Executor): Awaited<R>

    /**
     * Schedules a code block to be executed after this [Awaited] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsExportIgnore
    fun <R> then(onResolved: ((T) -> R), onRejected: ((Throwable) -> R)): Awaited<R>

    /**
     * Schedules a code block to be executed after this [Awaited] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsExportIgnore
    fun <R> then(onResolved: (T) -> R, executor: Executor): Awaited<R>

    /**
     * Schedules a code block to be executed after this [Awaited] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    fun <R> then(onResolved: (T) -> R): Awaited<R>

    @JsExportIgnore
    fun <R> andThen(onResolved: (T) -> Awaited<R>, executor: Executor): Awaited<R>

    fun <R> andThen(onResolved: (T) -> Awaited<R>): Awaited<R>

    @JsExportIgnore
    fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Awaited<T>

    fun catch(handler: (Throwable) -> @UnsafeVariance T): Awaited<T>

    @JsExportIgnore
    fun complete(cleaner: (state: Result<T>) -> Any?, executor: Executor): Awaited<T>

    fun complete(cleaner: (state: Result<T>) -> Any?): Awaited<T>

    fun onUpdate(callback: (ExecutorState<T>) -> Unit): Awaited<T>
}