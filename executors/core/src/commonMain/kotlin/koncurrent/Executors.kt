package koncurrent

import koncurrent.internal.defaultExecutor

object Executors {
    fun current() : Executor = SynchronousExecutor
    fun default() : Executor = defaultExecutor()
}