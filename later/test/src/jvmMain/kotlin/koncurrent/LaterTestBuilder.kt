package koncurrent

actual fun <T> runLaterTest(executor: Executor, block: () -> Later<out T>): LaterTestResult {
    val later = block()
    later.toPending(executor).get()
}