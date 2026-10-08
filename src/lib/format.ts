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

/** Strips rich-text markers for plain-text contexts (meta tags, JSON-LD). */
export function toPlainText(value: string): string {
  return value.replace(/\*\*(.+?)\*\*/g, "$1");
}
