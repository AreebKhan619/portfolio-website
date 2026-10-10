import { CommandMenu } from "@/components/command-menu";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import type { PaletteData, TerminalData } from "@/lib/commands";

interface SiteHeaderProps {
  name: string;
  palette: PaletteData;
  terminal: TerminalData;
}

export function SiteHeader({ name, palette, terminal }: SiteHeaderProps) {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-1 px-5 sm:px-8">
        <a
          href="#main"
          className="mr-auto shrink-0 text-callout font-semibold tracking-[-0.016em] text-fg"
        >
          {name}
        </a>
        <nav aria-label="Primary" className="hidden min-w-0 md:block">
          <ul className="flex items-center text-footnote whitespace-nowrap">
            {palette.sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block px-2.5 py-1.5 text-fg/75 transition-colors hover:text-fg active:text-fg/50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span aria-hidden="true" className="mx-1 hidden h-4 w-px bg-hairline md:block" />
        <CommandMenu palette={palette} terminal={terminal} />
        <ThemeToggle />
        <MobileNav sections={palette.sections} />
      </div>
    </header>
  );
}
