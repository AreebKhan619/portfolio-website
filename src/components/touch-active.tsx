"use client";

import { useEffect } from "react";

const noop = () => {};

/**
 * iOS Safari only applies `:active` while some touchstart listener exists, so
 * without this the press feedback (`.pressable`, `active:` classes) never shows
 * on iPhone — and the default tap flash is turned off in globals.css. A passive,
 * empty listener costs nothing and never delays scrolling. Renders nothing.
 */
export function TouchActive() {
  useEffect(() => {
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  return null;
}
