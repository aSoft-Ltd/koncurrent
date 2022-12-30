@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmSynthetic

interface Thenable<out T> {
    @JsName("_ignore_then1")
    fun <R> then(onResolved: ((T) -> R), onRejected: ((Throwable) -> R), executor: Executor): Thenable<R>

    @JsName("_ignore_then2")
    fun <R> then(onResolved: ((T) -> R), onRejected: ((Throwable) -> R)): Thenable<R>

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    @JsName("_ignore_then3")
    fun <R> then(onResolved: (T) -> R, executor: Executor): Thenable<R>

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    fun <R> then(onResolved: (T) -> R): Thenable<R>

    @JsName("_ignore_andThen1")
    fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor): Thenable<R>

    fun <R> andThen(onResolved: (T) -> Thenable<R>): Thenable<R>

    @JsName("_ignore_catch")
    fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Thenable<T>

    @JsName("error")
    fun catch(handler: (Throwable) -> @UnsafeVariance T): Thenable<T>
}