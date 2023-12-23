package koncurrent

expect class PendingLater<T> : Later<T>

expect fun <T> PendingLater<T>.resolveWith(value: T) : Boolean

expect fun <T> PendingLater<T>.rejectWith(error: Throwable) : Boolean
