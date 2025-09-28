package koncurrent.internal

import kotlin.js.JsAny
import kotlin.js.JsName

@JsName("Promise")
public external class TestPromise : JsAny {
    /**
     * @suppress
     */
    public fun then(onFulfilled: ((JsAny) -> Unit), onRejected: ((JsAny) -> Unit)): TestPromise

    /**
     * @suppress
     */
    public fun then(onFulfilled: ((JsAny) -> Unit)): TestPromise
}