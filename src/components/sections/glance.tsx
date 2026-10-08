import { ExternalLink } from "@/components/external-link";
import type { CareerStats } from "@/lib/stats";
import type { Glance as GlanceContent } from "@/types/profile";

interface GlanceProps {
  content: GlanceContent;
  stats: CareerStats;
}

const tile = "rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur-sm sm:p-6";
const label = "font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted";

/** Bento of quick facts under the hero. Numbers come from `getCareerStats()`. */
export function Glance({ content, stats }: GlanceProps) {
  const { labels, availability, coreStack } = content;

  return (
    <section aria-labelledby="glance-title" className="pb-4">
      <h2 id="glance-title" className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {content.title}
      </h2>
      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.current ? (
          <div className={`${tile} col-span-2 flex flex-col justify-between gap-8 md:row-span-2`}>
            <dt className={label}>{labels.current}</dt>
            <dd>
              <p className="font-display text-3xl leading-tight text-fg sm:text-4xl">
                {stats.current.role}
              </p>
              <p className="mt-2 font-mono text-sm text-muted">
                @{" "}
                {stats.current.companyUrl ? (
                  <ExternalLink
                    href={stats.current.companyUrl}
                    className="text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {stats.current.company}
                  </ExternalLink>
                ) : (
                  <span className="text-fg">{stats.current.company}</span>
                )}
              </p>
            </dd>
          </div>
        ) : null}

        <div className={`${tile} flex flex-col-reverse justify-between gap-3`}>
          <dt className={label}>{labels.experience}</dt>
          <dd className="font-display text-6xl leading-none text-fg">
            {stats.years}
            <span className="text-accent">+</span>
          </dd>
        </div>

        <div className={`${tile} flex flex-col-reverse justify-between gap-3`}>
          <dt className={label}>{labels.companies}</dt>
          <dd className="font-display text-6xl leading-none text-fg">{stats.companies}</dd>
        </div>

        <div className={`${tile} col-span-2 flex items-center justify-between gap-4`}>
          <dt className={label}>{labels.availability}</dt>
          <dd className="flex items-center gap-2.5 text-sm font-medium text-fg">
            <span aria-hidden="true" className="relative flex size-2.5">
              {availability.available ? (
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
              ) : null}
              <span
                className={`relative size-2.5 rounded-full ${
                  availability.available ? "bg-emerald-500" : "bg-muted"
                }`}
              />
            </span>
            {availability.status}
          </dd>
        </div>

        {coreStack.length > 0 ? (
          <div
            className={`${tile} col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:col-span-4`}
          >
            <dt className={label}>{labels.stack}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-1 font-display text-2xl text-fg sm:text-3xl">
                {coreStack.map((item, i) => (
                  <li key={item} className="flex items-center gap-5">
                    {i > 0 ? (
                      <span aria-hidden="true" className="text-base text-accent">
                        ✦
                      </span>
                    ) : null}
                    {item}
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
