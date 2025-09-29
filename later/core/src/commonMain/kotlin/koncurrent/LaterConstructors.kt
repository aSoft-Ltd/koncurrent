@file:Suppress(
    "FunctionName",
    "NON_EXPORTABLE_TYPE",
    "NOTHING_TO_INLINE",
    "ACTUAL_WITHOUT_EXPECT"
)

package koncurrent

import kase.Result
import kase.Success
import kase.progress.ProgressBus
import kase.progress.ProgressPublisher
import kase.progress.VoidProgressBus
import kollections.Collection
import kollections.List
import kollections.toList
import kollections.toTypedArray

inline fun <T> Later(
    executor: Executor = Executors.default(),
    noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T> = awaited(executor, handler)

inline fun <T> PendingLater(executor: Executor = Executors.default()): Later<T> = MutableAwaited(executor)

fun <T> Executor.later(bus: ProgressBus = VoidProgressBus, builder: ProgressPublisher.() -> T): Later<T> = awaited(builder)

fun <T> Executor.later(builder: ProgressPublisher.() -> T): Later<T> = awaited(builder)

inline fun <T> SuccessfulLater(
    value: T,
    executor: Executor = Executors.default()
): Later<T> = SuccessfulAwaited(value, executor)

inline fun FailedLater(
    error: Throwable,
    executor: Executor = Executors.default()
): Later<Nothing> = FailedAwaited(error, executor)

fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>> = allAwaited(*laters)

fun <T> Laters(them: Collection<Later<T>>): Later<List<Result<T>>> = Laters(*them.toList().toTypedArray())

inline fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>> = SuccessfulAllAwaited(*laters)

inline fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>> = SuccessfulAwaitedValues(*laters)