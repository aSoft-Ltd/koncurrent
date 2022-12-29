package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.FailedLater
import koncurrent.Later
import koncurrent.SuccessfulLater
import koncurrent.Thenable

fun <D> Result<D>.toLater(): Later<D> = when (this) {
    is Failure -> FailedLater(cause)
    is Success -> SuccessfulLater(data)
}

fun <D> Result<D>.toThenable(): Thenable<D> = toLater()