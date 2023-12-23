@file:Suppress(
    "ACTUAL_TYPE_ALIAS_WITH_USE_SITE_VARIANCE",
    "ACTUAL_TYPE_ALIAS_TO_CLASS_WITH_DECLARATION_SITE_VARIANCE",
    "ACTUAL_MISSING",
    "NO_ACTUAL_FOR_EXPECT",
    "ACTUAL_WITHOUT_EXPECT"
)
package koncurrent

import java.util.concurrent.CompletionStage

actual typealias Later<T> = CompletionStage<out T>