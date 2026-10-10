"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { centerOf, switchTheme } from "@/lib/theme-transition";

const subscribe = () => () => {};

/** true only after hydration, so the icon never mismatches the server HTML. */
function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      data-theme-toggle=""
      onClick={(event) =>
        switchTheme(isDark ? "light" : "dark", setTheme, centerOf(event.currentTarget))
      }
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      className="pressable inline-flex size-9 items-center justify-center rounded-full text-fg/75 hover:bg-fg/6 hover:text-fg"
    >
      {!mounted ? (
        <span className="size-4" aria-hidden="true" />
      ) : isDark ? (
        <svg viewBox="0 0 24 24" className="size-4.25" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-4.25" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
