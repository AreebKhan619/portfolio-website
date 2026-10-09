import Image from "next/image";
import type { CSSProperties } from "react";

import { ExternalLink } from "@/components/external-link";
import { BadgeList } from "@/components/badge-list";
import { DateRange } from "@/components/date-range";
import { FadeIn } from "@/components/fade-in";
import { RichText } from "@/components/rich-text";
import { SectionHeading } from "@/components/section-heading";
import type { WorkExperience } from "@/types/profile";

export function Experience({ jobs }: { jobs: WorkExperience[] }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20">
      <SectionHeading id="experience-title" eyebrow="Career" title="Experience" />
      {/*
        The track's fill and each dot are driven by CSS scroll-driven animations
        (see .timeline in globals.css); without support it is fully drawn.
      */}
      <div className="timeline relative">
        <span
          aria-hidden="true"
          className="timeline-track pointer-events-none absolute top-2 bottom-0 left-0 w-px overflow-hidden"
        >
          <span className="timeline-fill absolute inset-0" />
        </span>
        <ol className="space-y-12 pl-6 sm:pl-8">
          {jobs.map((job) => (
            <li
              key={job.id}
              data-brand={job.brandColor ? "" : undefined}
              style={job.brandColor ? ({ "--brand": job.brandColor } as CSSProperties) : undefined}
              className="timeline-item group relative"
            >
              {/* This company's stretch of the line, down to the next dot. */}
              <span
                aria-hidden="true"
                className="timeline-segment pointer-events-none absolute top-2 -bottom-12 -left-6.25 w-0.75 rounded-full group-last:bottom-0 sm:-left-8.25"
              />
              <span
                aria-hidden="true"
                data-current={job.endDate === null ? "" : undefined}
                className="timeline-dot absolute top-2 -left-[28.5px] size-2.5 rounded-full sm:-left-[36.5px]"
              />
              <FadeIn>
                <article>
                  <header className="flex items-start gap-4">
                    {job.logo ? (
                      <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-line sm:size-12">
                        <Image
                          src={job.logo.src}
                          alt=""
                          width={96}
                          height={96}
                          sizes="48px"
                          className={`size-full ${job.logo.inset ? "object-contain p-1.5" : "object-cover"}`}
                        />
                      </span>
                    ) : null}
                    <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-fg">{job.role}</h3>
                        <p className="text-base text-muted">
                          {job.companyUrl ? (
                            <ExternalLink
                              href={job.companyUrl}
                              className="font-medium text-fg underline decoration-line underline-offset-4 hover:decoration-accent"
                            >
                              {job.company}
                            </ExternalLink>
                          ) : (
                            <span className="font-medium text-fg">{job.company}</span>
                          )}
                          {job.location ? <span> · {job.location}</span> : null}
                          {job.employmentType ? <span> · {job.employmentType}</span> : null}
                        </p>
                      </div>
                      <DateRange start={job.startDate} end={job.endDate} />
                    </div>
                  </header>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-muted marker:text-line">
                    {job.achievements.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <BadgeList items={job.stack} label={`Tech used at ${job.company}`} />
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
