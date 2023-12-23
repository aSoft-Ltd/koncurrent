package koncurrent.internal

@PublishedApi
internal class AwaitedQueueItem<in T, out R>(
    val awaited: MutableAwaitedImpl<Any?>,
    val resolver: ((T) -> R)?,
    val recover: ((Throwable) -> R)?
) {
    companion object {
        inline operator fun <T, R> invoke(
            later: MutableAwaitedImpl<R>,
            noinline resolver: ((T) -> R)?,
            noinline recover: ((Throwable) -> R)?
        ): AwaitedQueueItem<T, R> = AwaitedQueueItem(later as MutableAwaitedImpl<Any?>, resolver, recover)
    }
}