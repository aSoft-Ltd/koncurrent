package koncurrent.later

import koncurrent.FailedLater
import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catch
import koncurrent.SuccessfulLater

fun <D> Result<D>.toLater(): Later<D> = try {
    SuccessfulLater(getOrThrow())
} catch (err: Throwable) {
    FailedLater(err)
}