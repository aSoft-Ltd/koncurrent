@file:Suppress("ACTUAL_WITHOUT_EXPECT", "ACTUAL_TYPE_ALIAS_TO_CLASS_WITH_DECLARATION_SITE_VARIANCE", "ACTUAL_TYPE_ALIAS_WITH_COMPLEX_SUBSTITUTION")

package koncurrent

import kotlin.js.Promise

actual typealias AwaitedTestResult = Promise<JsAny?>