import { CompanyLogo } from "@/components/company-logo";
import { ExternalLink } from "@/components/external-link";
import { RichText } from "@/components/rich-text";
import { brandProps } from "@/lib/brand";
import type { CareerStats } from "@/lib/stats";
import type { Glance as GlanceContent, RichText as RichTextValue } from "@/types/profile";

interface GlanceProps {
  content: GlanceContent;
  stats: CareerStats;
  highlights: RichTextValue[];
}

const tile = "rounded-tile bg-tile p-6 sm:p-7";
const label = "text-callout font-semibold text-muted";
const figure = "text-gradient text-[4.5rem] leading-none font-bold tracking-[-0.05em] sm:text-[5.5rem]";

/** Bento of quick facts under the hero. Numbers come from `getCareerStats()`. */
export function Glance({ content, stats, highlights }: GlanceProps) {
  const { labels, availability, coreStack } = content;

  return (
    <section aria-labelledby="glance-title" className="band py-16 sm:py-20">
      <h2 id="glance-title" className="type-title mb-8 text-fg">
        {content.title}
      </h2>
      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.current ? (
          <div
            {...brandProps(stats.current)}
            className={`${tile} brand-tile relative col-span-2 flex flex-col justify-between gap-10 md:row-span-2`}
          >
            <dt className={label}>{labels.current}</dt>
            {stats.current.logo ? (
              <CompanyLogo
                logo={stats.current.logo}
                className="absolute top-6 right-6 size-14 sm:top-7 sm:right-7 sm:size-16"
              />
            ) : null}
            <dd>
              <p className="type-title text-fg">{stats.current.role}</p>
              <p className="mt-2 text-body font-medium text-muted">
                at{" "}
                {stats.current.companyUrl ? (
                  <ExternalLink
                    href={stats.current.companyUrl}
                    className="font-semibold text-fg underline decoration-(--brand-line) decoration-2 underline-offset-4"
                  >
                    {stats.current.company}
                  </ExternalLink>
                ) : (
                  <span className="font-semibold text-fg">{stats.current.company}</span>
                )}
              </p>
            </dd>
          </div>
        ) : null}

        <div className={`${tile} flex flex-col-reverse justify-between gap-3`}>
          <dt className={label}>{labels.experience}</dt>
          <dd className={figure}>{stats.years}+</dd>
        </div>

        <div className={`${tile} flex flex-col-reverse justify-between gap-3`}>
          <dt className={label}>{labels.companies}</dt>
          <dd className={figure}>{stats.companies}</dd>
        </div>

        <div className={`${tile} col-span-2 flex items-center justify-between gap-4`}>
          <dt className={label}>{labels.availability}</dt>
          <dd className="flex items-center gap-2.5 text-body font-semibold text-fg">
            {/* A still dot with a soft halo: status, without a loop competing for attention. */}
            <span
              aria-hidden="true"
              className={`size-2.5 rounded-full ${
                availability.available
                  ? "bg-[#30d158] shadow-[0_0_0_4px_rgb(48_209_88/0.18)]"
                  : "bg-subtle"
              }`}
            />
            {availability.status}
          </dd>
        </div>

        {coreStack.length > 0 ? (
          <div
            className={`${tile} col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:col-span-4`}
          >
            <dt className={label}>{labels.stack}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-2xl font-semibold tracking-[-0.022em] text-fg sm:text-[1.75rem]">
                {coreStack.map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    {i > 0 ? (
                      <span aria-hidden="true" className="text-subtle">
                        ·
                      </span>
                    ) : null}
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ) : null}

        {highlights.length > 0 ? (
          <div className={`${tile} col-span-2 md:col-span-4`}>
            <dt className={label}>{labels.highlights}</dt>
            <dd className="mt-5">
              <ul className="grid gap-x-10 gap-y-3.5 leading-[1.47] text-muted md:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="mt-[0.2em] size-4.5 shrink-0 text-accent"
                    >
                      <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.14" />
                      <path
                        d="m5 8.25 2 2 4-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
