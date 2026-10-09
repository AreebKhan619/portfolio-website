import { toPlainText } from "@/lib/format";
import type { Profile } from "@/types/profile";

/** Serialises structured data, escaping `<` so the payload can't close the <script> tag. */
function serialize(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Schema.org Person (+ WebSite) graph, derived entirely from the profile data. */
export function PersonJsonLd({ profile }: { profile: Profile }) {
  const { site, personalInfo, workExperience, education, skills } = profile;
  const personId = `${site.url}/#person`;
  const knowsAbout = [...new Set(skills.flatMap((group) => group.items))];

  const current = workExperience.filter((job) => job.endDate === null);

  const alumniOf = [
    ...new Map(education.map((edu) => [edu.institution, edu])).values(),
  ].map((edu) => ({
    "@type": edu.institutionType,
    name: edu.institution,
    ...(edu.institutionUrl ? { url: edu.institutionUrl } : {}),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: personalInfo.name,
        alternateName: personalInfo.fullName,
        givenName: personalInfo.givenName,
        familyName: personalInfo.familyName,
        url: site.url,
        ...(personalInfo.photo ? { image: new URL(personalInfo.photo.src, site.url).href } : {}),
        email: `mailto:${personalInfo.email}`,
        jobTitle: personalInfo.jobTitle,
        description: toPlainText(personalInfo.valueProposition),
        ...(personalInfo.location
          ? { address: { "@type": "PostalAddress", addressLocality: personalInfo.location } }
          : {}),
        hasOccupation: {
          "@type": "Occupation",
          name: personalInfo.jobTitle,
          description: toPlainText(personalInfo.summary),
          skills: knowsAbout.join(", "),
        },
        worksFor: current.map((job) => ({
          "@type": "Organization",
          name: job.company,
          ...(job.companyUrl ? { url: job.companyUrl } : {}),
        })),
        alumniOf,
        knowsAbout,
        sameAs: personalInfo.socials.map((social) => social.url),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: site.locale.replace("_", "-"),
        author: { "@id": personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(jsonLd) }}
    />
  );
}
