package koncurrent.internal

import koncurrent.Executor
import koncurrent.WorkerExecutor

internal actual fun defaultExecutor() : Executor = WorkerExecutor.default()