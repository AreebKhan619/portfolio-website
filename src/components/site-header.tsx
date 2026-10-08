import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import type { PaletteData } from "@/lib/commands";

interface SiteHeaderProps {
  name: string;
  palette: PaletteData;
}

export function SiteHeader({ name, palette }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2 px-5 sm:gap-3 sm:px-8">
        <a href="#main" className="mr-auto shrink-0 font-semibold tracking-tight text-fg">
          {name}
        </a>
        <nav aria-label="Primary" className="min-w-0 overflow-x-auto">
          <ul className="flex items-center gap-1 text-sm whitespace-nowrap">
            {palette.sections.map((item) => (
              <li key={item.id} className={item.id === "contact" ? "" : "hidden md:block"}>
                <a
                  href={`#${item.id}`}
                  className="rounded-md px-2.5 py-1.5 text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <CommandMenu palette={palette} />
        <ThemeToggle />
      </div>
    </header>
  );
}
