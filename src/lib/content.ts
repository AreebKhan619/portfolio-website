import { cacheLife } from "next/cache";

import profileData from "@/data/profile.json";
import type { Profile } from "@/types/profile";

// Assigning (not casting) makes `tsc` verify the JSON against the schema.
const profile: Profile = profileData;

/**
 * Single entry point for all site content.
 *
 * Today it reads the local JSON file. To move to a headless CMS
 * (Sanity, Contentful, ...), replace the body with a fetch + mapping to
 * `Profile`; every page, metadata route and the JSON-LD stay untouched.
 */
export async function getProfile(): Promise<Profile> {
  "use cache";
  cacheLife("max");
  return profile;
}
