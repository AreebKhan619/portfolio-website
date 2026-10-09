import { ImageResponse } from "next/og";

import { getProfile } from "@/lib/content";

export const ogSize = { width: 1200, height: 630 };

/** Shared renderer for the OpenGraph and Twitter cards. Text comes from the profile data. */
export async function renderSocialCard() {
  const { site, personalInfo } = await getProfile();
  const host = new URL(site.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0b0d",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#a5b4fc", letterSpacing: 2 }}>
          {personalInfo.headline}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
            {personalInfo.name}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#a1a1aa", marginTop: 8 }}>
            {personalInfo.jobTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.4,
              color: "#d4d4d8",
              marginTop: 36,
              maxWidth: 1000,
            }}
          >
            {personalInfo.valueProposition}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#71717a" }}>{host}</div>
      </div>
    ),
    ogSize,
  );
}
