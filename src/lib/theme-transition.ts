import { flushSync } from "react-dom";

export type ThemeName = "light" | "dark";

interface Origin {
  x: number;
  y: number;
}

/**
 * Switches theme with a circular reveal expanding from `origin` (defaults to
 * the viewport centre) using the View Transitions API.
 *
 * Falls back to an instant switch when the API is missing or the user prefers
 * reduced motion. The `.dark` class is applied synchronously inside the
 * transition callback (next-themes would otherwise apply it in an effect,
 * after the "new" snapshot is taken).
 */
export function switchTheme(
  next: ThemeName,
  setTheme: (theme: ThemeName) => void,
  origin?: Origin,
): void {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typeof document.startViewTransition !== "function" || reduceMotion) {
    setTheme(next);
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const transition = document.startViewTransition(() => {
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    root.style.colorScheme = next;
    flushSync(() => setTheme(next));
  });

  transition.ready
    .then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    })
    .catch(() => {
      // Transition skipped (e.g. tab hidden); the theme is already applied.
    });
}

/** Centre of an element's box, for use as the reveal origin. */
export function centerOf(element: Element): Origin {
  const rect = element.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}
