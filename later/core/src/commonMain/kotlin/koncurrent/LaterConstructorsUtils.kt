@file:Suppress("FunctionName")

package koncurrent

import kase.progress.ProgressBus
import kase.progress.ProgressState

inline fun <T> T.toLater(
    executor: Executor = Executors.current()
) = SuccessfulLater(this, executor)

inline fun <T> Later(
    value: T,
    executor: Executor = Executors.current()
) = SuccessfulLater(value, executor)

inline fun FailedLater(
    message: String,
    executor: Executor = Executors.current()
) = FailedLater(RuntimeException(message), executor)

inline fun TODOLater(
    message: String = "Not implemented",
    executor: Executor = Executors.current()
) = FailedLater(NotImplementedError(message), executor)

fun <T> Later<T>.onUpdate(bus: ProgressBus, callback: (ProgressState) -> Unit): Later<T> {
    bus.onUpdate(callback)
    return this
}