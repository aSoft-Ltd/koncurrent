package koncurrent.internal

import koncurrent.LaterPromise

@PublishedApi
internal class LaterQueueItem<in T, out R>(
    val later: LaterPromise<Any?>,
    val resolver: ((T) -> R)?,
    val recover: ((Throwable) -> R)?
) {
    companion object {
        inline operator fun <T, R> invoke(
            later: LaterPromise<R>,
            noinline resolver: ((T) -> R)?,
            noinline recover: ((Throwable) -> R)?
        ): LaterQueueItem<T, R> = LaterQueueItem(later as LaterPromise<Any?>, resolver, recover)
    }
}