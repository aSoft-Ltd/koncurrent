package koncurrent

external class Promise<out T>(executor: (resolve: (T) -> Unit, reject: (Throwable) -> Unit) -> Unit) {
    fun <S : Any> then(onFulfilled: ((T) -> S)?, onRejected: ((Throwable) -> S)? = definedExternally): Promise<S>

    fun catch(onRejected: (Throwable) -> @UnsafeVariance T): Promise<T>

    fun finally(onFinally: () -> Unit): Promise<T>

    companion object {
        fun <S : Any> all(promise: Array<Promise<S>>): Promise<Array<S>>

        fun <S : Any> race(promise: Array<Promise<S>>): Promise<S>

        fun reject(e: Throwable): Promise<Nothing>

        fun <S : Any> resolve(e: S): Promise<S>
        fun <S : Any> resolve(e: Promise<S>): Promise<S>
    }
}