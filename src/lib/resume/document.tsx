import { Document, Font, Link, Page, Text, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";

import { formatDateRange, formatDisplayUrl, formatYearMonth, toPlainText } from "@/lib/format";
import { hasPlaceholder, parseRichText } from "@/lib/rich-text";
import { styles } from "@/lib/resume/styles";
import type { Profile, ResumeSectionId, RichText } from "@/types/profile";

// Never split a word across lines: a hyphenated "Type-Script" no longer
// matches the keyword an ATS is searching for.
Font.registerHyphenationCallback((word) => [word]);

const PAGE_SIZES = ["A4", "LETTER"] as const;

/**
 * ATS-friendly resume: one column, standard headings, real text and visible
 * URLs. Built from `getResumeProfile()`, so `resumeOverrides` already apply.
 */
export function ResumeDocument({ profile }: { profile: Profile }) {
  const { personalInfo: info, resume, site } = profile;
  const pageSize = PAGE_SIZES.find((size) => size === resume.pageSize);
  if (!pageSize) {
    throw new Error(`resume.pageSize must be one of ${PAGE_SIZES.join(", ")}; got "${resume.pageSize}".`);
  }

  return (
    <Document
      title={`${info.name} — ${info.jobTitle}`}
      author={info.fullName}
      subject={`Resume of ${info.fullName}`}
      keywords={site.keywords.join(", ")}
      creator={site.url}
      producer={site.url}
      language="en"
      creationDate={new Date(site.lastUpdated)}
      modificationDate={new Date(site.lastUpdated)}
    >
      <Page size={pageSize} style={styles.page}>
        <Header profile={profile} />
        {resume.sections.map(({ id, title }) => {
          if (!isSectionId(id)) {
            throw new Error(
              `Unknown resume section "${id}" in resume.sections. Known: ${Object.keys(SECTIONS).join(", ")}.`,
            );
          }
          const body = SECTIONS[id]({ profile });
          const empty = body == null || (Array.isArray(body) && body.length === 0);
          return empty ? null : (
            <Section key={id} title={title}>
              {body}
            </Section>
          );
        })}
      </Page>
    </Document>
  );
}

/** Plain function (not a component) so an empty section can be skipped, heading and all. */
type SectionBody = (props: { profile: Profile }) => ReactNode;

/** One body per section id. To add a section: add the id, a body here, and list it in the data. */
const SECTIONS: Record<ResumeSectionId, SectionBody> = {
  summary: ({ profile }) =>
    printable([profile.personalInfo.summary], "personalInfo.summary").map((line) => (
      <Text key={line}>
        <Rich text={line} />
      </Text>
    )),

  experience: ({ profile }) =>
    profile.workExperience.map((job) => (
      <Entry
        key={job.id}
        title={
          <>
            <Text style={styles.bold}>{job.role}</Text>, {job.company}
          </>
        }
        aside={formatDateRange(job.startDate, job.endDate)}
        meta={[job.location, job.employmentType]}
        bullets={job.achievements}
        stack={job.stack}
        where={`workExperience "${job.id}"`}
      />
    )),

  projects: ({ profile }) =>
    profile.projects.map((project) => {
      const url = project.links.live ?? project.links.repo;
      return (
        <Entry
          key={project.id}
          title={
            <>
              <Text style={styles.bold}>{project.name}</Text>
              {project.organization ? `, ${project.organization}` : ""}
            </>
          }
          aside={url ? <WebLink url={url} /> : undefined}
          bullets={[project.summary, project.impact].filter((line) => line !== undefined)}
          stack={project.stack}
          where={`projects "${project.id}"`}
        />
      );
    }),

  skills: ({ profile }) =>
    profile.skills.map((group) => (
      <Text key={group.category} style={styles.line}>
        <Text style={styles.bold}>{group.category}:</Text> {group.items.join(", ")}
      </Text>
    )),

  education: ({ profile }) =>
    profile.education.map((edu) => (
      <Entry
        key={edu.id}
        title={<Text style={styles.bold}>{edu.qualification}</Text>}
        aside={formatDateRange(edu.startDate, edu.endDate)}
        meta={[edu.institution, edu.location, edu.grade]}
        where={`education "${edu.id}"`}
      />
    )),

  certifications: ({ profile }) =>
    profile.certifications.map((cert) => (
      <Bullet key={`${cert.issuer}-${cert.name}`}>
        {cert.name}, <Text style={styles.muted}>{cert.issuer}</Text>
      </Bullet>
    )),

  publications: ({ profile }) =>
    profile.publications.map((pub) => (
      <Bullet key={pub.title}>
        {pub.title}, <Text style={styles.muted}>{pub.publisher}</Text>
        {pub.date ? <Text style={styles.muted}>, {formatYearMonth(pub.date)}</Text> : null}
      </Bullet>
    )),
};

function isSectionId(id: string): id is ResumeSectionId {
  return Object.hasOwn(SECTIONS, id);
}

function Header({ profile }: { profile: Profile }) {
  const { personalInfo: info } = profile;
  const contacts: ReactNode[] = [
    info.location,
    <Link key="email" src={`mailto:${info.email}`} style={styles.link}>
      {info.email}
    </Link>,
    ...info.socials.map((social) => <WebLink key={social.label} url={social.url} />),
  ].filter(Boolean);

  return (
    <View>
      <Text style={styles.name}>{info.name}</Text>
      <Text style={styles.title}>
        {info.jobTitle} | {info.headline}
      </Text>
      <Text style={styles.contact}>
        {contacts.map((item, i) => (
          <Text key={i}>
            {i > 0 ? " | " : ""}
            {item}
          </Text>
        ))}
      </Text>
    </View>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      {/* Keeps a heading from sitting alone at the bottom of a page. */}
      <Text style={styles.heading} minPresenceAhead={36}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function Entry({
  title,
  aside,
  meta = [],
  bullets = [],
  stack = [],
  where,
}: {
  title: ReactNode;
  aside?: ReactNode;
  meta?: (string | undefined)[];
  bullets?: RichText[];
  stack?: string[];
  where: string;
}) {
  const metaLine = meta.filter(Boolean).join(" · ");
  return (
    <View style={styles.entry}>
      <View style={styles.entryHeader} minPresenceAhead={24}>
        <Text style={styles.entryTitle}>{title}</Text>
        {aside ? <Text style={styles.entryAside}>{aside}</Text> : null}
      </View>
      {metaLine ? <Text style={styles.entryMeta}>{metaLine}</Text> : null}
      {printable(bullets, where).map((line, i) => (
        <Bullet key={i}>
          <Rich text={line} />
        </Bullet>
      ))}
      {stack.length > 0 ? <Text style={styles.stack}>Tech: {stack.join(", ")}</Text> : null}
    </View>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    // wrap={false}: a bullet moves to the next page whole, never leaving its "•" behind.
    <View style={styles.bulletRow} wrap={false}>
      <Text style={styles.bulletMark}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

/** `**bold**` -> bold run; everything else as plain text. */
function Rich({ text }: { text: RichText }) {
  return parseRichText(text).map((part, i) =>
    part.kind === "bold" ? (
      <Text key={i} style={styles.bold}>
        {part.value}
      </Text>
    ) : (
      part.value
    ),
  );
}

function WebLink({ url }: { url: string }) {
  return (
    <Link src={url} style={styles.link}>
      {formatDisplayUrl(url)}
    </Link>
  );
}

/**
 * Drops lines that still hold a `[metric: …]` placeholder: the site shows
 * them highlighted as drafts, but they must never reach a recruiter.
 */
function printable(lines: RichText[], where: string): RichText[] {
  return lines.filter((line) => {
    if (!hasPlaceholder(line)) return true;
    console.warn(`[resume] Left out a line with a placeholder (${where}): ${toPlainText(line)}`);
    return false;
  });
}
