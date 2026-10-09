import { formatDateRange, toPlainText } from "@/lib/format";
import { RESUME_PATH } from "@/lib/resume/path";
import type { CommandPaletteCopy, NavItem, Profile, TerminalCopy } from "@/types/profile";

/**
 * The slice of the profile the command palette needs, built on the server and
 * passed as props so the client bundle carries no content of its own.
 */
export interface PaletteData {
  copy: CommandPaletteCopy;
  sections: NavItem[];
  email: string;
  resume: { url: string; fileName: string };
  socials: { label: string; url: string }[];
}

export function buildPaletteData(profile: Profile): PaletteData {
  const { personalInfo, site, commandPalette, resume } = profile;
  return {
    copy: commandPalette,
    sections: site.navigation,
    email: personalInfo.email,
    resume: { url: RESUME_PATH, fileName: resume.fileName },
    socials: personalInfo.socials.map(({ label, url }) => ({ label, url })),
  };
}

/** Output of the content commands, formatted on the server from the profile. */
export interface TerminalData {
  copy: TerminalCopy;
  output: {
    whoami: string[];
    experience: string[];
    skills: string[];
    projects: string[];
    contact: string[];
  };
  resume: { url: string; fileName: string };
}

export function buildTerminalData(profile: Profile): TerminalData {
  const { personalInfo, workExperience, skills, projects, terminal, resume } = profile;

  const whoami = [
    `${personalInfo.name} (${personalInfo.fullName})`,
    personalInfo.jobTitle,
    personalInfo.headline,
    ...(personalInfo.location ? [personalInfo.location] : []),
    "",
    toPlainText(personalInfo.valueProposition),
    toPlainText(personalInfo.summary),
  ];

  const experience = workExperience.map((job) => {
    const range = formatDateRange(job.startDate, job.endDate).padEnd(21);
    return `${range} ${job.role} @ ${job.company}`;
  });

  const skillLines = skills.map((group) => `${group.category}: ${group.items.join(", ")}`);

  const projectLines = projects.flatMap((project) => {
    const link = project.links.live ?? project.links.repo;
    return [
      `${project.name} — ${toPlainText(project.summary)}`,
      ...(link ? [`  ${link}`] : []),
    ];
  });

  const contact = [
    `email: ${personalInfo.email}`,
    ...personalInfo.socials.map((social) => `${social.label.toLowerCase()}: ${social.url}`),
  ];

  return {
    copy: terminal,
    output: { whoami, experience, skills: skillLines, projects: projectLines, contact },
    resume: { url: RESUME_PATH, fileName: resume.fileName },
  };
}
