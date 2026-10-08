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
      <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-8">
        {jobs.map((job) => (
          <li key={job.id} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-2 -left-[29px] size-2.5 rounded-full ring-4 ring-bg sm:-left-[37px] ${
                job.endDate === null ? "bg-accent" : "bg-line"
              }`}
            />
            <FadeIn>
              <article>
                <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
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
    </section>
  );
}
