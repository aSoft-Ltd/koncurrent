package koncurrent

external class Promise<T>(executor: (resolve: (T) -> Unit, reject: (Throwable) -> Unit) -> Unit) {
    fun <S> then(onFulfilled: ((T) -> S)?, onRejected: ((Throwable) -> S)? = definedExternally): Promise<out S>

    fun catch(onRejected: (Throwable) -> T): Promise<out T>

    fun finally(onFinally: () -> Unit): Promise<out T>

    companion object {
        fun <S> all(promise: Array<out Promise<out S>>): Promise<out Array<out S>>

        fun <S> race(promise: Array<out Promise<out S>>): Promise<out S>

        fun reject(e: Throwable): Promise<out Nothing>

        fun <S> resolve(e: S): Promise<out S>
        fun <S> resolve(e: Promise<S>): Promise<out S>
    }
}