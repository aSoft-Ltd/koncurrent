@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import functions.Callback
import functions.Consumer
import functions.Function1IO
import kase.ExecutorState
import kase.Result
import kase.Success
import kollections.List
import koncurrent.later.filterSuccess
import koncurrent.later.filterSuccessValues
import koncurrent.later.internal.PlatformConcurrentMonad
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic
import kotlin.jvm.JvmSynthetic

interface Later<out T> : Thenable<T> {
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
        fun <T> allFulfilled(vararg laters: Later<T>): Later<List<Success<T>>> = all(*laters).then {
            it.filterSuccess()
        }

        @JvmStatic
        fun <T> allFulfilledValues(vararg laters: Later<T>): Later<List<T>> = allFulfilled(*laters).then { list ->
            list.filterSuccessValues()
        }

        @JvmStatic
        fun <T> all(vararg laters: Later<T>): Later<List<Result<T>>> = LaterPromise.all(*laters)
    }

    val state: ExecutorState<T>

    /**
     * Schedules a code block to be executed by the provided [executor] after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    @JvmSynthetic
    override fun <R> then(onResolved: (T) -> R, executor: Executor): Later<R> = then(onResolved, null, executor)

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    @JvmSynthetic
    override fun <R> then(onResolved: (T) -> R): Later<R> = then(onResolved, null)

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method should be called from java
     */
    override fun <R> then(onResolved: Function1IO<T, R>, executor: Executor): Later<R> = then(onResolved::invoke, null, executor)

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method should be called from java
     */
    override fun <R> then(onResolved: Function1IO<T, R>): Later<R> = then(onResolved::invoke, null)

    @JvmSynthetic
    override fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor): Later<R>

    @JvmSynthetic
    override fun <R> andThen(onResolved: (T) -> Thenable<R>): Later<R>

    override fun <R> andThen(onResolved: Function1IO<T, Thenable<R>>, executor: Executor): Later<R> = andThen(onResolved::invoke, executor)

    override fun <R> andThen(onResolved: Function1IO<T, Thenable<R>>): Later<R> = andThen(onResolved::invoke)

    override fun error(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Later<T> = then(null, handler, executor)

    override fun error(handler: (Throwable) -> @UnsafeVariance T): Later<T> = then(null, handler)

    /**
     * Same as calling catch on javascript or kotlin
     */
    override fun error(handler: Function1IO<Throwable, @UnsafeVariance T>, executor: Executor): Later<T> = then(null, handler::invoke, executor)

    override fun error(handler: Function1IO<Throwable, @UnsafeVariance T>): Later<T> = then(null, handler::invoke)

    @JvmSynthetic
    @JsName("_ignore_completeInExecutor")
    fun complete(cleanUp: (state: Result<T>) -> Any?, executor: Executor): Later<T>

    @JvmSynthetic
    fun complete(cleanUp: (state: Result<T>) -> Any?): Later<T>

    @JsName("_ignore_completeConsumerInExecutor")
    fun complete(handler: Consumer<in Result<T>>, executor: Executor): Later<T> = complete(cleanUp = handler::accept, executor)

    @JsName("_ignore_completeConsumer")
    fun complete(handler: Consumer<in Result<T>>): Later<T> = complete(cleanUp = handler::accept)

    @JsName("toPromise")
    fun toCompletable(): PlatformConcurrentMonad<out T>

    @JsName("_ignore_toPromise")
    fun toCompletable(executor: Executor): PlatformConcurrentMonad<out T>

    fun onUpdate(callback: (ExecutorState<T>) -> Unit): Later<T>

    @JsName("_ignore_onUpdate")
    fun onUpdate(callback: Callback<ExecutorState<T>>): Later<T>
}
