import { DateRange } from "@/components/date-range";
import { ExternalLink } from "@/components/external-link";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { formatYearMonth } from "@/lib/format";
import type { Certification, Education as EducationEntry, Publication } from "@/types/profile";

interface EducationProps {
  education: EducationEntry[];
  certifications: Certification[];
  publications: Publication[];
}

const linkClass =
  "text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent";

export function Education({ education, certifications, publications }: EducationProps) {
  return (
    <section id="education" aria-labelledby="education-title" className="py-20">
      <SectionHeading
        id="education-title"
        eyebrow="Background"
        title="Education & Certifications"
      />

      <div className="divide-y divide-line">
        {education.map((edu) => (
          <FadeIn key={edu.id} className="py-5 first:pt-0 last:pb-0">
            <article>
              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-fg">{edu.qualification}</h3>
                  <p className="text-muted">
                    {edu.institutionUrl ? (
                      <ExternalLink href={edu.institutionUrl} className={linkClass}>
                        {edu.institution}
                      </ExternalLink>
                    ) : (
                      <span className="text-fg">{edu.institution}</span>
                    )}
                    {edu.location ? <span> · {edu.location}</span> : null}
                    {edu.grade ? <span> · {edu.grade}</span> : null}
                  </p>
                </div>
                <DateRange start={edu.startDate} end={edu.endDate} />
              </header>
              {/* Highlights and links stay in the data but are left off: experience leads now. */}
            </article>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr]">
        {certifications.length > 0 ? (
          <FadeIn>
            <h3 className="text-lg font-semibold text-fg">Certifications</h3>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {certifications.map((cert) => (
                <li key={`${cert.issuer}-${cert.name}`} className="text-muted">
                  {cert.url ? (
                    <ExternalLink href={cert.url} className={linkClass}>
                      {cert.name}
                    </ExternalLink>
                  ) : (
                    <span className="text-fg">{cert.name}</span>
                  )}
                  <span> · {cert.issuer}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ) : null}
        {publications.length > 0 ? (
          <FadeIn>
            <h3 className="text-lg font-semibold text-fg">Publications</h3>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {publications.map((pub) => (
                <li key={pub.title} className="text-muted">
                  {pub.url ? (
                    <ExternalLink href={pub.url} className={linkClass}>
                      {pub.title}
                    </ExternalLink>
                  ) : (
                    <cite className="text-fg not-italic">{pub.title}</cite>
                  )}
                  <span className="block text-sm">
                    {pub.publisher}
                    {pub.date ? <span> · {formatYearMonth(pub.date)}</span> : null}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
