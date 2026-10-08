import { ExternalLink } from "@/components/external-link";
import { SectionHeading } from "@/components/section-heading";
import { getContributions, type ContributionDay } from "@/lib/github";
import type { GitHubActivity as GitHubActivityContent } from "@/types/profile";

interface GitHubActivityProps {
  content: GitHubActivityContent;
  /** BCP 47 locale for the number and month labels. */
  locale: string;
}

const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;
const TOP = 16; // room for month labels
const LEVELS = [0, 1, 2, 3, 4] as const;

/**
 * One path per intensity level instead of ~370 <rect>s keeps the HTML small.
 * Each cell is an 8px square stroked 1px with round joins -> a 10px square
 * with softened corners.
 */
function cellPath(days: ContributionDay[]): string {
  return days
    .map((day) => `M${day.week * STEP + 1} ${TOP + day.weekday * STEP + 1}h8v8h-8z`)
    .join("");
}

/** Month labels at the first column whose first day falls in a new month. */
function monthLabels(days: ContributionDay[], weeks: number, locale: string) {
  const format = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
  const firstOfWeek = new Map<number, string>();
  for (const day of days) {
    const current = firstOfWeek.get(day.week);
    if (!current || day.date < current) firstOfWeek.set(day.week, day.date);
  }

  const labels: { week: number; text: string }[] = [];
  let lastMonth = "";
  for (const [week, date] of [...firstOfWeek].sort((a, b) => a[0] - b[0])) {
    const month = date.slice(0, 7);
    if (month === lastMonth) continue;
    lastMonth = month;
    // Skip labels that would be clipped: a partial first month, or the
    // last two columns (no room for the text).
    if (week === 0 && Number(date.slice(8, 10)) > 7) continue;
    if (week > weeks - 3) continue;
    labels.push({ week, text: format.format(new Date(`${date}T00:00:00Z`)) });
  }
  return labels;
}

/**
 * Contribution calendar rendered on the server from a cached scrape. Renders
 * nothing when the data is unavailable, so GitHub hiccups never break the page.
 */
export async function GitHubActivity({ content, locale }: GitHubActivityProps) {
  const calendar = await getContributions(content.username);
  if (!calendar) return null;

  const width = calendar.weeks * STEP - GAP;
  const height = TOP + 7 * STEP - GAP;
  const total = content.total.replace(
    "{count}",
    new Intl.NumberFormat(locale).format(calendar.total),
  );

  return (
    <section id="github" aria-labelledby="github-title" className="py-20">
      <SectionHeading id="github-title" eyebrow={content.eyebrow} title={content.title} />
      <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p id="github-total" className="font-display text-2xl text-fg sm:text-3xl">
            {total}
          </p>
          <ExternalLink
            href={`https://github.com/${content.username}`}
            className="font-mono text-xs text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
          >
            {content.profileLink.replace("{username}", content.username)}
          </ExternalLink>
        </div>

        {/*
          RTL wrapper: on narrow screens the calendar keeps a readable minimum
          width and the scroller starts at the latest week; wider screens scale it.
        */}
        <div
          dir="rtl"
          tabIndex={0}
          role="region"
          aria-label={content.graphLabel}
          className="mt-5 overflow-x-auto pb-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <div dir="ltr" style={{ minWidth: width }}>
            <svg
              role="img"
              aria-labelledby="github-total"
              viewBox={`0 0 ${width} ${height}`}
              className="gh-calendar block h-auto w-full"
            >
              {monthLabels(calendar.days, calendar.weeks, locale).map((label) => (
                <text key={label.week} x={label.week * STEP} y={10} className="gh-month">
                  {label.text}
                </text>
              ))}
              {LEVELS.map((level) => {
                const days = calendar.days.filter((day) => day.level === level);
                return days.length > 0 ? (
                  <path key={level} d={cellPath(days)} className={`gh-l${level}`} />
                ) : null;
              })}
            </svg>
          </div>
        </div>

        <div aria-hidden="true" className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[0.65rem] text-muted">
          <span className="mr-1">{content.legendLess}</span>
          <svg viewBox={`0 0 ${LEVELS.length * STEP - GAP} ${CELL}`} width={LEVELS.length * STEP - GAP} height={CELL} className="gh-calendar">
            {LEVELS.map((level) => (
              <path key={level} d={`M${level * STEP + 1} 1h8v8h-8z`} className={`gh-l${level}`} />
            ))}
          </svg>
          <span className="ml-1">{content.legendMore}</span>
        </div>
      </div>
    </section>
  );
}
