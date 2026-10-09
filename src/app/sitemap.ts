import type { MetadataRoute } from "next";

import { getProfile } from "@/lib/content";
import { RESUME_PATH } from "@/lib/resume/path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { site } = await getProfile();

  return [
    {
      url: site.url,
      lastModified: site.lastUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}${RESUME_PATH}`,
      lastModified: site.lastUpdated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
