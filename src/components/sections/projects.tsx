import { BadgeList } from "@/components/badge-list";
import { ExternalLink } from "@/components/external-link";
import { FadeIn } from "@/components/fade-in";
import { RichText } from "@/components/rich-text";
import { SectionHeading } from "@/components/section-heading";
import type { Project } from "@/types/profile";

const linkClass = "text-body text-link hover:underline hover:underline-offset-4";

function ProjectLinks({ project }: { project: Project }) {
  const { live, repo } = project.links;
  if (!live && !repo) return null;
  return (
    <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
      {live ? (
        <ExternalLink href={live} className={linkClass} label={`${project.name}: live site`}>
          Visit site
        </ExternalLink>
      ) : null}
      {repo ? (
        <ExternalLink href={repo} className={linkClass} label={`${project.name}: source on GitHub`}>
          View on GitHub
        </ExternalLink>
      ) : null}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-tile bg-tile p-7 sm:p-8">
      <header>
        {project.organization ? (
          <p className="text-sm font-semibold text-subtle">{project.organization}</p>
        ) : null}
        <h3 className="mt-1 text-2xl leading-tight font-semibold tracking-[-0.022em] text-fg">
          {project.name}
        </h3>
      </header>
      <p className="mt-3 leading-[1.47] text-muted">
        <RichText text={project.summary} />
      </p>
      <dl className="mt-5 space-y-4 text-callout leading-[1.47]">
        {project.impact ? (
          <div>
            <dt className="font-semibold text-fg">Impact</dt>
            <dd className="text-muted">
              <RichText text={project.impact} />
            </dd>
          </div>
        ) : null}
        {project.role ? (
          <div>
            <dt className="font-semibold text-fg">My role</dt>
            <dd className="text-muted">{project.role}</dd>
          </div>
        ) : null}
      </dl>
      <div className="mt-5">
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
    <section id="projects" aria-labelledby="projects-title" className="band py-20 sm:py-28">
      <SectionHeading id="projects-title" eyebrow="Selected work" title="Projects" />
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
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
          <h3 className="type-title mt-20 mb-8 text-fg">Side projects</h3>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {personal.map((project) => (
              <li key={project.id}>
                <FadeIn className="h-full">
                  <article className="flex h-full flex-col rounded-tile bg-tile p-6 sm:p-7">
                    <h4 className="text-[1.3125rem] leading-tight font-semibold tracking-[-0.018em] text-fg">
                      {project.name}
                    </h4>
                    <p className="mt-2 text-callout leading-[1.47] text-muted">
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
