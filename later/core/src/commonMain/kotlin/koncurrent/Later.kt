@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import kase.ExecutorState
import kase.Result
import koncurrent.internal.PlatformConcurrentMonad
import kotlinx.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic

interface Later<out T> {
    val state: ExecutorState<T>

    /**
     * Schedules a code block to be executed by the provided [executor] after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsName("_ignore_then1")
    fun <R> then(onResolved: ((T) -> R), onRejected: ((Throwable) -> R), executor: Executor): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsName("_ignore_then2")
    fun <R> then(onResolved: ((T) -> R), onRejected: ((Throwable) -> R)): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JsName("_ignore_then3")
    fun <R> then(onResolved: (T) -> R, executor: Executor): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    fun <R> then(onResolved: (T) -> R): Later<R>

    @JsName("_ignore_andThen1")
    fun <R> andThen(onResolved: (T) -> Later<R>, executor: Executor): Later<R>

    fun <R> andThen(onResolved: (T) -> Later<R>): Later<R>

    @JsName("_ignore_catch1")
    fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Later<T>

    @JsName("error") // Merge this method with error
    fun catch(handler: (Throwable) -> @UnsafeVariance T): Later<T>

    @JsName("catch") // Merge this method with catch
    fun error(handler: (Throwable) -> @UnsafeVariance T): Later<T>

    @JsName("_ignore_complete1")
    fun complete(cleaner: (state: Result<T>) -> Any?, executor: Executor): Later<T>

    fun complete(cleaner: (state: Result<T>) -> Any?): Later<T>

    @JsName("toPromise")
    fun toCompletable(): PlatformConcurrentMonad<@UnsafeVariance T>

    @JsName("_ignore_toCompletable")
    fun toCompletable(executor: Executor): PlatformConcurrentMonad<@UnsafeVariance T>

    fun onUpdate(callback: (ExecutorState<T>) -> Unit): Later<T>

    companion object {
        @JvmStatic
        @JvmOverloads
        fun <T> of(
            value: T,
            executor: Executor = SynchronousExecutor
        ): Later<T> = SuccessfulLater(value, executor)
    }
}