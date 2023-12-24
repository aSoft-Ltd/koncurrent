@file:Suppress(
    "FunctionName",
    "EXPECT_ACTUAL_INCOMPATIBILITY" // for kotlin jvm, K2 would fail to compile once removed
)

package koncurrent

expect fun <T> Later(
    executor: Executor = Executors.default(),
    handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T>

expect fun <T> PendingLater(executor: Executor = Executors.current()): PendingLater<T>

//expect fun <T> Executor.later(noinline builder: ProgressPublisher.() -> T): Later<T> {
//    val l = PendingLater<T>(executor = this)
//    execute {
//        try {
//            l.resolveWith(builder(l))
//        } catch (err: Throwable) {
//            l.rejectWith(err)
//        }
//    }
//    return l
//}

expect fun <T> SuccessfulLater(value: T, executor: Executor = Executors.current()): Later<T>
expect fun FailedLater(error: Throwable, executor: Executor = Executors.current()): Later<Nothing>