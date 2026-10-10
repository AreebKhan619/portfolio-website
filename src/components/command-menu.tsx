"use client";

import { AnimatePresence } from "motion/react";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import type { PaletteData, TerminalData } from "@/lib/commands";

// Loaded on first open only; neither overlay ships in the initial JS.
const loadPalette = () => import("@/components/command-palette");
const CommandPalette = dynamic(loadPalette, { ssr: false, loading: () => null });
const Terminal = dynamic(() => import("@/components/terminal"), { ssr: false, loading: () => null });

type Overlay = "palette" | "terminal" | null;

/** True when a keypress is meant for a text field, not a global shortcut. */
function isTyping(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

const subscribe = () => () => {};

/** "mac" | "other" after hydration, null on the server (no mismatch). */
function usePlatform() {
  return useSyncExternalStore(
    subscribe,
    () => (/Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent) ? "mac" : "other"),
    () => null,
  );
}

interface CommandMenuProps {
  palette: PaletteData;
  terminal: TerminalData;
}

/**
 * Header trigger plus the global shortcuts: ⌘K / Ctrl+K toggles the command
 * palette, ` (backtick, outside text fields) opens the terminal. Remembers
 * what had focus before an overlay opened and restores it on close.
 */
export function CommandMenu({ palette, terminal }: CommandMenuProps) {
  const [overlay, setOverlay] = useState<Overlay>(null);
  const platform = usePlatform();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<Overlay>(null);

  const open = useCallback((next: Exclude<Overlay, null>) => {
    // Switching palette -> terminal keeps the original focus target.
    if (overlayRef.current === null) {
      returnFocusRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
    }
    overlayRef.current = next;
    setOverlay(next);
  }, []);

  const close = useCallback((restoreFocus = true) => {
    overlayRef.current = null;
    setOverlay(null);
    if (!restoreFocus) return;
    const target = returnFocusRef.current;
    requestAnimationFrame(() => {
      (target?.isConnected ? target : triggerRef.current)?.focus();
    });
  }, []);

  const openPalette = useCallback(() => open("palette"), [open]);
  const openTerminal = useCallback(() => open("terminal"), [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (overlay === "palette") close();
        else openPalette();
        return;
      }
      if (
        event.key === "`" &&
        overlay === null &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !isTyping(event.target)
      ) {
        event.preventDefault();
        openTerminal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [overlay, openPalette, openTerminal, close]);

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
        title={platform === null ? undefined : `${palette.copy.triggerLabel} (${platform === "mac" ? "⌘K" : "Ctrl K"})`}
        className="pressable inline-flex size-9 items-center justify-center rounded-full text-fg/75 hover:bg-fg/6 hover:text-fg"
      >
        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="7" cy="7" r="4.75" />
          <path d="m10.5 10.5 3.25 3.25" strokeLinecap="round" />
        </svg>
      </button>
      {/* Overlays animate out along the path they came in on. */}
      <AnimatePresence>
        {overlay === "palette" ? (
          <CommandPalette key="palette" data={palette} onClose={close} onOpenTerminal={openTerminal} />
        ) : null}
        {overlay === "terminal" ? <Terminal key="terminal" data={terminal} onClose={close} /> : null}
      </AnimatePresence>
    </>
  );
}
