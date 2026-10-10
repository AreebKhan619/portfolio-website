import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/** Initials in bold Inter, the site's stand-in for SF Pro. */
const INITIALS = "AK";

/** Apple blue from globals.css: lighter at the top, like light catching an app icon. */
const TOP = "#2997ff";
const BOTTOM = "#0060df";

/** next/og needs a TTF/OTF; the site's next/font copy is woff2, so the TTF is vendored (OFL). */
function loadFont() {
  return readFile(join(process.cwd(), "src/assets/fonts/Inter-Bold.ttf"));
}

/**
 * Square "AK" monogram for the tab icon, app icons and Apple touch icon.
 * app/favicon.ico is the 32px render wrapped in an ICO container (Next can't
 * generate .ico); re-wrap /icon/32 if the design changes.
 * `rounded` gives the tab icon its own corners; the Apple icon stays square
 * because iOS applies its own mask.
 */
export async function monogram(size: number, { rounded }: { rounded: boolean }) {
  // Tab-sized renders get bigger glyphs so the letters survive at 16-32px.
  const small = size <= 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(180deg, ${TOP}, ${BOTTOM})`,
          borderRadius: rounded ? size * 0.225 : 0,
          color: "#ffffff",
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: size * (small ? 0.56 : 0.46),
          letterSpacing: -size * (small ? 0.03 : 0.025),
          // Optical centring: cap height sits a touch high in the em box.
          paddingTop: size * 0.02,
        }}
      >
        {INITIALS}
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Inter", data: await loadFont(), style: "normal", weight: 700 }],
    },
  );
}
