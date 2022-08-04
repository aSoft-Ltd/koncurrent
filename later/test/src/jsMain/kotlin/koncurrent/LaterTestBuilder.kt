package koncurrent

actual fun <T> runLaterTest(executor: Executor, block: () -> Later<out T>): dynamic {
    return Promise<Unit> { resolve, reject ->
        block().then({ resolve(Unit) }, reject)
    }.unsafeCast<LaterTestResult>()
}