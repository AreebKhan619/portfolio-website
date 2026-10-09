import { ExternalLink } from "@/components/external-link";
import { RESUME_PATH } from "@/lib/resume/path";
import type { PersonalInfo, ResumeConfig } from "@/types/profile";

export function SiteFooter({ info, resume }: { info: PersonalInfo; resume: ResumeConfig }) {
  return (
    <footer className="border-t border-line">
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="mx-auto max-w-5xl px-5 py-20 sm:px-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2
          id="contact-title"
          className="mt-2 font-display text-4xl leading-none tracking-tight text-fg sm:text-5xl"
        >
          Let&apos;s talk
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Email is the fastest way to reach me. My resume and profiles are linked below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${info.email}`}
            className="inline-flex items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {info.email}
          </a>
          <a
            href={RESUME_PATH}
            download={resume.fileName}
            className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {resume.label}
          </a>
        </div>
        <ul aria-label="Social profiles" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {info.socials.map((social) => (
            <li key={social.url}>
              <ExternalLink
                href={social.url}
                className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
              >
                {social.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-xs text-muted">{info.fullName}</p>
      </section>
    </footer>
  );
}
