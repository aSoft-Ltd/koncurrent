package koncurrent.pending.internal

import koncurrent.ConcurrentState
import koncurrent.Promise

@PublishedApi
internal inline var <T> Promise<out T>.state: ConcurrentState<T>?
    inline set(value) {
        asDynamic().state = value
    }
    inline get() = asDynamic().state as? ConcurrentState<T>

@PublishedApi
internal inline var <T> Promise<out T>.resolveFn: ((T) -> Unit)?
    inline set(value) {
        asDynamic().resolveFn = value
    }
    inline get() = asDynamic().resolveFn as? ((T) -> Unit)

@PublishedApi
internal inline var <T> Promise<out T>.rejectFn: ((Throwable) -> Unit)?
    inline set(value) {
        asDynamic().rejectFn = value
    }
    inline get() = asDynamic().rejectFn as? ((Throwable) -> Unit)