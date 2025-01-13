import { useEffect, useMemo, useRef } from 'react';
import throttle from 'lodash.throttle';
import { useUnmount } from './useUnmount';

type ThrottleOptions = {
    leading?: boolean;
    trailing?: boolean;
};

type ControlFunctions = {
    cancel: () => void;
    flush: () => void;
    isPending: () => boolean;
};

export type ThrottledState<T extends (...args: any) => ReturnType<T>> = ((
    ...args: Parameters<T>
) => ReturnType<T> | undefined) &
    ControlFunctions;

export function useThrottleCallback<T extends (...args: any) => ReturnType<T>>(
    func: T,
    delay = 500,
    options?: ThrottleOptions
): ThrottledState<T> {
    const throttledFunc = useRef<ReturnType<typeof throttle>>();

    useUnmount(() => {
        if (throttledFunc.current) {
            throttledFunc.current.cancel();
        }
    });

    const throttled = useMemo(() => {
        const throttledFuncInstance = throttle(func, delay, options);

        const wrappedFunc: ThrottledState<T> = (...args: Parameters<T>) => {
            return throttledFuncInstance(...args);
        };

        wrappedFunc.cancel = () => {
            throttledFuncInstance.cancel();
        };

        wrappedFunc.isPending = () => {
            return !!throttledFunc.current;
        };

        wrappedFunc.flush = () => {
            return throttledFuncInstance.flush();
        };

        return wrappedFunc;
    }, [func, delay, options]);

    // Update the throttled function ref whenever func, wait, or options change
    useEffect(() => {
        throttledFunc.current = throttle(func, delay, options);
    }, [func, delay, options]);

    return throttled;
}