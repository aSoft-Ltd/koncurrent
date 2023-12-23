package koncurrent

fun interface AwaitedConsumer<T> {
    fun accept(value: T)
}