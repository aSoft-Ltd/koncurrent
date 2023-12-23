package koncurrent.awaited

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.FailedAwaited
import koncurrent.Awaited
import koncurrent.SuccessfulAwaited

fun <D> Result<D>.toAwaited(): Awaited<D> = when (this) {
    is Success -> SuccessfulAwaited(data)
    is Failure -> FailedAwaited(cause)
}