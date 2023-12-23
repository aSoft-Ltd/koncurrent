package koncurrent

@JsName("Promise")
external class MutablePromise<T>(executor: (resolve: (T) -> Unit, reject: (Throwable) -> Unit) -> Unit) : Promise<T> {
    override fun <S> then(onFulfilled: ((T) -> S)?, onRejected: ((Throwable) -> S)?): Promise<S> = definedExternally

    override fun catch(onRejected: (Throwable) -> @UnsafeVariance T): Promise<T> = definedExternally

    override fun finally(onFinally: () -> Unit): Promise<T> = definedExternally

    companion object {
        fun <S : Any> all(promise: Array<Promise<S>>): Promise<Array<S>>

        fun <S : Any> race(promise: Array<MutablePromise<S>>): Promise<S>

        fun reject(e: Throwable): Promise<Nothing>

        fun <S : Any> resolve(e: S): Promise<S>
        fun <S : Any> resolve(e: Promise<S>): MutablePromise<S>
    }
}