import type { YearMonth } from "@/types/profile";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** "2023-01" -> "Jan 2023". Pure string work, so it is safe to prerender. */
export function formatYearMonth(value: YearMonth): string {
  const [year, month] = value.split("-");
  const label = MONTHS[Number(month) - 1];
  return label ? `${label} ${year}` : year;
}

/** "Jan 2023 – Present"; a `null` end means the role is current. */
export function formatDateRange(start: YearMonth, end: YearMonth | null): string {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : "Present"}`;
}

/** "https://www.github.com/x/" -> "github.com/x"; long paths fall back to the host. */
export function formatDisplayUrl(url: string): string {
  const { hostname, pathname } = new URL(url);
  const host = hostname.replace(/^www\./, "");
  const path = pathname.replace(/\/$/, "");
  const full = `${host}${path}`;
  return full.length <= 50 ? full : host;
}

/** Strips rich-text markers for plain-text contexts (meta tags, JSON-LD). */
export function toPlainText(value: string): string {
  return value.replace(/\*\*(.+?)\*\*/g, "$1");
}
