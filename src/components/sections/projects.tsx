import { BadgeList } from "@/components/badge-list";
import { CardSpotlight } from "@/components/card-spotlight";
import { ExternalLink } from "@/components/external-link";
import { FadeIn } from "@/components/fade-in";
import { RichText } from "@/components/rich-text";
import { SectionHeading } from "@/components/section-heading";
import type { Project } from "@/types/profile";

const linkClass =
  "text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent";

function ProjectLinks({ project }: { project: Project }) {
  const { live, repo } = project.links;
  if (!live && !repo) return null;
  return (
    <div className="mt-auto flex flex-wrap gap-4 pt-5">
      {live ? (
        <ExternalLink href={live} className={linkClass} label={`${project.name}: live site`}>
          Live
        </ExternalLink>
      ) : null}
      {repo ? (
        <ExternalLink href={repo} className={linkClass} label={`${project.name}: source on GitHub`}>
          GitHub
        </ExternalLink>
      ) : null}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-spotlight=""
      className="spotlight-card flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-fg/20"
    >
      <header>
        {project.organization ? (
          <p className="font-mono text-xs text-muted">{project.organization}</p>
        ) : null}
        <h3 className="mt-1 text-lg font-semibold text-fg">{project.name}</h3>
      </header>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
        <RichText text={project.summary} />
      </p>
      <dl className="mt-4 space-y-3 text-sm leading-relaxed">
        {project.impact ? (
          <div>
            <dt className="font-medium text-fg">Impact</dt>
            <dd className="text-muted">
              <RichText text={project.impact} />
            </dd>
          </div>
        ) : null}
        {project.role ? (
          <div>
            <dt className="font-medium text-fg">My role</dt>
            <dd className="text-muted">{project.role}</dd>
          </div>
        ) : null}
      </dl>
      <div className="mt-4">
        <BadgeList items={project.stack} label={`${project.name} tech stack`} />
      </div>
      <ProjectLinks project={project} />
    </article>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const professional = projects.filter((p) => p.category === "professional");
  const personal = projects.filter((p) => p.category !== "professional");

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20">
      <SectionHeading id="projects-title" eyebrow="Selected work" title="Projects" />
      <CardSpotlight />
      <ul className="grid gap-5 sm:grid-cols-2">
        {professional.map((project, i) => (
          <li key={project.id}>
            <FadeIn className="h-full" delay={(i % 2) * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          </li>
        ))}
      </ul>

      {personal.length > 0 ? (
        <>
          <h3 className="mt-16 mb-6 text-lg font-semibold text-fg">Side projects</h3>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personal.map((project) => (
              <li key={project.id}>
                <FadeIn className="h-full">
                  <article
                    data-spotlight=""
                    className="spotlight-card flex h-full flex-col rounded-2xl border border-line p-5"
                  >
                    <h4 className="font-semibold text-fg">{project.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      <RichText text={project.summary} />
                    </p>
                    <div className="mt-4">
                      <BadgeList items={project.stack} label={`${project.name} tech stack`} />
                    </div>
                    <ProjectLinks project={project} />
                  </article>
                </FadeIn>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}
