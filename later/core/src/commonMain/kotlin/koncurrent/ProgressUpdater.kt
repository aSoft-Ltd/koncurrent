@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

import kotlin.js.JsExport

interface ProgressUpdater {
    fun updateProgress(done: Long, total: Long): Boolean
}