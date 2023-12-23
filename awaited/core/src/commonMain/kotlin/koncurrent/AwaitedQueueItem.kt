package koncurrent

@PublishedApi
internal class AwaitedQueueItem<in T, out R>(
    val awaited: MutableAwaited<Any?>,
    val resolver: ((T) -> R)?,
    val recover: ((Throwable) -> R)?
) {
    companion object {
        inline operator fun <T, R> invoke(
            later: MutableAwaited<R>,
            noinline resolver: ((T) -> R)?,
            noinline recover: ((Throwable) -> R)?
        ): AwaitedQueueItem<T, R> = AwaitedQueueItem(later as MutableAwaited<Any?>, resolver, recover)
    }
}