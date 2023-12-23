package koncurrent

typealias Resolver<T> = (T) -> Unit
typealias Rejecter = (Throwable) -> Unit