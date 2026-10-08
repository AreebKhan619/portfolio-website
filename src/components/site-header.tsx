import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-5 sm:px-8">
        <a href="#main" className="shrink-0 font-semibold tracking-tight text-fg">
          {name}
        </a>
        <nav aria-label="Primary" className="ml-auto min-w-0 overflow-x-auto">
          <ul className="flex items-center gap-1 text-sm whitespace-nowrap">
            {NAV.map((item) => (
              <li key={item.href} className={item.href === "#contact" ? "" : "hidden sm:block"}>
                <a
                  href={item.href}
                  className="rounded-md px-2.5 py-1.5 text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
