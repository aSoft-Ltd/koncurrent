package koncurrent

fun interface LaterHandler<out T> {
    fun execute(resolve: Consumer<@UnsafeVariance T>, reject: Consumer<Throwable>)
}