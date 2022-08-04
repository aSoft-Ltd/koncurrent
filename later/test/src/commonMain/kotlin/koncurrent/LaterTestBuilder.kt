package koncurrent

expect fun <T> runLaterTest(executor: Executor = MockExecutor(), block: () -> Later<out T>): LaterTestResult