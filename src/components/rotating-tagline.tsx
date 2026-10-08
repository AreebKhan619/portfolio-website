import type { CSSProperties } from "react";

import type { PersonalInfo } from "@/types/profile";

interface RotatingTaglineProps {
  tagline: PersonalInfo["tagline"];
  /** BCP 47 locale used to join the words for the plain-text sentence. */
  locale: string;
  className?: string;
}

/** Seconds each word stays on screen. */
const STEP = 2.6;
/** Seconds spent fading a word in (and out). */
const FADE = 0.45;

/**
 * Builds keyframes for N words: each word owns 1/N of the cycle. It fades in
 * at the start of its slot and fades out while the next word fades in, so the
 * line is never blank. Generated on the server: the rotation is pure CSS.
 */
function keyframes(name: string, count: number): string {
  const cycle = count * STEP;
  const slot = 100 / count;
  const fade = (FADE / cycle) * 100;
  const pct = (value: number) => `${value.toFixed(3)}%`;

  return `@keyframes ${name}{
0%{opacity:0;transform:translateY(.35em);filter:blur(4px)}
${pct(fade)},${pct(slot)}{opacity:1;transform:none;filter:blur(0)}
${pct(slot + fade)},100%{opacity:0;transform:translateY(-.35em);filter:blur(4px)}
}`;
}

/**
 * "I build <rotating phrase>." — the animated part is aria-hidden; the full
 * sentence ("I build a, b and c.") sits in the HTML as visually hidden text
 * for crawlers and assistive tech. Reduced motion shows the first word only.
 */
export function RotatingTagline({ tagline, locale, className }: RotatingTaglineProps) {
  const { lead, words, end } = tagline;
  if (words.length === 0) return null;

  const sentence = `${lead} ${new Intl.ListFormat(locale, { type: "conjunction" }).format(words)}${end}`;
  const name = `tagline-cycle-${words.length}`;
  const animated = words.length > 1;

  return (
    <p className={className}>
      <span className="sr-only">{sentence}</span>
      <span aria-hidden="true">
        {lead}{" "}
        <span className="tagline-words">
          {words.map((word, i) => (
            <span
              key={word}
              className="tagline-word"
              style={
                animated
                  ? ({
                      "--tagline-name": name,
                      "--tagline-duration": `${words.length * STEP}s`,
                      "--tagline-delay": `${i * STEP}s`,
                    } as CSSProperties)
                  : undefined
              }
            >
              {word}
              {end}
            </span>
          ))}
        </span>
      </span>
      {animated ? (
        <style href={name} precedence="default">
          {keyframes(name, words.length)}
        </style>
      ) : null}
    </p>
  );
}
