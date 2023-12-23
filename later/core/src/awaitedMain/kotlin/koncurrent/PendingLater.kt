@file:Suppress("ACTUAL_WITHOUT_EXPECT", "ACTUAL_TYPE_ALIAS_TO_CLASS_WITH_DECLARATION_SITE_VARIANCE")
package koncurrent

actual typealias PendingLater<T> = MutableAwaited<T>

actual inline fun <T> PendingLater<T>.resolveWith(value: T) = resolveWith(value)

actual fun <T> PendingLater<T>.rejectWith(error: Throwable) = rejectWith(error)