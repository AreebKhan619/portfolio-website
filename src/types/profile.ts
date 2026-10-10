/**
 * Content schema for the portfolio.
 *
 * Everything personal lives in `src/data/profile.json` and is read through
 * `getProfile()` in `src/lib/content.ts`. Swapping to a headless CMS only
 * requires `getProfile()` to return this same shape.
 *
 * Rich-text conventions (strings typed as `RichText`):
 *   - `**keyword**`   renders as <strong> (tech keywords in achievements)
 *   - `[metric: …]`   a placeholder still to be filled in; rendered highlighted
 *
 * Resume overrides: any entry with a `resumeOverrides` object uses those
 * fields instead of the same-named website fields in the generated PDF
 * resume only. `resumeOverrides.hidden` controls the resume independently of
 * the site's `hidden`.
 */

/** Plain string that may contain `**bold**` markers and `[metric: …]` placeholders. */
export type RichText = string;

/** Year-month in ISO form, e.g. "2023-01". */
export type YearMonth = string;

/**
 * Resume-only replacements for the listed fields of `T`. A field set here wins
 * over the website value in the PDF; anything left out falls back to it.
 * `hidden: true` leaves the entry off the resume, `false` puts a site-hidden
 * entry back on.
 */
export type ResumeOverrides<T, K extends keyof T = never> = Partial<Pick<T, K>> & {
  hidden?: boolean;
};

/** Resume sections, rendered in the order `ResumeConfig.sections` lists them. */
export type ResumeSectionId =
  | "summary"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "certifications"
  | "publications";

/** The generated PDF resume. Its URL is fixed by the route (`RESUME_PATH`). */
export interface ResumeConfig {
  /** File name offered by the browser on download. */
  fileName: string;
  /** Download button label. */
  label: string;
  /** "A4" | "LETTER" — kept as string so JSON stays type-checkable. */
  pageSize: string;
  /**
   * Sections in print order, with their headings. Leave one out to drop it.
   * `id` is a `ResumeSectionId`; an unknown id fails the build.
   */
  sections: { id: string; title: string }[];
}

export interface SocialLink {
  /** Display label, e.g. "GitHub". */
  label: string;
  url: string;
  /** Short visible handle, e.g. "AreebKhan619". */
  handle?: string;
}

export interface SiteConfig {
  /** Canonical production origin, no trailing slash. */
  url: string;
  /** Browser-tab / OpenGraph site name. */
  name: string;
  /** Meta description (~150–160 chars). */
  description: string;
  keywords: string[];
  /** OpenGraph locale, e.g. "en_US". */
  locale: string;
  /** ISO date of the last content update; used by the sitemap. */
  lastUpdated: string;
  /** In-page sections shown in the header nav and the command palette. */
  navigation: NavItem[];
}

export interface NavItem {
  /** Section element id (without "#"). */
  id: string;
  label: string;
}

/** Copy for the ⌘K / Ctrl+K command palette. */
export interface CommandPaletteCopy {
  /** Accessible dialog title. */
  title: string;
  /** Accessible name of the header trigger button. */
  triggerLabel: string;
  placeholder: string;
  /** Shown when the filter matches nothing. */
  empty: string;
  groups: {
    navigate: string;
    actions: string;
    links: string;
  };
  actions: {
    copyEmail: string;
    /** Inline feedback after copying. */
    copied: string;
    /** Screen-reader announcement after copying. */
    copiedAnnouncement: string;
    downloadResume: string;
    toggleTheme: string;
    openTerminal: string;
    /** Template; `{label}` is replaced by the social link label. */
    openSocial: string;
  };
  /** Footer key hints. */
  hints: {
    navigate: string;
    select: string;
    close: string;
  };
}

export interface PersonalInfo {
  /** Display name used across the site, e.g. "Areeb Khan". */
  name: string;
  /** Full legal name, used as alternateName in JSON-LD. */
  fullName: string;
  givenName: string;
  familyName: string;
  /** Portrait under /public (intrinsic size in px), shown in the hero and used as the JSON-LD image. */
  photo?: { src: string; alt: string; width: number; height: number };
  /** Skimmable bullets, shown as the Highlights tile in At a glance (JSON-LD keeps `summary`). */
  highlights?: RichText[];
  /** Primary title, e.g. "Full-Stack Software Engineer". */
  jobTitle: string;
  /** Short specialisation line shown above the name. */
  headline: string;
  /**
   * Hero line with a rotating phrase: "{lead} {word}{end}". Each word must be
   * something real from the work history. The full sentence ("I build a, b
   * and c.") is rendered as plain text for crawlers and screen readers.
   */
  tagline: {
    lead: string;
    /** `color` is any CSS colour; only its hue and chroma are kept, lightness is set per theme for contrast. */
    words: { text: string; color?: string }[];
    /** Trailing punctuation, e.g. ".". */
    end: string;
  };
  /** One-sentence value proposition shown in the hero. */
  valueProposition: string;
  /** Short supporting paragraph under the value proposition. */
  summary: string;
  location?: string;
  email: string;
  socials: SocialLink[];
  resumeOverrides?: ResumeOverrides<PersonalInfo, "jobTitle" | "headline" | "summary">;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  /** Square logo under /public. `inset` pads logos drawn on a transparent background. */
  logo?: { src: string; inset?: boolean };
  /** Company colour (any CSS colour); the timeline deepens it to suit each theme. */
  brandColor?: string;
  /** Exact timeline colour, used as-is in both themes instead of the derived one. */
  lineColor?: string;
  /** Kept in the data but left off the site (timeline, terminal, JSON-LD, stats). */
  hidden?: boolean;
  location?: string;
  employmentType?: string;
  startDate: YearMonth;
  /** `null` means "Present". */
  endDate: YearMonth | null;
  /** X-Y-Z achievements: "Accomplished X, as measured by Y, by doing Z". */
  achievements: RichText[];
  stack: string[];
  resumeOverrides?: ResumeOverrides<
    WorkExperience,
    "role" | "location" | "achievements" | "stack"
  >;
}

