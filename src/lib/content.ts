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
    workExperience: visible(profile.workExperience),
    projects: visible(profile.projects),
  };
}

/**
 * The profile as the PDF resume sees it: every entry's `resumeOverrides`
 * merged over its website fields, then hidden entries dropped. Overrides go
 * first so `resumeOverrides.hidden` can show or hide an entry on the resume
 * alone.
 */
export async function getResumeProfile(): Promise<Profile> {
  "use cache";
  cacheLife("max");
  const forResume = <T extends Overridable>(items: T[]) =>
    visible(items.map(applyResumeOverrides));
  return {
    ...profile,
    personalInfo: applyResumeOverrides(profile.personalInfo),
    workExperience: forResume(profile.workExperience),
    projects: forResume(profile.projects),
    skills: forResume(profile.skills),
    education: forResume(profile.education),
    certifications: forResume(profile.certifications),
    publications: forResume(profile.publications),
  };
}

interface Overridable {
  hidden?: boolean;
  resumeOverrides?: { hidden?: boolean };
}

function visible<T extends { hidden?: boolean }>(items: T[]): T[] {
  return items.filter((item) => !item.hidden);
}

/** Resume fields win over website fields; anything not overridden falls through. */
function applyResumeOverrides<T extends Overridable>(item: T): T {
  return { ...item, ...item.resumeOverrides };
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
