import type { RichText } from "@/types/profile";

export type RichTextPart =
  | { kind: "text"; value: string }
  /** `**React**` -> "React". */
  | { kind: "bold"; value: string }
  /** `[metric: …]` placeholder, kept verbatim. */
  | { kind: "metric"; value: string };

// Matches **bold** keywords and [metric: ...] placeholders.
const TOKEN = /(\*\*[^*]+\*\*|\[metric[^\]]*\])/g;

/**
 * Splits a rich-text string into parts. Shared by the web `RichText`
 * component and the PDF resume so both read the markers the same way.
 */
export function parseRichText(text: RichText): RichTextPart[] {
  return text
    .split(TOKEN)
    .filter(Boolean)
    .map((part) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return { kind: "bold", value: part.slice(2, -2) };
      }
      if (part.startsWith("[metric")) return { kind: "metric", value: part };
      return { kind: "text", value: part };
    });
}

/** True when the string still holds a `[metric: …]` placeholder. */
export function hasPlaceholder(text: RichText): boolean {
  return parseRichText(text).some((part) => part.kind === "metric");
}
