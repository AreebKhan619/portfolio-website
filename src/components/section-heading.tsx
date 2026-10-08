interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
}

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
