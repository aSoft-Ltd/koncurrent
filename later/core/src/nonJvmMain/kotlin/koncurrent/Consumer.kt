package koncurrent

actual fun interface Consumer<T> {
    actual fun accept(value: T)
}