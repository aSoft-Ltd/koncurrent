@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import functions.Consumer
import functions.Function1IO
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmSynthetic

interface Thenable<out T> {
    /**
     * Schedules a code block to be executed by the provided [executor] after this [Thenable] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    @JsName("_ignore_thenResolveOrRejectWithExecutor")
    fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor): Thenable<R>

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    @JsName("_ignore_thenResolveOrReject")
    fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Thenable<R>

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    @JsName("_ignore_thenWithExecutor")
    fun <R> then(onResolved: (T) -> R, executor: Executor): Thenable<R> = then(onResolved, null, executor)

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    @JvmSynthetic
    fun <R> then(onResolved: (T) -> R): Thenable<R> = then(onResolved, null)

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method should be called from java
     */
    @JsName("_ignore_thenFunctionWithExecutor")
    fun <R> then(onResolved: Function1IO<T, R>, executor: Executor): Thenable<R> = then(onResolved::invoke, null, executor)

    /**
     * Schedules a code block to be executed after this [Thenable] resolves
     * This Method should be called from java
     */
    @JsName("_ignore_thenFunction")
    fun <R> then(onResolved: Function1IO<T, R>): Thenable<R> = then(onResolved::invoke, null)

    @JsName("_ignore_andThenWithExecutor")
    @JvmSynthetic
    fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor): Thenable<R>

    @JvmSynthetic
    fun <R> andThen(onResolved: (T) -> Thenable<R>): Thenable<R>

    @JsName("_ignore_andThenFunction_T_ThenableWithExecutor")
    fun <R> andThen(onResolved: Function1IO<T, Thenable<R>>, executor: Executor): Thenable<R> = andThen(onResolved::invoke, executor)

    @JsName("_ignore_andThenFunction_T_Thenable")
    fun <R> andThen(onResolved: Function1IO<T, Thenable<R>>): Thenable<R> = andThen(onResolved::invoke)

    @JsName("_ignore_errorWithExecutor")
    fun error(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Thenable<T> = then(null, handler, executor)

    fun error(handler: (Throwable) -> @UnsafeVariance T): Thenable<T> = then(null, handler)

    /**
     * Same as calling catch on javascript or kotlin
     */
    @JsName("_ignore_errorFunctionWithExecutor")
    fun error(handler: Function1IO<Throwable, @UnsafeVariance T>, executor: Executor): Thenable<T> = then(null, handler::invoke, executor)

    @JsName("_ignore_errorFunction")
    fun error(handler: Function1IO<Throwable, @UnsafeVariance T>): Thenable<T> = then(null, handler::invoke)
}