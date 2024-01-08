package koncurrent

external class Promise<out T>(executor: (resolve: (T) -> Unit, reject: (Throwable) -> Unit) -> Unit) {
    fun <S> then(onFulfilled: ((T) -> S)?, onRejected: ((Throwable) -> S)?): Promise<S> = definedExternally

    fun catch(onRejected: (Throwable) -> @UnsafeVariance T): Promise<T> = definedExternally

//    override fun finally(onFinally: () -> Unit): Promise<T> = definedExternally

    companion object {
        fun <S> all(promise: Array<Promise<S>>): Promise<Array<S>>

        fun <S> race(promise: Array<Promise<S>>): Promise<S>

        fun reject(e: Throwable): Promise<Nothing>

        fun <S> resolve(e: S): Promise<S>
        fun <S> resolve(e: Promise<S>): Promise<S>
    }
}