package koncurrent

fun interface AwaitedHandler<out T> {
    fun execute(resolve: AwaitedConsumer<@UnsafeVariance T>, reject: AwaitedConsumer<Throwable>)
}