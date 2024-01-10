@file:Suppress(
    "FunctionName",
    "EXPECT_ACTUAL_INCOMPATIBILITY", // for kotlin jvm, K2 would fail to compile once removed
    "EXPECT_ACTUAL_MISMATCH", // removing this will make the K2/JVM not compile
    "NO_ACTUAL_FOR_EXPECT"
)

package koncurrent

import kase.Result
import kase.Success
import kase.progress.ProgressPublisher
import kollections.List

expect fun <T> Later(
    executor: Executor = Executors.default(),
    handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T>

expect fun <T> PendingLater(executor: Executor = Executors.current()): Later<T>

expect fun <T> Executor.later(builder: ProgressPublisher.() -> T): Later<T>

expect fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>>

expect fun <T> Laters(them: Collection<Later<T>>) : Later<List<Result<T>>>

expect fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>>

expect fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>>

expect fun <T> SuccessfulLater(value: T, executor: Executor = Executors.current()): Later<T>

expect fun FailedLater(error: Throwable, executor: Executor = Executors.current()): Later<Nothing>