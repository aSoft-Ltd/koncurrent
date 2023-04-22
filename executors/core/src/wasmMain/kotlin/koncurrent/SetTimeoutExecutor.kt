package koncurrent

import functions.Runnable

object SetTimeoutExecutor : Executor {
    override fun execute(runnable: Runnable) {
        setTimeout({ runnable.run() })
    }
}