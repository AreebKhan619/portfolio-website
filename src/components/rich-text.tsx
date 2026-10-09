import { Fragment } from "react";

import { parseRichText } from "@/lib/rich-text";
import type { RichText as RichTextValue } from "@/types/profile";

/**
 * Server-rendered mini formatter for achievement strings:
 * `**React**` -> <strong>React</strong>, `[metric: …]` -> highlighted placeholder.
 */
export function RichText({ text }: { text: RichTextValue }) {
  return (
    <>
      {parseRichText(text).map((part, i) => {
        if (part.kind === "bold") {
          return (
            <strong key={i} className="font-semibold text-fg">
              {part.value}
            </strong>
          );
        }
        if (part.kind === "metric") {
          return (
            <mark
              key={i}
              title="Placeholder: replace with a real metric"
              className="rounded bg-amber-200/60 px-1 text-amber-950 dark:bg-amber-400/20 dark:text-amber-200"
            >
              {part.value}
            </mark>
          );
        }
        return <Fragment key={i}>{part.value}</Fragment>;
      })}
    </>
  );
}
