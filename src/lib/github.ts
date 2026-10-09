import { cacheLife } from "next/cache";

export interface ContributionDay {
  /** ISO date, e.g. "2026-10-08". */
  date: string;
  /** GitHub's intensity bucket, 0 (none) to 4 (most). */
  level: 0 | 1 | 2 | 3 | 4;
  /** 0 = Sunday … 6 = Saturday (row in the calendar). */
  weekday: number;
  /** Column (week) index, oldest first. */
  week: number;
}

export interface ContributionCalendar {
  total: number;
  weeks: number;
  days: ContributionDay[];
}

const DAY_CELL = /<td\b[^>]*\bContributionCalendar-day\b[^>]*>/g;
const MIN_DAYS = 300;

function attr(tag: string, name: string): string | undefined {
  return new RegExp(`\\b${name}="([^"]*)"`).exec(tag)?.[1];
}

/**
 * Parses the HTML fragment served by github.com/users/<user>/contributions.
 * Returns null if the markup doesn't look like a full calendar, so a GitHub
 * markup change degrades to "no section" rather than a broken one.
 */
export function parseContributions(html: string): ContributionCalendar | null {
  const days: ContributionDay[] = [];

  for (const [tag] of html.matchAll(DAY_CELL)) {
    const date = attr(tag, "data-date");
    const level = Number(attr(tag, "data-level"));
    const position = /contribution-day-component-(\d+)-(\d+)/.exec(attr(tag, "id") ?? "");
    if (!date || !position || !Number.isInteger(level) || level < 0 || level > 4) continue;
    days.push({
      date,
      level: level as ContributionDay["level"],
      weekday: Number(position[1]),
      week: Number(position[2]),
    });
  }

  if (days.length < MIN_DAYS) return null;

  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const headline = /([\d,]+) contributions? in the last year/i.exec(text);
  let total = headline ? Number(headline[1].replace(/,/g, "")) : Number.NaN;

  if (!Number.isFinite(total)) {
    // Fall back to summing the per-day tooltips ("3 contributions on …").
    const counts = [...text.matchAll(/(\d+) contributions? on /g)];
    if (counts.length === 0) return null;
    total = counts.reduce((sum, match) => sum + Number(match[1]), 0);
  }

  const weeks = Math.max(...days.map((day) => day.week)) + 1;
  return { total, weeks, days };
}

/**
 * Public contribution calendar for `username`, scraped from GitHub's
 * unauthenticated contributions fragment (the same HTML the profile page
 * loads; no token needed). Cached for a day; failures are cached briefly and
 * resolve to null so the build never depends on GitHub being reachable.
 */
export async function getContributions(username: string): Promise<ContributionCalendar | null> {
  "use cache";

  try {
    const response = await fetch(
      `https://github.com/users/${encodeURIComponent(username)}/contributions`,
      {
        headers: { Accept: "text/html", "User-Agent": "areeb.co.in portfolio" },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!response.ok) {
      cacheLife("hours");
      return null;
    }
    const calendar = parseContributions(await response.text());
    if (calendar) cacheLife("days");
    else cacheLife("hours");
    return calendar;
  } catch {
    cacheLife("hours");
    return null;
  }
}
