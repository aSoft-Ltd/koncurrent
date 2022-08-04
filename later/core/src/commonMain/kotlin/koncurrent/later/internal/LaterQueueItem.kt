package koncurrent.later.internal

import koncurrent.Later

internal class LaterQueueItem<T, out R>(
    val later: Later<out R>,
    val resolver: ((T) -> R)?,
    val rejecter: ((Throwable) -> R)?
)