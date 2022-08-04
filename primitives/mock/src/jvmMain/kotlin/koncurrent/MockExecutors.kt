package koncurrent

import java.util.concurrent.Executor

object MockExecutors {
    @JvmStatic
    @JvmOverloads
    fun create(
        name: String = MockExecutorConfig.DEFAULT_NAME,
        logOnExecute: Boolean = MockExecutorConfig.DEFAULT_LOG_ON_EXECUTE
    ): Executor = MockExecutor(name, logOnExecute)
}