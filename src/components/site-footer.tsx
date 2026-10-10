import { ExternalLink } from "@/components/external-link";
import { RESUME_PATH } from "@/lib/resume/path";
import type { PersonalInfo, ResumeConfig } from "@/types/profile";

export function SiteFooter({ info, resume }: { info: PersonalInfo; resume: ResumeConfig }) {
  return (
    <footer className="bg-band">
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="mx-auto max-w-5xl px-5 pt-24 pb-20 text-center sm:px-8 sm:pt-32 sm:pb-24"
      >
        <p className="type-eyebrow text-accent">Contact</p>
        <h2 id="contact-title" className="type-hero mt-3 text-fg">
          Let&apos;s talk.
        </h2>
        <p className="type-intro mx-auto mt-5 max-w-xl text-muted">
          Email is the fastest way to reach me. My resume and profiles are linked below.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={`mailto:${info.email}`}
            className="pressable inline-flex items-center rounded-full bg-button px-5.5 py-3 text-body leading-none text-button-fg hover:bg-button-hover"
          >
            {info.email}
          </a>
          <a
            href={RESUME_PATH}
            download={resume.fileName}
            className="pressable inline-flex items-center rounded-full px-5.5 py-3 text-body leading-none text-link ring-1 ring-link ring-inset hover:bg-link hover:text-button-fg"
          >
            {resume.label}
          </a>
        </div>
        <ul
          aria-label="Social profiles"
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-body"
        >
          {info.socials.map((social) => (
            <li key={social.url}>
              <ExternalLink
                href={social.url}
                className="text-link hover:underline hover:underline-offset-4"
              >
                {social.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="border-t border-line py-5 text-xs text-subtle">{info.fullName}</p>
      </div>
    </footer>
  );
}
