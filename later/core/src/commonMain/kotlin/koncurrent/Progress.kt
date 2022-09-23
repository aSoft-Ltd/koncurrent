@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import kotlin.js.JsExport
import kotlin.js.JsName

data class Progress(
    val done: Long,
    val total: Long
) {
    @JsName("fromInt")
    constructor(done: Int, total: Int) : this(done.toLong(), total.toLong())

    @JsName("of")
    constructor(done: Double, total: Double) : this(done.toLong(), total.toLong())

    val doneFraction = done.toDouble() / total.toDouble()

    val donePercentage = 100 * doneFraction

    val remainingFraction = 1 - doneFraction

    val remainingPercentage = 100 - donePercentage
}