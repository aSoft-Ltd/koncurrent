package koncurrent.later

import koncurrent.FailedLater
import koncurrent.Later
import koncurrent.SuccessfulLater
import koncurrent.Thenable

fun <D> Result<D>.toLater(): Later<D> {
    val exp = exceptionOrNull()
    return if (exp != null) {
        FailedLater(exp)
    } else {
        SuccessfulLater(getOrThrow())
    }
}

fun <D> Result<D>.toThenable(): Thenable<D> = toLater()