type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace functions {
    interface Function<T, R> {
        invoke(obj: T): R;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace functions {
    interface Supplier<T> {
        get(): T;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace functions {
    interface Consumer<T> {
        accept(obj: T): void;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace functions {
    interface Runnable {
        run(): void;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace koncurrent {
    class ConcurrentState<T> {
        protected constructor();
    }
    const PendingState: {
        toString(): string;
    } & koncurrent.ConcurrentState<never>;
    class Settled<T> extends koncurrent.ConcurrentState<T> {
        protected constructor();
    }
    class Fulfilled<T> extends koncurrent.Settled<T> {
        constructor(value: T);
        get value(): T;
        toString(): string;
        component1(): T;
        copy(value?: T): koncurrent.Fulfilled<T>;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Rejected extends koncurrent.Settled<never> {
        constructor(cause: Error);
        get cause(): Error;
        toString(): string;
        component1(): Error;
        copy(cause?: Error): koncurrent.Rejected;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace koncurrent {
    const SynchronousExecutor: {
        execute(runnable: functions.Runnable): void;
        toString(): string;
    } & koncurrent.Executor;
}
export namespace koncurrent {
    const Executors: {
        /* ErrorDeclaration: Name is a reserved word */
    };
}
export namespace koncurrent {
    const SetTimeoutExecutor: {
        execute(runnable: functions.Runnable): void;
    } & koncurrent.Executor;
}
export namespace koncurrent {
    interface Executor {
        execute(runnable: functions.Runnable): void;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace kotlinx.collections.interoperable {
    interface List<E> extends kotlinx.collections.interoperable.Collection<E>/*, kotlin.collections.List<E> */ {
        static get Companion(): {
            serializer<E>(elementSerializer: any/* kotlinx.serialization.KSerializer<E> */): any/* kotlinx.collections.interoperable.serializers.ListSerializer<E> */;
        };
        toArray(): Array<E>;
        forEach(lambda: (p0: E) => void): void;
        forEachWithIndex(lambda: (p0: E, p1: number) => void): void;
        map<O>(transform: (p0: E) => O): kotlinx.collections.interoperable.List<O>;
        mapWithIndex<O>(transform: (p0: E, p1: number) => O): kotlinx.collections.interoperable.List<O>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace kotlinx.collections.interoperable {
    interface MutableCollection<E> extends kotlinx.collections.interoperable.Collection<E>/*, kotlin.collections.MutableCollection<E> */ {
        addAll(elements: kotlinx.collections.interoperable.Collection<E>): boolean;
        removeAll(elements: kotlinx.collections.interoperable.Collection<E>): boolean;
        retainAll(elements: kotlinx.collections.interoperable.Collection<E>): boolean;
        toArray(): Array<E>;
        forEach(lambda: (p0: E) => void): void;
        forEachWithIndex(lambda: (p0: E, p1: number) => void): void;
        map<O>(transform: (p0: E) => O): kotlinx.collections.interoperable.List<O>;
        mapWithIndex<O>(transform: (p0: E, p1: number) => O): kotlinx.collections.interoperable.List<O>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace kotlinx.collections.interoperable {
    interface MutableList<E> extends kotlinx.collections.interoperable.List<E>, kotlinx.collections.interoperable.MutableCollection<E>/*, kotlin.collections.MutableList<E> */ {
        addAllAtIndex(index: number, elements: kotlinx.collections.interoperable.Collection<E>): boolean;
        containsAll(elements: kotlinx.collections.interoperable.Collection<E>): boolean;
        toArray(): Array<E>;
        forEach(lambda: (p0: E) => void): void;
        forEachWithIndex(lambda: (p0: E, p1: number) => void): void;
        map<O>(transform: (p0: E) => O): kotlinx.collections.interoperable.List<O>;
        mapWithIndex<O>(transform: (p0: E, p1: number) => O): kotlinx.collections.interoperable.List<O>;
        addAll(elements: kotlinx.collections.interoperable.Collection<E>): boolean;
        removeAll(elements: kotlinx.collections.interoperable.Collection<E>): boolean;
        retainAll(elements: kotlinx.collections.interoperable.Collection<E>): boolean;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace kotlinx.collections.interoperable {
    interface MutableSet<E> extends kotlinx.collections.interoperable.Set<E>/*, kotlin.collections.MutableSet<E> */ {
        toArray(): Array<E>;
        forEach(lambda: (p0: E) => void): void;
        forEachWithIndex(lambda: (p0: E, p1: number) => void): void;
        map<O>(transform: (p0: E) => O): kotlinx.collections.interoperable.List<O>;
        mapWithIndex<O>(transform: (p0: E, p1: number) => O): kotlinx.collections.interoperable.List<O>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace kotlinx.collections.interoperable {
    interface Set<E> extends kotlinx.collections.interoperable.Collection<E>/*, kotlin.collections.Set<E> */ {
        toArray(): Array<E>;
        forEach(lambda: (p0: E) => void): void;
        forEachWithIndex(lambda: (p0: E, p1: number) => void): void;
        map<O>(transform: (p0: E) => O): kotlinx.collections.interoperable.List<O>;
        mapWithIndex<O>(transform: (p0: E, p1: number) => O): kotlinx.collections.interoperable.List<O>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace kotlinx.collections.interoperable {
    interface Collection<E> extends kotlinx.collections.interoperable.Iterable<E>/*, kotlin.collections.Collection<E> */ {
        toArray(): Array<E>;
        forEach(lambda: (p0: E) => void): void;
        forEachWithIndex(lambda: (p0: E, p1: number) => void): void;
        map<O>(transform: (p0: E) => O): kotlinx.collections.interoperable.List<O>;
        mapWithIndex<O>(transform: (p0: E, p1: number) => O): kotlinx.collections.interoperable.List<O>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace kotlinx.collections.interoperable {
    interface Iterable<E> /* extends kotlin.collections.Iterable<E> */ {
        forEach(lambda: (p0: E) => void): void;
        forEachWithIndex(lambda: (p0: E, p1: number) => void): void;
        map<O>(transform: (p0: E) => O): kotlinx.collections.interoperable.List<O>;
        mapWithIndex<O>(transform: (p0: E, p1: number) => O): kotlinx.collections.interoperable.List<O>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace koncurrent {
    class Later<T> {
        constructor(handler: Nullable<(p0: (p0: T) => void, p1: (p0: Error) => void) => void>, executor: koncurrent.Executor);
        get executor(): koncurrent.Executor;
        static _ignore_fromHandler<T>(handler: any/* koncurrent.later.internal.LaterHandler<T> */, executor: koncurrent.Executor): koncurrent.Later<T>;
        get _ignore_state(): koncurrent.ConcurrentState<T>;
        set _ignore_state(value: koncurrent.ConcurrentState<T>);
        static get Companion(): {
            resolve<T>(value?: T, executor?: koncurrent.Executor): koncurrent.Later<T>;
            reject(error?: Error, executor?: koncurrent.Executor): koncurrent.Later<never>;
            allFulfilled<T>(laters: Array<koncurrent.Later<T>>): koncurrent.Later<kotlinx.collections.interoperable.List<koncurrent.Fulfilled<T>>>;
            allFulfilledValues<T>(laters: Array<koncurrent.Later<T>>): koncurrent.Later<kotlinx.collections.interoperable.List<T>>;
            all<T>(laters: Array<koncurrent.Later<T>>): koncurrent.Later<kotlinx.collections.interoperable.List<koncurrent.Settled<T>>>;
        };
        _ignore_thenWithExecutor<R>(onResolved?: Nullable<(p0: T) => R>, onRejected?: Nullable<(p0: Error) => R>, executor?: koncurrent.Executor): koncurrent.Later<R>;
        then<S>(onResolved?: (p0: T) => S, executor?: koncurrent.Executor): koncurrent.Later<S>;
        _ignore_then<S>(onResolved?: functions.Function<T, S>, executor?: koncurrent.Executor): koncurrent.Later<S>;
        flatten<S>(onResolved?: (p0: T) => koncurrent.Later<S>, executor?: koncurrent.Executor): koncurrent.Later<S>;
        _ignore_flatten<R>(onResolved?: functions.Function<T, koncurrent.Later<R>>, executor?: koncurrent.Executor): koncurrent.Later<R>;
        error(handler?: (p0: Error) => T, executor?: koncurrent.Executor): koncurrent.Later<T>;
        _ignore_error<T>(handler?: functions.Function<Error, T>, executor?: koncurrent.Executor): koncurrent.Later<T>;
        _ignore_complete(handler?: functions.Consumer<koncurrent.Settled<T>>, executor?: koncurrent.Executor): koncurrent.Later<T>;
        complete(cleanUp?: (p0: koncurrent.Settled<T>) => Nullable<any>, executor?: koncurrent.Executor): koncurrent.Later<T>;
        toPromise(): Promise<T>;
        _ignore_toPromise(executor: koncurrent.Executor): Promise<T>;
        resolveWith(value: T): boolean;
        rejectWith(error: Error): boolean;
        toString(): string;
    }
}
export namespace koncurrent {
    class LaterOld<T> {
        constructor(handler: Nullable<(p0: (p0: T) => void, p1: (p0: Error) => void) => void>, executor: koncurrent.Executor);
        get executor(): koncurrent.Executor;
    }
}
export namespace koncurrent {
    class MockExecutor implements koncurrent.Executor {
        constructor(config: any/* koncurrent.MockExecutorConfig */);
        static create(name: string, logOnExecute: boolean): koncurrent.MockExecutor;
        execute(runnable: functions.Runnable): void;
        toString(): string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export as namespace foundation_runtimes_koncurrent_later_test_test;