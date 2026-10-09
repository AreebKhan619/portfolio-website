interface BadgeListProps {
  items: string[];
  label: string;
  size?: "sm" | "md";
}

/** Plain-text badges (real DOM text, indexable by crawlers). */
export function BadgeList({ items, label, size = "sm" }: BadgeListProps) {
  if (items.length === 0) return null;
  const sizing = size === "md" ? "px-3 py-1 text-sm" : "px-2 py-0.5 text-xs";

  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-md border border-line bg-surface font-mono text-muted ${sizing}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
