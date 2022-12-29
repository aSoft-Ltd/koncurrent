package koncurrent.internal

import koncurrent.Later
import koncurrent.Executor

actual abstract class PlatformLater<out T> : Later<T> {
    actual abstract override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Later<R>
}