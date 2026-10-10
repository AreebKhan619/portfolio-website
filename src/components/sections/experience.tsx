import { BadgeList } from "@/components/badge-list";
import { CompanyLogo } from "@/components/company-logo";
import { ExternalLink } from "@/components/external-link";
import { DateRange } from "@/components/date-range";
import { FadeIn } from "@/components/fade-in";
import { RichText } from "@/components/rich-text";
import { SectionHeading } from "@/components/section-heading";
import { brandProps } from "@/lib/brand";
import type { WorkExperience } from "@/types/profile";

export function Experience({ jobs }: { jobs: WorkExperience[] }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
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
        <ol className="space-y-14 pl-6 sm:pl-8">
          {jobs.map((job) => (
            <li key={job.id} {...brandProps(job)} className="timeline-item group relative">
              {/* This company's stretch of the line, down to the next dot. */}
              <span
                aria-hidden="true"
                className="timeline-segment pointer-events-none absolute top-2 -bottom-14 -left-6.25 w-0.75 rounded-full group-last:bottom-0 sm:-left-8.25"
              />
              <span
                aria-hidden="true"
                data-current={job.endDate === null ? "" : undefined}
                className="timeline-dot absolute top-2 -left-[28.5px] size-2.5 rounded-full sm:-left-[36.5px]"
              />
              <FadeIn>
                <article>
                  <header className="flex items-start gap-4">
                    {job.logo ? <CompanyLogo logo={job.logo} /> : null}
                    <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="text-[1.3125rem] leading-tight font-semibold tracking-[-0.018em] text-fg">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-muted">
                          {job.companyUrl ? (
                            <ExternalLink
                              href={job.companyUrl}
                              className="font-medium text-link hover:underline hover:underline-offset-4"
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
                  <ul className="mt-5 list-disc space-y-2 pl-5 leading-[1.47] text-muted marker:text-subtle">
                    {job.achievements.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
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
