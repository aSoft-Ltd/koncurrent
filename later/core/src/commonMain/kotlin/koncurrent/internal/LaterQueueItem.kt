package koncurrent.internal

import koncurrent.LaterPromise

@PublishedApi
internal class LaterQueueItem<in T, out R>(
    val later: LaterPromise<Any?>,
    val resolver: ((T) -> R)?,
    val recover: ((Throwable) -> R)?
) {
    companion object {
        operator fun <T, R> invoke(
            later: LaterPromise<R>,
            resolver: ((T) -> R)?,
            recover: ((Throwable) -> R)?
        ): LaterQueueItem<T, R> = LaterQueueItem(later as LaterPromise<Any?>, resolver, recover)
    }
}