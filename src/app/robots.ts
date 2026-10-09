import type { MetadataRoute } from "next";

import { getProfile } from "@/lib/content";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { site } = await getProfile();

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
