"use client";

import { useEffect } from "react";

const ENABLED_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
/** Maximum tilt in degrees at the card's edges. */
const MAX_TILT = 5;

function reset(card: HTMLElement) {
  card.removeAttribute("data-spotlight-active");
  card.style.removeProperty("--rx");
  card.style.removeProperty("--ry");
}

/**
 * One delegated pointer handler for every `[data-spotlight]` card on the page:
 * writes the pointer position (--mx/--my, for the glowing border) and a small
 * tilt (--rx/--ry) in a rAF. Renders nothing. Mouse only; disabled for touch
 * and reduced motion.
 */
export function CardSpotlight() {
  useEffect(() => {
    const query = window.matchMedia(ENABLED_QUERY);
    let active: HTMLElement | null = null;
    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      if (!active) return;
      const rect = active.getBoundingClientRect();
      const px = (x - rect.left) / rect.width;
      const py = (y - rect.top) / rect.height;
      active.style.setProperty("--mx", `${x - rect.left}px`);
      active.style.setProperty("--my", `${y - rect.top}px`);
      active.style.setProperty("--rx", `${((0.5 - py) * MAX_TILT).toFixed(2)}deg`);
      active.style.setProperty("--ry", `${((px - 0.5) * MAX_TILT).toFixed(2)}deg`);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = event.target instanceof Element ? event.target : null;
      const card = target?.closest<HTMLElement>("[data-spotlight]") ?? null;
      if (card !== active) {
        if (active) reset(active);
        active = card;
        active?.setAttribute("data-spotlight-active", "");
      }
      x = event.clientX;
      y = event.clientY;
      if (active && !frame) frame = requestAnimationFrame(paint);
    };

    const onOut = (event: PointerEvent) => {
      if (!event.relatedTarget && active) {
        reset(active);
        active = null;
      }
    };

    const attach = () => {
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onOut);
    };

    const detach = () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(frame);
      frame = 0;
      if (active) reset(active);
      active = null;
    };

    const sync = () => (query.matches ? attach() : detach());
    sync();
    query.addEventListener("change", sync);

    return () => {
      query.removeEventListener("change", sync);
      detach();
    };
  }, []);

  return null;
}