export interface ProjectLinks {
  live?: string;
  repo?: string;
}

export interface Project {
  id: string;
  name: string;
  /** "professional" | "personal" — kept as string so JSON stays type-checkable. */
  category: string;
  /** What the product is, in one line. */
  summary: RichText;
  /** Business impact (measured where possible). */
  impact?: RichText;
  /** What Areeb personally did. */
  role?: string;
  /** Company / client the project was delivered for, if any. */
  organization?: string;
  /** Kept in the data but left off the site (cards, terminal). */
  hidden?: boolean;
  stack: string[];
  links: ProjectLinks;
  resumeOverrides?: ResumeOverrides<Project, "name" | "summary" | "impact" | "role" | "stack">;
}

export interface SkillGroup {
  category: string;
  items: string[];
  resumeOverrides?: ResumeOverrides<SkillGroup, "category" | "items">;
}

export interface Education {
  id: string;
  institution: string;
  institutionUrl?: string;
  /** Schema.org type for JSON-LD, e.g. "CollegeOrUniversity", "HighSchool". */
  institutionType: string;
  qualification: string;
  location?: string;
  startDate: YearMonth;
  endDate: YearMonth | null;
  grade?: string;
  highlights: RichText[];
  links?: { label: string; url: string }[];
  resumeOverrides?: ResumeOverrides<Education, "qualification" | "grade">;
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
  resumeOverrides?: ResumeOverrides<Certification, "name">;
}

export interface Publication {
  title: string;
  publisher: string;
  url?: string;
  date?: YearMonth;
  resumeOverrides?: ResumeOverrides<Publication>;
}

/** Terminal command names, in the order `help` lists them. */
export type TerminalCommand =
  | "help"
  | "whoami"
  | "experience"
  | "skills"
  | "projects"
  | "contact"
  | "resume"
  | "theme"
  | "clear"
  | "exit";

/**
 * Copy for the terminal easter egg. Command output itself (whoami,
 * experience, …) is generated from the rest of the profile.
 */
export interface TerminalCopy {
  title: string;
  prompt: string;
  /** Accessible label for the command input. */
  inputLabel: string;
  closeLabel: string;
  /** Lines printed when the terminal opens. */
  welcome: string[];
  /** Template; `{command}` is replaced by what was typed. */
  notFound: string;
  /** Description of each command, shown by `help`. */
  commands: Record<TerminalCommand, string>;
  responses: {
    /** Template; `{fileName}` is the resume file name. */
    resume: string;
    /** Template; `{theme}` is "light" or "dark". */
    theme: string;
  };
}

/**
 * GitHub contribution calendar. Fetched on the server from GitHub's public
 * contributions page; the section is omitted when that fails.
 */
export interface GitHubActivity {
  /** Must match the GitHub entry in `personalInfo.socials`. */
  username: string;
  eyebrow: string;
  title: string;
  /** Template; `{count}` is the formatted total. */
  total: string;
  /** Template; `{username}` is the GitHub username. */
  profileLink: string;
  /** Accessible label for the scrollable calendar region. */
  graphLabel: string;
  legendLess: string;
  legendMore: string;
}

/**
 * "At a glance" bento under the hero. Numbers (years, companies) are computed
 * from `workExperience`; only labels and hand-picked values live here.
 */
export interface Glance {
  title: string;
  labels: {
    current: string;
    experience: string;
    companies: string;
    stack: string;
    availability: string;
    highlights: string;
  };
  /** Headline technologies; each should also appear in `skills`. */
  coreStack: string[];
  availability: {
    /** true renders a pulsing green dot; false a muted one. */
    available: boolean;
    /** Short status, e.g. "Open to roles". */
    status: string;
  };
}

export interface Profile {
  site: SiteConfig;
  personalInfo: PersonalInfo;
  resume: ResumeConfig;
  commandPalette: CommandPaletteCopy;
  terminal: TerminalCopy;
  githubActivity: GitHubActivity;
  glance: Glance;
  workExperience: WorkExperience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
}
