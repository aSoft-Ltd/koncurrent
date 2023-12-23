package koncurrent

fun interface Consumer<T> {
    fun accept(value: T)
}