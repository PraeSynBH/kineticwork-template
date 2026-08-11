"use client";

import { useCallback, useState } from "react";

/**
 * Toggle hook — simple boolean state toggler.
 * Useful for modals, drawers, menus, and any show/hide pattern.
 */
export function useToggle(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle, setIsOpen } as const;
}
