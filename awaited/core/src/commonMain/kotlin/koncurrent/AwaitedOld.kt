@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import kase.ExecutorState
import kase.Result
import kotlinx.JsExport
import kotlinx.JsExportIgnore

interface AwaitedOld<out T> {
    val state: ExecutorState<T>

    /**
     * Schedules a code block to be executed by the provided [executor] after this [AwaitedOld] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsExportIgnore
    fun <R> then(onResolved: ((T) -> R), onRejected: ((Throwable) -> R), executor: Executor): AwaitedOld<R>

    /**
     * Schedules a code block to be executed after this [AwaitedOld] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsExportIgnore
    fun <R> then(onResolved: ((T) -> R), onRejected: ((Throwable) -> R)): AwaitedOld<R>

    /**
     * Schedules a code block to be executed after this [AwaitedOld] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsExportIgnore
    fun <R> then(onResolved: (T) -> R, executor: Executor): AwaitedOld<R>

    /**
     * Schedules a code block to be executed after this [AwaitedOld] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    fun <R> then(onResolved: (T) -> R): AwaitedOld<R>

    @JsExportIgnore
    fun <R> andThen(onResolved: (T) -> AwaitedOld<R>, executor: Executor): AwaitedOld<R>

    fun <R> andThen(onResolved: (T) -> AwaitedOld<R>): AwaitedOld<R>

    @JsExportIgnore
    fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): AwaitedOld<T>

    fun catch(handler: (Throwable) -> @UnsafeVariance T): AwaitedOld<T>

    @JsExportIgnore
    fun complete(cleaner: (state: Result<T>) -> Any?, executor: Executor): AwaitedOld<T>

    fun complete(cleaner: (state: Result<T>) -> Any?): AwaitedOld<T>

    fun onUpdate(callback: (ExecutorState<T>) -> Unit): AwaitedOld<T>
}