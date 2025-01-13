import { useRef, useState } from 'react';
import { ThrottledState, useThrottleCallback } from './useThrottleCallback';

type UseThrottleValueOptions<T> = {
    leading?: boolean;
    trailing?: boolean;
    equalityFn?: (left: T, right: T) => boolean;
};

export function useThrottleValue<T>(
    initialValue: T | (() => T),
    delay: number,
    options?: UseThrottleValueOptions<T>
): [T, ThrottledState<(value: T) => void>] {
    const eq = options?.equalityFn ?? ((left: T, right: T) => left === right);
    const unwrappedInitialValue =
        initialValue instanceof Function ? initialValue() : initialValue;
    const [throttledValue, setThrottledValue] = useState<T>(unwrappedInitialValue);
    const previousValueRef = useRef<T | undefined>(unwrappedInitialValue);

    const updateThrottledValue = useThrottleCallback(
        setThrottledValue,
        delay,
        options
    );

    // Update the throttled value if the initial value changes
    if (!eq(previousValueRef.current as T, unwrappedInitialValue)) {
        updateThrottledValue(unwrappedInitialValue);
        previousValueRef.current = unwrappedInitialValue;
    }

    return [throttledValue, updateThrottledValue];
}