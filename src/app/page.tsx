import { HeroBackdrop } from "@/components/hero-backdrop";
import { PersonJsonLd } from "@/components/person-json-ld";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProfile } from "@/lib/content";

export default async function HomePage() {
  const profile = await getProfile();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <HeroBackdrop />
      <SiteHeader name={profile.personalInfo.name} />
      <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero info={profile.personalInfo} />
        <Experience jobs={profile.workExperience} />
        <Projects projects={profile.projects} />
        <Skills groups={profile.skills} />
        <Education
          education={profile.education}
          certifications={profile.certifications}
          publications={profile.publications}
        />
      </main>
      <SiteFooter info={profile.personalInfo} />
      <PersonJsonLd profile={profile} />
    </>
  );
}
