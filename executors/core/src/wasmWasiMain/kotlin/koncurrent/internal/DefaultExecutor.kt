package koncurrent.internal

import koncurrent.Executor

internal actual fun defaultExecutor() : Executor = UnimplementedExecutor