package koncurrent

import kotlin.js.JsAny
import kotlin.js.JsArray
import kotlin.js.JsPromiseError

external class Promise<out T : JsAny?>(executor: (resolve: (T) -> Unit, reject: (JsPromiseError) -> Unit) -> Unit) : JsAny{
    fun <S : JsAny?> then(onFulfilled: ((T) -> S)?, onRejected: ((JsPromiseError) -> S)?): Promise<S>

    fun catch(onRejected: (JsPromiseError) -> @UnsafeVariance T): Promise<T>

//    override fun finally(onFinally: () -> Unit): Promise<T> = definedExternally

    companion object {
        fun <S : JsAny?> all(promise: JsArray<Promise<S>>): Promise<JsArray<S>>

        fun <S : JsAny?> race(promise: JsArray<Promise<S>>): Promise<S>

        fun reject(e: JsPromiseError): Promise<Nothing>

        fun <S : JsAny?> resolve(e: S): Promise<S>

        fun <S : JsAny?> resolve(e: Promise<S>): Promise<S>
    }
}