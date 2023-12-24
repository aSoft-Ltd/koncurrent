package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.FailedLater
import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catch
import koncurrent.SuccessfulLater

fun <D> Result<D>.toLater(): Later<D> = when (this) {
    is Success -> SuccessfulLater(data)
    is Failure -> FailedLater(cause)
}