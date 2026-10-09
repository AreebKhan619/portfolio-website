import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/** Initials drawn in the site's display face (Instrument Serif italic). */
const INITIALS = "AK";

/** Light-theme accent from globals.css, deepened toward violet for the tile. */
const FROM = "#4f46e5";
const TO = "#7c3aed";

/** next/og needs a TTF/OTF; the site's next/font copy is woff2, so the TTF is vendored (OFL). */
function loadFont() {
  return readFile(join(process.cwd(), "src/assets/fonts/InstrumentSerif-Italic.ttf"));
}

/**
 * Square "AK" monogram for the tab icon, app icons and Apple touch icon.
 * app/favicon.ico is the 32px render wrapped in an ICO container (Next can't
 * generate .ico); re-wrap /icon/32 if the design changes.
 * `rounded` gives the tab icon its own corners; the Apple icon stays square
 * because iOS applies its own mask.
 */
export async function monogram(size: number, { rounded }: { rounded: boolean }) {
  // Instrument Serif has hairline strokes that vanish in a 32px tab, so small
  // sizes get bigger glyphs and a hairline shadow either side to thicken them.
  const small = size <= 64;
  const thicken = Math.max(size / 64, 0.4);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${FROM}, ${TO})`,
          borderRadius: rounded ? size * 0.22 : 0,
          color: "#ffffff",
          fontFamily: "Instrument Serif",
          fontStyle: "italic",
          fontSize: size * (small ? 0.74 : 0.62),
          letterSpacing: -size * (small ? 0.05 : 0.035),
          ...(small
            ? { textShadow: `${thicken}px 0 0 #ffffff, -${thicken}px 0 0 #ffffff` }
            : {}),
          // Optical centring: the serif's descender space sits the glyphs high.
          paddingTop: size * 0.06,
          paddingRight: size * 0.03,
        }}
      >
        {INITIALS}
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Instrument Serif", data: await loadFont(), style: "italic", weight: 400 }],
    },
  );
}
