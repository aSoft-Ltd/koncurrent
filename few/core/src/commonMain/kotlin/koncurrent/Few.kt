@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import functions.BiConsumer
import functions.Consumer
import functions.Function
import koncurrent.few.internal.simpleFew
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic
import kotlin.jvm.JvmSynthetic

@JsExport
interface Few<out T> {
    /**
     * To be callable from kotlin + java
     */
    @JsName("_ignore_collect")
    fun collect(collector: FewCollector<T>)

    /**
     * To be callable from kotlin + js
     */
    @JvmSynthetic
    fun collect(collector: (T) -> Unit)

    fun executeOn(executor: Executor): Few<T>

    /**
     * To be callable from kotlin + js
     */
    @JvmSynthetic
    fun onEach(block: (T) -> Unit): Few<T>

    /**
     * To be callable from kotlin + java
     */
    @JsName("_ignore_onEach")
    fun onEach(consumer: Consumer<@UnsafeVariance T>): Few<T>

    /**
     * To be callable from kotlin + js
     */
    @JvmSynthetic
    fun <R> map(transformer: (T) -> R): Few<R>

    /**
     * To be callable from kotlin + java
     */
    @JsName("_ignore_map")
    fun <R> map(transformer: Function<T, R>): Few<R>

    /**
     * To be called from kotlin only
     */
    @JsName("_ignore_catch")
    @JvmSynthetic
    fun catch(catcher: FewCollector<@UnsafeVariance T>.(Throwable) -> Unit): Few<T>

    /**
     * To be called in kotlin + js
     */
    @JvmSynthetic
    fun error(catcher: (FewCollector<@UnsafeVariance T>, Throwable) -> Unit): Few<T>

    @JsName("_ignore_error")
    fun error(catcher: BiConsumer<FewCollector<@UnsafeVariance T>, Throwable>): Few<T>
}