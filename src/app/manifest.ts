import type { MetadataRoute } from "next";

import { getProfile } from "@/lib/content";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { site, personalInfo } = await getProfile();

  return {
    name: `${personalInfo.name} — ${personalInfo.jobTitle}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbfbfa",
    theme_color: "#fbfbfa",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
