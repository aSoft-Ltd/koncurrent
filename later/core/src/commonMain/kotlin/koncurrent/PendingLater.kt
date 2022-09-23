@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE", "WRONG_EXPORTED_DECLARATION")

package koncurrent

import kotlin.js.JsExport

interface PendingLater<T> : Later<T>, ProgressUpdater {
    fun resolveWith(value: T): Boolean

    fun rejectWith(error: Throwable): Boolean
}
