import Image from "next/image";

import { RichText } from "@/components/rich-text";
import { RotatingTagline } from "@/components/rotating-tagline";
import { RESUME_PATH } from "@/lib/resume/path";
import type { PersonalInfo, ResumeConfig } from "@/types/profile";

export function Hero({
  info,
  resume,
  locale,
}: {
  info: PersonalInfo;
  resume: ResumeConfig;
  locale: string;
}) {
  return (
    // Below lg the portrait floats right and the copy wraps around it, so the
    // name stays at the top; from lg it gets its own column beside the copy.
    <section
      aria-labelledby="hero-title"
      className="flow-root pt-16 pb-14 sm:pt-24 sm:pb-20 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-x-12"
    >
      {info.photo ? (
        // A transparent cut-out (circle + head breaking out of it): no frame, just a
        // soft accent-tinted shadow that follows its outline.
        <Image
          src={info.photo.src}
          alt={info.photo.alt}
          width={info.photo.width}
          height={info.photo.height}
          sizes="(min-width: 1024px) 352px, (min-width: 640px) 224px, 128px"
          preload
          className="float-right mb-4 ml-5 h-auto w-32 drop-shadow-xl drop-shadow-accent/15 sm:ml-8 sm:w-56 lg:col-start-2 lg:row-start-1 lg:float-none lg:m-0 lg:w-88"
        />
      ) : null}

      <div className="lg:col-start-1 lg:row-start-1">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
          {info.headline}
        </p>
        <h1
          id="hero-title"
          className="mt-4 font-display text-6xl leading-[0.95] tracking-tight text-fg sm:text-8xl"
        >
          {info.name}
          <span className="mt-4 block font-sans text-xl font-normal tracking-normal text-muted sm:text-2xl">
            {info.jobTitle}
          </span>
        </h1>
        <RotatingTagline
          tagline={info.tagline}
          locale={locale}
          className="tagline mt-10 font-display text-4xl leading-tight text-fg sm:text-5xl"
        />
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-fg sm:text-2xl sm:leading-snug">
          {info.valueProposition}
        </p>
        {info.highlights?.length ? (
          <ul className="mt-6 max-w-2xl space-y-2.5 text-base leading-relaxed text-muted">
            {info.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{info.summary}</p>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={RESUME_PATH}
            download={resume.fileName}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {resume.label}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
