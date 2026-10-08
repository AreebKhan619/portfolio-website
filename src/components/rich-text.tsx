import { Fragment } from "react";

import type { RichText as RichTextValue } from "@/types/profile";

// Matches **bold** keywords and [metric: ...] placeholders.
const TOKEN = /(\*\*[^*]+\*\*|\[metric[^\]]*\])/g;

/**
 * Server-rendered mini formatter for achievement strings:
 * `**React**` -> <strong>React</strong>, `[metric: …]` -> highlighted placeholder.
 */
export function RichText({ text }: { text: RichTextValue }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-fg">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("[metric")) {
          return (
            <mark
              key={i}
              title="Placeholder: replace with a real metric"
              className="rounded bg-amber-200/60 px-1 text-amber-950 dark:bg-amber-400/20 dark:text-amber-200"
            >
              {part}
            </mark>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
