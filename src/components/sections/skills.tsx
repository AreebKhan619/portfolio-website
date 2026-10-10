import { BadgeList } from "@/components/badge-list";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import type { SkillGroup } from "@/types/profile";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="band py-20 sm:py-28">
      <SectionHeading id="skills-title" eyebrow="Toolbox" title="Skills" />
      <FadeIn>
        {/* An inset grouped list, like Settings: hairlines start after the padding. */}
        <dl className="overflow-hidden rounded-tile bg-tile">
          {groups.map((group) => (
            <div
              key={group.category}
              className="relative grid gap-3 px-6 py-5 not-first:before:absolute not-first:before:inset-x-6 not-first:before:top-0 not-first:before:h-px not-first:before:bg-hairline sm:grid-cols-[12rem_1fr] sm:gap-6 sm:px-8 sm:py-6 sm:not-first:before:inset-x-8"
            >
              <dt className="text-body font-semibold text-fg sm:pt-1">{group.category}</dt>
              <dd>
                <BadgeList items={group.items} label={`${group.category} skills`} size="md" />
              </dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </section>
  );
}
