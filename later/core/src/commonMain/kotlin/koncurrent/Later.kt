@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import functions.Callback
import functions.Consumer
import functions.Function
import koncurrent.later.filterFulfilled
import koncurrent.later.filterFulfilledValues
import koncurrent.later.internal.PlatformConcurrentMonad
import kotlinx.collections.interoperable.List
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic
import kotlin.jvm.JvmSynthetic

interface Later<out T> {
    companion object {
        /**
         * Create a new pending [Later]
         */
        fun <T> pending(executor: Executor = SynchronousExecutor): Later<T> = LaterPromise.pending(executor)

        @JvmStatic
        @JvmOverloads
        fun <T> resolve(value: T, executor: Executor = SynchronousExecutor): Later<T> = LaterPromise.resolve(value, executor)

        @JvmStatic
        @JvmOverloads
        fun reject(error: Throwable, executor: Executor = SynchronousExecutor): Later<Nothing> = LaterPromise.reject(error, executor)

        @JvmStatic
        fun <T> allFulfilled(vararg laters: Later<T>): Later<List<Fulfilled<T>>> = all(*laters).then {
            it.filterFulfilled()
        }

        @JvmStatic
        fun <T> allFulfilledValues(vararg laters: Later<T>): Later<List<T>> = allFulfilled(*laters).then { list ->
            list.filterFulfilledValues()
        }

        @JvmStatic
        fun <T> all(vararg laters: Later<T>): Later<List<Settled<T>>> = LaterPromise.all(*laters)
    }

    /**
     * Schedules a code block to be executed by the provided [executor] after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    @JsName("_ignore_thenResolveOrRejectWithExecutor")
    fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    @JsName("_ignore_thenResolveOrReject")
    fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    @JsName("_ignore_thenWithExecutor")
    fun <R> then(onResolved: (T) -> R, executor: Executor): Later<R> = then(onResolved, null, executor)

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    @JvmSynthetic
    fun <R> then(onResolved: (T) -> R): Later<R> = then(onResolved, null)

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method should be called from java
     */
    @JsName("_ignore_thenFunctionWithExecutor")
    fun <R> then(onResolved: Function<T, R>, executor: Executor): Later<R> = then(onResolved::invoke, null, executor)

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method should be called from java
     */
    @JsName("_ignore_thenFunction")
    fun <R> then(onResolved: Function<T, R>): Later<R> = then(onResolved::invoke, null)

    @JsName("_ignore_andThenWithExecutor")
    @JvmSynthetic
    fun <R> andThen(onResolved: (T) -> Later<R>, executor: Executor): Later<R>

    @JvmSynthetic
    fun <R> andThen(onResolved: (T) -> Later<R>): Later<R>

    @JsName("_ignore_andThenFunctionWithExecutor")
    fun <R> andThen(onResolved: Function<T, Later<R>>, executor: Executor): Later<R> = andThen(onResolved::invoke, executor)

    @JsName("_ignore_andThenFunction")
    fun <R> andThen(onResolved: Function<T, Later<R>>): Later<R> = andThen(onResolved::invoke)

    @JsName("_ignore_flattenWithExecutor")
    @JvmSynthetic
    @Deprecated("In favour of andThen", ReplaceWith("andThen(onResolved, executor)"))
    fun <R> flatten(onResolved: (T) -> Later<R>, executor: Executor): Later<R> = andThen(onResolved, executor)

    @JsName("_ignore_flatten")
    @JvmSynthetic
    @Deprecated("In favour of andThen", ReplaceWith("andThen(onResolved, executor)"))
    fun <R> flatten(onResolved: (T) -> Later<R>): Later<R> = andThen(onResolved)

    @JsName("_ignore_flattenFunctionWithExecutor")
    @Deprecated("In favour of andThen", ReplaceWith("andThen(onResolved, executor)"))
    fun <R> flatten(onResolved: Function<T, Later<R>>, executor: Executor): Later<R> = andThen(onResolved::invoke, executor)

    @JsName("_ignore_flattenFunction")
    @Deprecated("In favour of andThen", ReplaceWith("andThen(onResolved, executor)"))
    fun <R> flatten(onResolved: Function<T, Later<R>>): Later<R> = andThen(onResolved::invoke)

    @JsName("_ignore_errorWithExecutor")
    fun error(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Later<T> = then(null, handler, executor)

    fun error(handler: (Throwable) -> @UnsafeVariance T): Later<T> = then(null, handler)

    /**
     * Same as calling catch on javascript or kotlin
     */
    @JsName("_ignore_errorFunctionWithExecutor")
    fun error(handler: Function<Throwable, @UnsafeVariance T>, executor: Executor): Later<T> = then(null, handler::invoke, executor)

    @JsName("_ignore_errorFunction")
    fun error(handler: Function<Throwable, @UnsafeVariance T>): Later<T> = then(null, handler::invoke)

    @JvmSynthetic
    @JsName("_ignore_completeInExecutor")
    fun complete(cleanUp: (state: Settled<T>) -> Any?, executor: Executor): Later<T>

    @JvmSynthetic
    fun complete(cleanUp: (state: Settled<T>) -> Any?): Later<T>

    /**
     * Same as calling finally on javascript or kotlin
     */
    @JsName("_ignore_completeConsumerInExecutor")
    fun complete(handler: Consumer<in Settled<T>>, executor: Executor): Later<T> = complete(cleanUp = handler::accept, executor)

    @JsName("_ignore_complete")
    fun complete(handler: Consumer<in Settled<T>>): Later<T> = complete(cleanUp = handler::accept)

    @JsName("toPromise")
    fun toCompletable(): PlatformConcurrentMonad<out T>

    @JsName("_ignore_toPromise")
    fun toCompletable(executor: Executor): PlatformConcurrentMonad<out T>

    @Deprecated("In favour of onUpdate")
    @JvmSynthetic
    fun progress(callback: (Progress) -> Unit): Later<T>

    @Deprecated("In favour of onUpdate")
    @JsName("_ignore_progress")
    fun progress(callback: Callback<Progress>): Later<T>

    fun onUpdate(callback: (ProgressState) -> Unit): Later<T>

    @JsName("_ignore_onUpdate")
    fun onUpdate(callback: Callback<ProgressState>): Later<T>
}
