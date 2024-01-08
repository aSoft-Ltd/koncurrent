package koncurrent.awaited

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.Awaited
import koncurrent.FailedAwaited
import koncurrent.SuccessfulAwaited

inline fun <D> Result<D>.toAwaited(): Awaited<D> = when (this) {
    is Success -> SuccessfulAwaited(data)
    is Failure -> FailedAwaited(cause)
}