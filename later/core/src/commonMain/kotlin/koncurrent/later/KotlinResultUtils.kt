package koncurrent.later

import koncurrent.FailedLater
import koncurrent.Later
import koncurrent.SuccessfulLater
import koncurrent.Thenable

fun <D> Result<D>.toLater(): Later<D> = try {
    SuccessfulLater(getOrThrow())
} catch (err: Throwable) {
    FailedLater(err)
}

fun <D> Result<D>.toThenable(): Thenable<D> = toLater()