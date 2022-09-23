package koncurrent.later.internal

import koncurrent.PendingLater

internal class LaterQueueItem<in T, out R>(
    val later: PendingLater<@UnsafeVariance R>,
    val resolver: ((T) -> R)?,
    val rejecter: ((Throwable) -> R)?
)