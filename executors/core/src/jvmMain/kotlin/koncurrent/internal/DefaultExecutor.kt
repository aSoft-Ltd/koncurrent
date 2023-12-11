package koncurrent.internal

import java.util.concurrent.ForkJoinPool
import koncurrent.Executor

internal actual fun defaultExecutor() : Executor = ForkJoinPool.commonPool()