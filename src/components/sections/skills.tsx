import { BadgeList } from "@/components/badge-list";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import type { SkillGroup } from "@/types/profile";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20">
      <SectionHeading id="skills-title" eyebrow="Toolbox" title="Skills" />
      <FadeIn>
        <dl className="divide-y divide-line rounded-2xl border border-line bg-surface">
          {groups.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 p-5 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:p-6"
            >
              <dt className="text-sm font-semibold text-fg sm:pt-1">{group.category}</dt>
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
