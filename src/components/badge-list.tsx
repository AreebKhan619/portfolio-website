interface BadgeListProps {
  items: string[];
  label: string;
  size?: "sm" | "md";
}

/** Plain-text chips (real DOM text, indexable by crawlers). */
export function BadgeList({ items, label, size = "sm" }: BadgeListProps) {
  if (items.length === 0) return null;
  const sizing = size === "md" ? "px-3.5 py-1.5 text-sm" : "px-2.5 py-1 text-xs";

  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full bg-chip leading-none font-medium text-fg/80 ${sizing}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
