package koncurrent.internal

import functions.Callback

fun interface LaterHandler<out T> {
    fun execute(resolve: Callback<T>, reject: Callback<Throwable>)
}
