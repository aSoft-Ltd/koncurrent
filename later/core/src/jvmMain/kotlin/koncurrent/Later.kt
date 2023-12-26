@file:Suppress("Since15")

package koncurrent

import java.util.concurrent.CompletionStage
import java.util.concurrent.Future

actual interface Later<out T> : CompletionStage<@UnsafeVariance T>, Future<@UnsafeVariance T>