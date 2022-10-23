@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import kollections.List
import kotlin.js.JsExport
import kotlin.math.round

data class ProgressState(
    val current: StageProgress,
    val stages: List<StageProgress>,
) {
    val aggregate: Double
        get() = run {
            if (stages.isEmpty()) return@run 0.0
            var total = 0.0
            val interval = 100.0 / stages.size
            stages.forEach { stage ->
                total += interval * stage.doneFraction
            }
           round(total)
        }
}