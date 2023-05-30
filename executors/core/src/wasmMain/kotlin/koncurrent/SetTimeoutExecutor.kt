package koncurrent

object SetTimeoutExecutor : Executor {
    override fun execute(runnable: Runnable) {
        setTimeout({ runnable.run() })
    }
}