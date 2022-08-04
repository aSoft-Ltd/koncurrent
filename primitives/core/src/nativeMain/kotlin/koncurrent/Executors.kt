package koncurrent

actual object Executors {
    actual fun default(): Executor = WorkerExecutor.default()
}