@file:Suppress("ACTUAL_WITHOUT_EXPECT", "ACTUAL_TYPE_ALIAS_TO_CLASS_WITH_DECLARATION_SITE_VARIANCE")
package koncurrent

actual typealias Later<T> = Awaited<T>

actual inline fun <T> Later<T>.resolveWith(value: T) = resolveWith(value)

actual fun <T> Later<T>.rejectWith(error: Throwable) = rejectWith(error)