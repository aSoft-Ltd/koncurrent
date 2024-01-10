@file:Suppress(
    "FunctionName", 
    "NON_EXPORTABLE_TYPE",
    "NOTHING_TO_INLINE",
    "ACTUAL_WITHOUT_EXPECT"
)

package koncurrent

import kase.progress.ProgressBus
import kase.progress.ProgressPublisher
import kase.progress.VoidProgressBus
import kollections.List
import kase.Result
import kase.Success
import kollections.toList
import kollections.toTypedArray
import kollections.Collection
import koncurrent.later.filterSuccess
import koncurrent.later.mapValues
import koncurrent.later.then
import kotlinx.JsName

actual inline fun <T> Later(
    executor: Executor,
     noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T> = awaited(executor, handler)

actual inline fun <T> PendingLater(executor: Executor): Later<T> = MutableAwaited(executor)

actual fun <T> Executor.later(bus: ProgressBus = VoidProgressBus, builder: ProgressPublisher.() -> T): Later<T> = awaited(builder)

actual inline fun <T> SuccessfulLater(
    value: T,
    executor: Executor
): Later<T> = SuccessfulAwaited(value, executor)

actual inline fun FailedLater(
    error: Throwable,
    executor: Executor
): Later<Nothing> = FailedAwaited(error, executor)

actual fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>> = allAwaited(*laters)

actual fun <T> Laters(them: Collection<Later<T>>) : Later<List<Result<T>>> = Laters(*them.toList().toTypedArray())

actual inline fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>> = SuccessfulAllAwaited(*laters)

actual inline fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>> = SuccessfulAwaitedValues(*laters)