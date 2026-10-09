"use client";

import { useEffect, useRef } from "react";

/** Fine pointer + motion allowed; everything else keeps the backdrop static. */
const ENABLED_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

/**
 * Soft radial glow (and brighter grid lines) that follow the mouse across the
 * hero backdrop. Pointer moves only write two CSS custom properties inside a
 * rAF, so React never re-renders after mount.
 */
export function PointerGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const query = window.matchMedia(ENABLED_QUERY);
    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const inside = y >= rect.top && y <= rect.bottom;
      el.style.setProperty("--glow-x", `${x - rect.left}px`);
      el.style.setProperty("--glow-y", `${y - rect.top}px`);
      el.toggleAttribute("data-active", inside);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onOut = (event: PointerEvent) => {
      if (!event.relatedTarget) el.removeAttribute("data-active");
    };

    const attach = () => {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerout", onOut);
    };

    const detach = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(frame);
      frame = 0;
      el.removeAttribute("data-active");
    };

    const sync = () => (query.matches ? attach() : detach());
    sync();
    query.addEventListener("change", sync);

    return () => {
      query.removeEventListener("change", sync);
      detach();
    };
  }, []);

  return (
    <div ref={ref} className="pointer-glow absolute inset-0">
      <div className="pointer-glow-grid absolute inset-0" />
      <div className="pointer-glow-wash absolute inset-0" />
    </div>
  );
}
