package koncurrent

external interface Promise<out T> {
    fun <S> then(onFulfilled: ((T) -> S)?, onRejected: ((Throwable) -> S)? = definedExternally): Promise<S>

    fun catch(onRejected: (Throwable) -> @UnsafeVariance T): Promise<T>

    fun finally(onFinally: () -> Unit): Promise<T>
}