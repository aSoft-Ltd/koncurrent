package koncurrent

import functions.Function1I1R
import kotlin.jvm.JvmSynthetic

actual interface Thenable<out T> {
    @JvmSynthetic
    actual fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Thenable<R>

    @JvmSynthetic
    actual fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?): Thenable<R>

    @JvmSynthetic
    actual fun <R> then(onResolved: (T) -> R): Thenable<R>

    fun <R> then(onResolved: Function1I1R<T, R>): Thenable<R>

    @JvmSynthetic
    actual fun <R> andThen(onResolved: (T) -> Thenable<R>, executor: Executor?): Thenable<R>

    @JvmSynthetic
    actual fun <R> andThen(onResolved: (T) -> Thenable<R>): Thenable<R>

    fun <R> andThen(onResolved: Function1I1R<T, Thenable<R>>): Thenable<R>

    actual fun catch(handler: (Throwable) -> @UnsafeVariance T): Thenable<T>

    actual fun catch(handler: (Throwable) -> @UnsafeVariance T, executor: Executor): Thenable<T>

    fun error(handler: Function1I1R<Throwable, @UnsafeVariance T>): Thenable<T>
}