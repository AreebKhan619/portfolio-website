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
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      // Rendered by app/icon.tsx (ids from its generateImageMetadata).
      { src: "/icon/192", sizes: "192x192", type: "image/png" },
      { src: "/icon/512", sizes: "512x512", type: "image/png" },
    ],
  };
}
