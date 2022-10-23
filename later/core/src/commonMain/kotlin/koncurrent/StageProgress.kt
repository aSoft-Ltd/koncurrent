@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import kotlin.js.JsExport
import kotlin.math.round

interface StageProgress : Stage {

    /**
     * Amount completed in this stage
     */
    val done: Long

    /**
     * Total quantity required to be done for completion
     */
    val total: Long

    val doneAmountAsDouble: Double

    val totalAmountAsDouble: Double


    val doneFraction: Double

    val remainingFraction: Double


    val donePercentage: Double

    val remainingPercentage: Double
}