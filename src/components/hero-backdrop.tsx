/**
 * Decorative layer behind the header + hero: a soft, static aura of colour
 * that fades into the page. Nothing moves, so it never competes with the copy.
 *
 * It is absolutely positioned against the initial containing block (no
 * positioned ancestor), so it spans the viewport width without `100vw`
 * and never causes horizontal scroll.
 */
export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="hero-aura pointer-events-none absolute inset-x-0 top-0 -z-10 h-[max(46rem,100svh)] overflow-hidden select-none"
    />
  );
}
