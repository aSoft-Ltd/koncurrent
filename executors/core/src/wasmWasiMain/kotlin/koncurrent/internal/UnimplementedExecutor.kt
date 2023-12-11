package koncurrent.internal

import koncurrent.Executor
import koncurrent.Runnable

internal object UnimplementedExecutor : Executor {
    override fun execute(runnable: Runnable) {
        TODO("koncurrent.Executor is not yet implemented for wasi")
    }
}