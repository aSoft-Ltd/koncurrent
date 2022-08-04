@file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import kotlin.js.JsExport

@JsExport
fun interface FewCollector<in T> {
    fun emit(value: T)
}