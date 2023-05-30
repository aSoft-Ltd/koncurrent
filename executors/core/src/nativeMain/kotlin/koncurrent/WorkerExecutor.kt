package koncurrent

import kotlin.native.concurrent.TransferMode
import kotlin.native.concurrent.Worker

class WorkerExecutor(private val worker: Worker) : Executor {
    override fun execute(runnable: Runnable) {
        worker.execute(TransferMode.SAFE, { runnable }) {
            it.run()
        }
    }

    companion object {
        private val defaultInstance by lazy { Worker.start(true, name = "Default Worker Executor") }
        fun default(): Executor = WorkerExecutor(defaultInstance)
    }
}