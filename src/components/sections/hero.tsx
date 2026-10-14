import Image from "next/image";

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
    // One statement and its actions, filling exactly the first screen (below
    // the 3rem header) with the content centred; the detail lives one level
    // down in At a glance. Taller content simply grows the section.
    <section
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100svh-3rem)] flex-col justify-center py-6 short:py-3 sm:py-12"
    >
      {/*
        Phones: the portrait sits on top and takes whatever height the copy
        leaves in the first screen (100svh, so with Safari's toolbars showing),
        between a floor that still reads and a cap, so the buttons stay above
        the fold wherever the floor allows. The buttons are a size smaller here
        so they share one row. sm-lg: it floats right and the copy wraps around
        it, so the name stays at the top. From lg it gets its own column beside
        the copy.
      */}
      <div className="flex flex-1 flex-col justify-center sm:flow-root sm:flex-none lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-x-12">
        {info.photo ? (
          // A transparent cut-out (circle + head breaking out of it): no frame, just a
          // soft shadow that follows its outline, over the aura behind it.
          <Image
            src={info.photo.src}
            alt={info.photo.alt}
            width={info.photo.width}
            height={info.photo.height}
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 224px, 260px"
            preload
            className="mb-5 min-h-36 max-h-80 w-full flex-1 basis-0 object-contain object-left drop-shadow-2xl short:mb-3 drop-shadow-black/10 sm:float-right sm:mb-4 sm:ml-8 sm:h-auto sm:max-h-none sm:min-h-0 sm:w-56 sm:flex-none lg:col-start-2 lg:row-start-1 lg:float-none lg:m-0 lg:w-88"
          />
        ) : null}

        {/*
          A container only from lg: containment makes a new formatting context,
          which below lg would stop the copy wrapping under the floated portrait.
          Without one, the tagline's cqi units fall back to the viewport.
        */}
        <div className="flex-none lg:col-start-1 lg:row-start-1 lg:@container">
          <p className="type-eyebrow text-muted">{info.headline}</p>
          <h1 id="hero-title" className="type-hero mt-3 text-fg">
            {info.name}
            <span className="type-title mt-3 block text-muted">{info.jobTitle}</span>
          </h1>
          <RotatingTagline
            tagline={info.tagline}
            locale={locale}
            className="type-tagline mt-8 text-fg short:mt-5 sm:mt-10"
          />
          <p className="type-intro mt-5 max-w-2xl text-fg short:mt-3">{info.valueProposition}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3 short:mt-5 sm:gap-4">
            <a
              href={RESUME_PATH}
              download={resume.fileName}
              className="pressable inline-flex items-center gap-2 rounded-full whitespace-nowrap bg-button px-4 py-3 text-callout leading-none sm:px-5.5 sm:text-body text-button-fg hover:bg-button-hover"
            >
              <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {resume.label}
            </a>
            <a
              href="#contact"
              className="pressable inline-flex items-center rounded-full whitespace-nowrap px-4 py-3 text-callout leading-none text-link sm:px-5.5 sm:text-body ring-1 ring-link ring-inset hover:bg-link hover:text-button-fg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
