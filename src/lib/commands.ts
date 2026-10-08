import type { CommandPaletteCopy, NavItem, Profile } from "@/types/profile";

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
  const { personalInfo, site, commandPalette } = profile;
  return {
    copy: commandPalette,
    sections: site.navigation,
    email: personalInfo.email,
    resume: { url: personalInfo.resume.url, fileName: personalInfo.resume.fileName },
    socials: personalInfo.socials.map(({ label, url }) => ({ label, url })),
  };
}
