package koncurrent

import functions.Runnable
import kotlin.js.JsExport

@JsExport
actual interface Executor {
    actual fun execute(runnable: Runnable)
}