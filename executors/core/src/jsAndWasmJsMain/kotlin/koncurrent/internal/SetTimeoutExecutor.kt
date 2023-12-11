package koncurrent.internal

import koncurrent.Executor
import koncurrent.Runnable

internal object SetTimeoutExecutor : Executor {
    override fun execute(runnable: Runnable) {
        setTimeout(runnable::run,0)
    }
}