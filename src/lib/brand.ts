import type { CSSProperties } from "react";

import type { WorkExperience } from "@/types/profile";

type BrandSource = Pick<WorkExperience, "brandColor" | "lineColor">;

/**
 * Props that give an element its company colour as `--brand-line`
 * (see `[data-brand]` in globals.css). An exact `lineColor` is set inline,
 * which outranks the colour derived from the `brandColor` pastel.
 */
export function brandProps({ brandColor, lineColor }: BrandSource) {
  if (!brandColor && !lineColor) return {};
  return {
    "data-brand": "",
    style: {
      ...(brandColor ? { "--brand": brandColor } : {}),
      ...(lineColor ? { "--brand-line": lineColor } : {}),
    } as CSSProperties,
  };
}
