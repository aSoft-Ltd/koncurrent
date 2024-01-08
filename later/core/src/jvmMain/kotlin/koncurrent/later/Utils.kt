@file:JvmName("UtilsJvm")
@file:Suppress(
    "Since15"
)

package koncurrent.later

import java.util.function.BiConsumer

internal inline fun <T> completeConsumer(
    crossinline resolve: (T) -> Unit,
    crossinline reject: (Throwable) -> Unit
): BiConsumer<T?, Throwable?> = BiConsumer { value, error ->
    when {
        value != null -> resolve(value)
        error != null -> reject(error)
        else /* value == null && err == null */ -> reject(IllegalStateException("Completable future didn't return with value or exception"))
    }
}