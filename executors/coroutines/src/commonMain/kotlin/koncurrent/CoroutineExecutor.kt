package koncurrent

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch

class CoroutineExecutor(
    val scope: CoroutineScope = CoroutineScope(Dispatchers.Default + SupervisorJob())
) : Executor {
    override fun execute(runnable: Runnable) {
        scope.launch { runnable.run() }
    }

    companion object {
        private val defaultInstance by lazy { CoroutineExecutor() }
        fun default(): CoroutineExecutor = defaultInstance
    }
}