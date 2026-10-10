"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import type { NavItem } from "@/types/profile";

const subscribe = () => () => {};

/** Critically damped: the sheet settles without overshoot. */
const SPRING = { type: "spring", visualDuration: 0.32, bounce: 0 } as const;

/**
 * Below md: a menu button that opens a full-height translucent sheet of section
 * links, the way apple.com does on iPhone. The sheet grows down out of the
 * header and leaves the same way; the two bars of the button morph into a ✕.
 * Rendered in a portal because the header's backdrop-filter would otherwise
 * become the containing block for the fixed sheet.
 */
export function MobileNav({ sections }: { sections: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  // The portal needs document.body, so it only renders after hydration.
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sheetId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    // Close if the viewport grows past md, where the inline nav takes over.
    const wide = window.matchMedia("(min-width: 48rem)");
    const onWide = () => wide.matches && setOpen(false);
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    wide.addEventListener("change", onWide);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  const bar = reduceMotion ? { duration: 0 } : SPRING;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={sheetId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="pressable relative inline-flex size-9 items-center justify-center rounded-full text-fg/75 hover:bg-fg/6 hover:text-fg md:hidden"
      >
        <motion.span
          aria-hidden="true"
          className="absolute h-[1.5px] w-4 rounded-full bg-current"
          initial={false}
          animate={open ? { y: 0, rotate: 45 } : { y: -3.5, rotate: 0 }}
          transition={bar}
        />
        <motion.span
          aria-hidden="true"
          className="absolute h-[1.5px] w-4 rounded-full bg-current"
          initial={false}
          animate={open ? { y: 0, rotate: -45 } : { y: 3.5, rotate: 0 }}
          transition={bar}
        />
      </button>
      {!mounted
        ? null
        : createPortal(
            <AnimatePresence>
              {open ? (
                <motion.nav
                  key="sheet"
                  id={sheetId}
                  aria-label="Sections"
                  className="nav-sheet fixed inset-0 z-30 overflow-y-auto px-5 pt-16 pb-10 md:hidden"
                  style={{ transformOrigin: "50% 0%" }}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scaleY: 0.96, y: -12 }}
                  animate={{ opacity: 1, scaleY: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scaleY: 0.96, y: -12 }}
                  transition={reduceMotion ? { duration: 0.15 } : SPRING}
                >
                  <ul className="mx-auto max-w-5xl">
                    {sections.map((item, i) => (
                      <motion.li
                        key={item.id}
                        initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={reduceMotion ? { duration: 0 } : { ...SPRING, delay: 0.03 * i }}
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={() => setOpen(false)}
                          className="block py-2.5 text-[1.75rem] leading-tight font-semibold tracking-[-0.022em] text-fg active:opacity-60"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>
              ) : null}
            </AnimatePresence>,
            document.body,
          )}
    </>
  );
}
