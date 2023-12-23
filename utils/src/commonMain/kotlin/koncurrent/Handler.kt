package koncurrent

fun interface Handler<out T> {
    fun execute(resolve: Consumer<@UnsafeVariance T>, reject: Consumer<Throwable>)
}