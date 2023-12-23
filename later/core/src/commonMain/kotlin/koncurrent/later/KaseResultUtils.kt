package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.FailedLater
import koncurrent.SuccessfulLater

inline fun <D> Result<D>.toLater() = when (this) {
    is Failure -> FailedLater(cause)
    is Success -> SuccessfulLater(data)
}