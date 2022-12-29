package koncurrent

import kotlin.js.JsName
import kotlin.jvm.JvmSynthetic

expect interface Thenable<out T> {
    fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Thenable<R>

    fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Thenable<R>

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    fun <R> then(onResolved: (T) -> R): Thenable<R>

    @JvmSynthetic
    @JsName("_ignore_andThenWithExecutor")
    fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor?): Thenable<R>

    @JvmSynthetic
    fun <R> andThen(onResolved: (T) -> Thenable<R>): Thenable<R>

    @JsName("error")
    fun catch(handler: (Throwable) -> @UnsafeVariance T): Thenable<T>

    @JsName("_ignore_error")
    fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Thenable<T>
}