@file:Suppress(
    "NOTHING_TO_INLINE",
    "Since15",
)

package koncurrent

import kase.Failure
import kase.Result
import kase.Success
import java.util.concurrent.CompletableFuture
import java.util.concurrent.CompletionStage
import java.util.concurrent.Executor
import java.util.concurrent.TimeUnit
import java.util.function.BiConsumer
import java.util.function.BiFunction
import java.util.function.Consumer
import java.util.function.Function
import java.util.function.Supplier

actual class PendingLater<T>(
    @PublishedApi
    internal val executor: Executor,
    @PublishedApi
    internal val wrapped: CompletableFuture<T>
) : CompletableFuture<T>(), Later<T> {
    fun <R> then(executor: Executor = this.executor, onResolve: (T) -> R) = PendingLater(
        executor,
        wrapped = wrapped.thenApplyAsync(onResolve, executor)
    )

    fun <R> andThen(executor: Executor = this.executor, onResolve: (T) -> Later<R>) = PendingLater(
        executor,
        wrapped = wrapped.thenComposeAsync(onResolve, executor)
    )

    fun catch(executor: Executor = this.executor, onRejected: (Throwable) -> T) = PendingLater(
        executor,
        wrapped = wrapped.exceptionallyAsync(onRejected, executor)
    )

    fun finally(executor: Executor = this.executor, cleanUp: (state: Result<T>) -> Unit): PendingLater<T> {
        wrapped.whenCompleteAsync({ value, error ->
            when {
                value != null -> cleanUp(Success(value as T))
                error != null -> cleanUp(Failure(error))
                else /* value == null && err == null */ -> {
                    val message = "Completable future didn't return with value or exception"
                    cleanUp(Failure(IllegalStateException(message)))
                }
            }
        }, executor)
        return this
    }

    override fun isDone(): Boolean = wrapped.isDone

    override fun get(): T = wrapped.get()

    override fun get(timeout: Long, unit: TimeUnit): T = wrapped.get(timeout, unit)

    override fun toString(): String = wrapped.toString()

    override fun cancel(mayInterruptIfRunning: Boolean) = wrapped.cancel(mayInterruptIfRunning)

    override fun isCancelled(): Boolean = wrapped.isCancelled

    override fun <U : Any?> thenApply(fn: Function<in T, out U>?): CompletableFuture<U> = wrapped.thenApply(fn)

    override fun <U : Any?> thenApplyAsync(fn: Function<in T, out U>?): CompletableFuture<U> = wrapped.thenApplyAsync(fn)

    override fun <U : Any?> thenApplyAsync(fn: Function<in T, out U>?, executor: Executor?) = wrapped.thenApplyAsync(fn, executor)

    override fun thenAccept(action: Consumer<in T>?): CompletableFuture<Void> = wrapped.thenAccept(action)

    override fun thenAcceptAsync(action: Consumer<in T>?): CompletableFuture<Void> = wrapped.thenAcceptAsync(action)

    override fun thenAcceptAsync(action: Consumer<in T>?, executor: Executor?): CompletableFuture<Void> = wrapped.thenAcceptAsync(action, executor)

    override fun thenRun(action: java.lang.Runnable?) = wrapped.thenRun(action)

    override fun thenRunAsync(action: java.lang.Runnable?) = wrapped.thenRunAsync(action)

    override fun thenRunAsync(action: java.lang.Runnable?, executor: Executor?) = wrapped.thenRunAsync(action, executor)

    override fun <U : Any?, V : Any?> thenCombine(
        other: CompletionStage<out U>?,
        fn: BiFunction<in T, in U, out V>?
    ) = wrapped.thenCombine(other,fn)

    override fun <U : Any?, V : Any?> thenCombineAsync(
        other: CompletionStage<out U>?,
        fn: BiFunction<in T, in U, out V>?
    ) = wrapped.thenCombineAsync(other,fn)

    override fun <U : Any?, V : Any?> thenCombineAsync(
        other: CompletionStage<out U>?,
        fn: BiFunction<in T, in U, out V>?,
        executor: Executor?
    ) = wrapped.thenCombineAsync(other,fn,executor)

    override fun <U : Any?> thenAcceptBoth(
        other: CompletionStage<out U>?,
        action: BiConsumer<in T, in U>?
    ) = wrapped.thenAcceptBoth(other,action)

    override fun <U : Any?> thenAcceptBothAsync(
        other: CompletionStage<out U>?,
        action: BiConsumer<in T, in U>?
    ) = wrapped.thenAcceptBothAsync(other,action)

    override fun <U : Any?> thenAcceptBothAsync(
        other: CompletionStage<out U>?,
        action: BiConsumer<in T, in U>?,
        executor: Executor?
    ) = wrapped.thenAcceptBothAsync(other,action,executor)

    override fun runAfterBoth(
        other: CompletionStage<*>?,
        action: java.lang.Runnable?
    ) = wrapped.runAfterBoth(other,action)

    override fun runAfterBothAsync(
        other: CompletionStage<*>?,
        action: java.lang.Runnable?
    ) = wrapped.runAfterBothAsync(other,action)

    override fun runAfterBothAsync(
        other: CompletionStage<*>?,
        action: java.lang.Runnable?,
        executor: Executor?
    ) = wrapped.runAfterBothAsync(other,action,executor)

    override fun <U : Any?> applyToEither(
        other: CompletionStage<out T>?,
        fn: Function<in T, U>?
    ) = wrapped.applyToEither(other,fn)

    override fun <U : Any?> applyToEitherAsync(
        other: CompletionStage<out T>?,
        fn: Function<in T, U>?
    ) = wrapped.applyToEitherAsync(other,fn)

    override fun <U : Any?> applyToEitherAsync(other: CompletionStage<out T>?, fn: Function<in T, U>?, executor: Executor?): CompletableFuture<U> {
        return wrapped.applyToEitherAsync(other, fn, executor)
    }

    override fun acceptEither(other: CompletionStage<out T>?, action: Consumer<in T>?): CompletableFuture<Void> {
        return wrapped.acceptEither(other, action)
    }

    override fun acceptEitherAsync(other: CompletionStage<out T>?, action: Consumer<in T>?): CompletableFuture<Void> {
        return wrapped.acceptEitherAsync(other, action)
    }

    override fun acceptEitherAsync(other: CompletionStage<out T>?, action: Consumer<in T>?, executor: Executor?): CompletableFuture<Void> {
        return wrapped.acceptEitherAsync(other, action, executor)
    }

    override fun runAfterEither(other: CompletionStage<*>?, action: java.lang.Runnable?): CompletableFuture<Void> {
        return wrapped.runAfterEither(other, action)
    }

    override fun runAfterEitherAsync(other: CompletionStage<*>?, action: java.lang.Runnable?): CompletableFuture<Void> {
        return wrapped.runAfterEitherAsync(other, action)
    }

    override fun runAfterEitherAsync(other: CompletionStage<*>?, action: java.lang.Runnable?, executor: Executor?): CompletableFuture<Void> {
        return wrapped.runAfterEitherAsync(other, action, executor)
    }

    override fun <U : Any?> thenCompose(fn: Function<in T, out CompletionStage<U>>?): CompletableFuture<U> {
        return wrapped.thenCompose(fn)
    }

    override fun <U : Any?> thenComposeAsync(fn: Function<in T, out CompletionStage<U>>?): CompletableFuture<U> {
        return wrapped.thenComposeAsync(fn)
    }

    override fun <U : Any?> thenComposeAsync(fn: Function<in T, out CompletionStage<U>>?, executor: Executor?): CompletableFuture<U> {
        return wrapped.thenComposeAsync(fn, executor)
    }

    override fun <U : Any?> handle(fn: BiFunction<in T, Throwable, out U>?): CompletableFuture<U> {
        return wrapped.handle(fn)
    }

    override fun <U : Any?> handleAsync(fn: BiFunction<in T, Throwable, out U>?): CompletableFuture<U> {
        return wrapped.handleAsync(fn)
    }

    override fun <U : Any?> handleAsync(fn: BiFunction<in T, Throwable, out U>?, executor: Executor?): CompletableFuture<U> {
        return wrapped.handleAsync(fn, executor)
    }

    override fun whenComplete(action: BiConsumer<in T, in Throwable>?): CompletableFuture<T> {
        return wrapped.whenComplete(action)
    }

    override fun whenCompleteAsync(action: BiConsumer<in T, in Throwable>?): CompletableFuture<T> {
        return wrapped.whenCompleteAsync(action)
    }

    override fun whenCompleteAsync(action: BiConsumer<in T, in Throwable>?, executor: Executor?): CompletableFuture<T> {
        return wrapped.whenCompleteAsync(action, executor)
    }

    override fun exceptionally(fn: Function<Throwable, out T>?): CompletableFuture<T> {
        return wrapped.exceptionally(fn)
    }

    override fun exceptionallyAsync(fn: Function<Throwable, out T>?): CompletableFuture<T> {
        return wrapped.exceptionallyAsync(fn)
    }

    override fun exceptionallyAsync(fn: Function<Throwable, out T>?, executor: Executor?): CompletableFuture<T> {
        return wrapped.exceptionallyAsync(fn, executor)
    }

    override fun exceptionallyCompose(fn: Function<Throwable, out CompletionStage<T>>?): CompletableFuture<T> {
        return wrapped.exceptionallyCompose(fn)
    }

    override fun exceptionallyComposeAsync(fn: Function<Throwable, out CompletionStage<T>>?): CompletableFuture<T> {
        return wrapped.exceptionallyComposeAsync(fn)
    }

    override fun exceptionallyComposeAsync(fn: Function<Throwable, out CompletionStage<T>>?, executor: Executor?): CompletableFuture<T> {
        return wrapped.exceptionallyComposeAsync(fn, executor)
    }

    override fun toCompletableFuture(): CompletableFuture<T> {
        return wrapped.toCompletableFuture()
    }

    override fun join(): T {
        return wrapped.join()
    }

    override fun getNow(valueIfAbsent: T): T {
        return wrapped.getNow(valueIfAbsent)
    }

    override fun complete(value: T): Boolean {
        return wrapped.complete(value)
    }

    override fun completeExceptionally(ex: Throwable?): Boolean {
        return wrapped.completeExceptionally(ex)
    }

    override fun isCompletedExceptionally(): Boolean {
        return wrapped.isCompletedExceptionally()
    }

    override fun obtrudeValue(value: T) {
        wrapped.obtrudeValue(value)
    }

    override fun obtrudeException(ex: Throwable?) {
        wrapped.obtrudeException(ex)
    }

    override fun getNumberOfDependents(): Int {
        return wrapped.getNumberOfDependents()
    }

    override fun <U : Any?> newIncompleteFuture(): CompletableFuture<U> {
        return wrapped.newIncompleteFuture()
    }

    override fun defaultExecutor(): Executor {
        return wrapped.defaultExecutor()
    }

    override fun copy(): CompletableFuture<T> {
        return wrapped.copy()
    }

    override fun minimalCompletionStage(): CompletionStage<T> {
        return wrapped.minimalCompletionStage()
    }

    override fun completeAsync(supplier: Supplier<out T>?, executor: Executor?): CompletableFuture<T> {
        return wrapped.completeAsync(supplier, executor)
    }

    override fun completeAsync(supplier: Supplier<out T>?): CompletableFuture<T> {
        return wrapped.completeAsync(supplier)
    }

    override fun orTimeout(timeout: Long, unit: TimeUnit?): CompletableFuture<T> {
        return wrapped.orTimeout(timeout, unit)
    }

    override fun completeOnTimeout(value: T, timeout: Long, unit: TimeUnit?): CompletableFuture<T> {
        return wrapped.completeOnTimeout(value, timeout, unit)
    }

    companion object {
        fun <T> successful(
            executor: Executor = Executors.current(),
            value: T
        ): PendingLater<T> = PendingLater(executor, completedFuture(value))

        fun <T> failed(
            executor: Executor = Executors.current(),
            err: Throwable,
        ): PendingLater<T> = PendingLater(executor, failedFuture(err))
    }
}

actual inline fun <T> PendingLater<T>.resolveWith(value: T) = wrapped.complete(value)

actual inline fun <T> PendingLater<T>.rejectWith(error: Throwable) = wrapped.completeExceptionally(error)