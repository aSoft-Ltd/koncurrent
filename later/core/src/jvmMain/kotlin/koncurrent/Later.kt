@file:Suppress("ACTUAL_WITHOUT_EXPECT")
package koncurrent

import java.util.concurrent.CompletionStage

actual typealias Later<T> = CompletionStage<T>