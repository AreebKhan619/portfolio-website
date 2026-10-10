interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
}

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="type-eyebrow text-accent">{eyebrow}</p>
      <h2 id={id} className="type-headline mt-2 text-fg">
        {title}
      </h2>
    </div>
  );
}
