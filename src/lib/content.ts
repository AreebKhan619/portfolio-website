import { cacheLife } from "next/cache";

import profileData from "@/data/profile.json";
import { computeCareerStats, type CareerStats } from "@/lib/stats";
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
  return {
    ...profile,
    workExperience: profile.workExperience.filter((job) => !job.hidden),
    projects: profile.projects.filter((project) => !project.hidden),
  };
}

/**
 * Career numbers for the "At a glance" tiles. Cached per day so the computed
 * years tick over without a redeploy.
 */
export async function getCareerStats(): Promise<CareerStats> {
  "use cache";
  cacheLife("days");
  const { workExperience } = await getProfile();
  return computeCareerStats(workExperience, new Date());
}
