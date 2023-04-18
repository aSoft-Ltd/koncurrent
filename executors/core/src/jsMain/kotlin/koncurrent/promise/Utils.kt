package koncurrent.promise

import koncurrent.Promise

// It's workaround for KT-19672 since we can fix it properly until KT-11265 isn't fixed.
inline fun <T, S> Promise<out Promise<out T>>.then(
    noinline onFulfilled: ((T) -> S)?
): Promise<out S> = this.unsafeCast<Promise<T>>().then(onFulfilled)

inline fun <T, S> Promise<out Promise<out T>>.then(
    noinline onFulfilled: ((T) -> S)?,
    noinline onRejected: ((Throwable) -> S)?
): Promise<out S> = this.unsafeCast<Promise<T>>().then(onFulfilled, onRejected)
