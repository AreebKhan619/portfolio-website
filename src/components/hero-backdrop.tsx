import { PointerGlow } from "@/components/pointer-glow";

/**
 * Decorative layer behind the header + hero: a faded grid over a soft
 * gradient mesh, with a pointer-following glow on top.
 *
 * It is absolutely positioned against the initial containing block (no
 * positioned ancestor), so it spans the viewport width without `100vw`
 * and never causes horizontal scroll.
 */
export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="hero-backdrop pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] overflow-hidden select-none sm:h-[52rem]"
    >
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-grid absolute inset-0" />
      <PointerGlow />
    </div>
  );
}
