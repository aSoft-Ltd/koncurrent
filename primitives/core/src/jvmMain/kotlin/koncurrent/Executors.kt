package koncurrent

import java.util.concurrent.ForkJoinPool

actual object Executors {
    actual fun default(): Executor = ForkJoinPool.commonPool()
}