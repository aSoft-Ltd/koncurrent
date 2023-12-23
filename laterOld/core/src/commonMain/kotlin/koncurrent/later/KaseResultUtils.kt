package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.FailedLater
import koncurrent.Later
import koncurrent.SuccessfulLater

fun <D> Result<D>.toLater(): Later<D> = when (this) {
    is Success -> SuccessfulLater(data)
    is Failure -> FailedLater(cause)
}