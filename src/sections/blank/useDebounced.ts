import { useRef, useState, useEffect } from 'react';

export function useDebounced<T>(value: T, timeout: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const firstUpdate = useRef<boolean>(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (
      // When this isn't a scalar, we need to do some extra work to ensure it actually changed.
      typeof value === 'object' &&
      JSON.stringify(debouncedValue) === JSON.stringify(value)
    ) {
      return;
    }

    const handle = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(handle);
    // We don't want to include the debouncedValue in the deps because it will cause a feedback loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, timeout]);

  return debouncedValue;
}
