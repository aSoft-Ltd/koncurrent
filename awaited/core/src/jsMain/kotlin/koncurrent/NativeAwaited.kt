@file:JsExport
package koncurrent

import kotlinx.JsExport

actual interface NativeAwaited<out T> {
    fun toPromise() : Promise<T>
}