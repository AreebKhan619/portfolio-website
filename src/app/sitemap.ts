import type { MetadataRoute } from "next";

import { getProfile } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { site, personalInfo } = await getProfile();

  return [
    {
      url: site.url,
      lastModified: site.lastUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}${personalInfo.resume.url}`,
      lastModified: site.lastUpdated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
