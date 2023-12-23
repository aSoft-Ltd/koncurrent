@file:JsExport
@file:Suppress("WRONG_EXPORTED_DECLARATION")

package koncurrent

import kase.progress.ProgressPublisher
import kotlinx.JsExport

interface MutableAwaited<T> : Awaited<T>, ProgressPublisher {
    fun resolveWith(value: T): Boolean

    fun rejectWith(error: Throwable): Boolean
}
