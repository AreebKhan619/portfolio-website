import type { WorkExperience, YearMonth } from "@/types/profile";

export interface CareerStats {
  /** Whole years since the earliest non-freelance start date. */
  years: number;
  /** Distinct employers, excluding freelance / self-employed entries. */
  companies: number;
  /** The first role without an end date, if any. */
  current: { role: string; company: string; companyUrl?: string } | null;
}

/** Months since year 0 for a "YYYY-MM" value. */
function toMonths(value: YearMonth): number {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + (month || 1) - 1;
}

/** Derives the glance numbers from the work history; nothing is hardcoded. */
export function computeCareerStats(jobs: WorkExperience[], now: Date): CareerStats {
  const nowMonths = now.getUTCFullYear() * 12 + now.getUTCMonth();
  const employed = jobs.filter((job) => job.employmentType !== "Freelance");
  const earliest = employed.reduce(
    (min, job) => Math.min(min, toMonths(job.startDate)),
    Number.POSITIVE_INFINITY,
  );
  const years = Number.isFinite(earliest) ? Math.floor((nowMonths - earliest) / 12) : 0;

  const companies = new Set(employed.map((job) => job.company.trim().toLowerCase())).size;

  const currentJob = jobs.find((job) => job.endDate === null);
  const current = currentJob
    ? { role: currentJob.role, company: currentJob.company, companyUrl: currentJob.companyUrl }
    : null;

  return { years, companies, current };
}
