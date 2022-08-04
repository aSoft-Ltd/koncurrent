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
    class MockExecutor implements koncurrent.Executor {
        constructor(config: any/* koncurrent.MockExecutorConfig */);
        static create(name: string, logOnExecute: boolean): koncurrent.MockExecutor;
        execute(runnable: functions.Runnable): void;
        toString(): string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export as namespace foundation_runtimes_koncurrent_pending_coroutines_test;