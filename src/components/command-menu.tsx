"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import type { PaletteData } from "@/lib/commands";

// Loaded on first open only; nothing from the palette ships in the initial JS.
const loadPalette = () => import("@/components/command-palette");
const CommandPalette = dynamic(loadPalette, { ssr: false, loading: () => null });

const subscribe = () => () => {};

/** "mac" | "other" after hydration, null on the server (no mismatch). */
function usePlatform() {
  return useSyncExternalStore(
    subscribe,
    () => (/Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent) ? "mac" : "other"),
    () => null,
  );
}

/**
 * Header trigger + global ⌘K / Ctrl+K shortcut for the command palette.
 * Remembers what had focus before opening and restores it on close.
 */
export function CommandMenu({ palette }: { palette: PaletteData }) {
  const [open, setOpen] = useState(false);
  const platform = usePlatform();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openPalette = useCallback(() => {
    returnFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpen(true);
  }, []);

  const closePalette = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (!restoreFocus) return;
    const target = returnFocusRef.current;
    requestAnimationFrame(() => {
      (target?.isConnected ? target : triggerRef.current)?.focus();
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) closePalette();
        else openPalette();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, openPalette, closePalette]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openPalette}
        onPointerEnter={() => void loadPalette()}
        onFocus={() => void loadPalette()}
        aria-label={palette.copy.triggerLabel}
        aria-haspopup="dialog"
        aria-keyshortcuts="Meta+K Control+K"
        className="inline-flex h-9 items-center gap-2 rounded-full border border-line px-2.5 text-muted transition-colors hover:border-fg/30 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-3"
      >
        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="7" cy="7" r="4.5" />
          <path d="m10.5 10.5 3 3" strokeLinecap="round" />
        </svg>
        <kbd
          aria-hidden="true"
          className="hidden min-w-[3.25rem] text-center font-mono text-[0.7rem] tracking-wide sm:inline"
        >
          {platform === null ? " " : platform === "mac" ? "⌘K" : "Ctrl K"}
        </kbd>
      </button>
      {open ? <CommandPalette data={palette} onClose={closePalette} /> : null}
    </>
  );
}
