@file:Suppress("FunctionName")

package koncurrent

import kase.ProgressPublisher

inline fun <T> Later(
    executor: Executor = Executors.default(),
    noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T> = LaterPromise(handler, executor)

inline fun <T> PendingLater(executor: Executor = SynchronousExecutor): PendingLater<T> = LaterPromise.pending(executor)

inline fun <T> Executor.later(noinline builder: Executor.(ProgressPublisher) -> T): Later<T> {
    val l = LaterPromise.pending<T>(executor = this)
    execute {
        try {
            l.resolveWith(builder(l))
        } catch (err: Throwable) {
            l.rejectWith(err)
        }
    }
    return l
}