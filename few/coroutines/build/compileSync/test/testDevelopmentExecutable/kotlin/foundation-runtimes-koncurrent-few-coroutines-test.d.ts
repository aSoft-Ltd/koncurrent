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
export namespace koncurrent {
    interface Few<T> {
        _ignore_collect(collector: koncurrent.FewCollector<T>): void;
        collect(collector: (p0: T) => void): void;
        executeOn(executor: koncurrent.Executor): koncurrent.Few<T>;
        onEach(block: (p0: T) => void): koncurrent.Few<T>;
        _ignore_onEach(consumer: functions.Consumer<T>): koncurrent.Few<T>;
        map<R>(transformer: (p0: T) => R): koncurrent.Few<R>;
        _ignore_map<R>(transformer: functions.Function<T, R>): koncurrent.Few<R>;
        _ignore_catch(catcher: (p0: koncurrent.FewCollector<T>, p1: Error) => void): koncurrent.Few<T>;
        error(catcher: (p0: koncurrent.FewCollector<T>, p1: Error) => void): koncurrent.Few<T>;
        _ignore_error(catcher: any/* functions.BiConsumer<koncurrent.FewCollector<T>, Error> */): koncurrent.Few<T>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace koncurrent {
    interface FewCollector<T> {
        emit(value: T): void;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export function fewOf<T>(value?: T, executor?: koncurrent.Executor): koncurrent.Few<T>;
export function few<T>(block?: (p0: koncurrent.FewCollector<T>) => void, executor?: koncurrent.Executor): koncurrent.Few<T>;
/* ErrorDeclaration: Name is a reserved word */
export namespace koncurrent {
    class MockExecutor implements koncurrent.Executor {
        constructor(config: any/* koncurrent.MockExecutorConfig */);
        static create(name: string, logOnExecute: boolean): koncurrent.MockExecutor;
        execute(runnable: functions.Runnable): void;
        toString(): string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export as namespace foundation_runtimes_koncurrent_few_coroutines_test;