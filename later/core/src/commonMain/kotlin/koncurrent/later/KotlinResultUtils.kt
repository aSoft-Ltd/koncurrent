package koncurrent.later

import koncurrent.FailedLater
import koncurrent.Later
import koncurrent.SuccessfulLater

fun <D> Result<D>.toLater(): Later<D> = try {
    SuccessfulLater(getOrThrow())
} catch (err: Throwable) {
    FailedLater(err)
}