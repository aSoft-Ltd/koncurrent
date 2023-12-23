@file:JsExport
@file:Suppress("WRONG_EXPORTED_DECLARATION")

package koncurrent

import kase.progress.ProgressPublisher
import kotlinx.JsExport

interface PendingLater<T> : Later<T>, ProgressPublisher {
    fun resolveWith(value: T): Boolean

    fun rejectWith(error: Throwable): Boolean
}
