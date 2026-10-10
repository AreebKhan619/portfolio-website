import { formatYearMonth } from "@/lib/format";
import type { YearMonth } from "@/types/profile";

export function DateRange({ start, end }: { start: YearMonth; end: YearMonth | null }) {
  return (
    <p className="shrink-0 text-sm font-medium text-subtle tabular-nums">
      <time dateTime={start}>{formatYearMonth(start)}</time>
      {" – "}
      {end ? <time dateTime={end}>{formatYearMonth(end)}</time> : "Present"}
    </p>
  );
}
