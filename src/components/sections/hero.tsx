import type { PersonalInfo } from "@/types/profile";

export function Hero({ info }: { info: PersonalInfo }) {
  return (
    <section aria-labelledby="hero-title" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
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
      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-fg sm:text-2xl sm:leading-snug">
        {info.valueProposition}
      </p>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{info.summary}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={info.resume.url}
          download={info.resume.fileName}
          className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {info.resume.label}
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
