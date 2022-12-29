package koncurrent.internal

import koncurrent.Executor
import koncurrent.Later

expect abstract class PlatformLater<out T> : Later<T> {
    abstract override fun <R> then(onResolved: ((T) -> R)?, onRejected: ((Throwable) -> R)?, executor: Executor?): Later<R>
}