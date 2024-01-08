package koncurrent.awaited

import koncurrent.Awaited
import koncurrent.FailedAwaited
import koncurrent.SuccessfulAwaited

inline fun <D> Result<D>.toAwaited(): Awaited<D> = try {
    SuccessfulAwaited(getOrThrow())
} catch (err: Throwable) {
    FailedAwaited(err)
}