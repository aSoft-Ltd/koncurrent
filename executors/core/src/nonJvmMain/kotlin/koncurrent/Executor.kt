package koncurrent

actual interface Executor {
    actual fun execute(runnable: Runnable)
}