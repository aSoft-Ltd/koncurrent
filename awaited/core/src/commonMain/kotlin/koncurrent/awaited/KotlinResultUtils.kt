package koncurrent.awaited

import koncurrent.FailedAwaited
import koncurrent.Awaited
import koncurrent.SuccessfulAwaited

fun <D> Result<D>.toAwaited(): Awaited<D> = try {
    SuccessfulAwaited(getOrThrow())
} catch (err: Throwable) {
    FailedAwaited(err)
}