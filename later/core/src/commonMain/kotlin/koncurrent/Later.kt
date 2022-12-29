package koncurrent

import kase.ExecutorState
import kase.Result
import koncurrent.internal.PlatformConcurrentMonad
import kotlin.js.JsName
import kotlin.jvm.JvmSynthetic

expect interface Later<out T> : Thenable<T> {
    val state: ExecutorState<T>

    /**
     * Schedules a code block to be executed by the provided [executor] after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin only
     */
    fun <R> then(onResolved: (T) -> R, executor: Executor): Later<R>

    /**
     * Schedules a code block to be executed after this [Later] resolves
     * This Method is much more friendly when called from kotlin or javascript
     */
    override fun <R> then(onResolved: (T) -> R): Later<R>

    override fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor?): Later<R>

    override fun <R> andThen(onResolved: (T) -> Thenable<R>): Later<R>

    override fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Later<T>

    override fun catch(handler: (Throwable) -> @UnsafeVariance T): Later<T>

    fun complete(cleaner: (state: Result<T>) -> Any?, executor: Executor?): Later<T>

    fun complete(cleaner: (state: Result<T>) -> Any?): Later<T>

    fun toCompletable(): PlatformConcurrentMonad<@UnsafeVariance T>

    fun toCompletable(executor: Executor): PlatformConcurrentMonad<@UnsafeVariance T>

    fun onUpdate(callback: (ExecutorState<T>) -> Unit): Later<T>
}