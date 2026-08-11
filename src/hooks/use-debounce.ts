"use client";

import { useEffect, useState } from "react";

/**
 * Debounce hook — delays updating a value until `delay` ms of inactivity.
 * Useful for search inputs and resize handlers.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
