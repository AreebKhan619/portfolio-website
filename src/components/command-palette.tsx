"use client";

import { useTheme } from "next-themes";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import type { PaletteData } from "@/lib/commands";
import { centerOf, switchTheme } from "@/lib/theme-transition";

type GroupKey = keyof PaletteData["copy"]["groups"];
type IconName = "section" | "copy" | "check" | "download" | "theme" | "terminal" | "external";

interface Command {
  id: string;
  group: GroupKey;
  label: string;
  keywords: string;
  icon: IconName;
  /** Global keyboard shortcut, shown at the end of the row. */
  shortcut?: string;
  run: () => void;
}

export interface CommandPaletteProps {
  data: PaletteData;
  /** `restoreFocus: false` when the command moved focus elsewhere (e.g. a section). */
  onClose: (restoreFocus?: boolean) => void;
  /** Swaps the palette for the terminal overlay. */
  onOpenTerminal: () => void;
}

const GROUP_ORDER: GroupKey[] = ["navigate", "actions", "links"];

const ICONS: Record<IconName, ReactNode> = {
  section: <path d="M3 8h10M9 4l4 4-4 4" />,
  copy: (
    <>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
      <path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" />
    </>
  ),
  check: <path d="m3.5 8.5 3 3 6-7" />,
  download: <path d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10" />,
  theme: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 2.5v11a5.5 5.5 0 0 0 0-11Z" fill="currentColor" />
    </>
  ),
  terminal: <path d="m3 4.5 3.5 3.5L3 11.5M8.5 12H13" />,
  external: <path d="M6 3.5H3.5v9h9V10M9 3h4v4M13 3 7.5 8.5" />,
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function matches(command: Command, query: string): boolean {
  const haystack = `${command.label} ${command.keywords}`.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => haystack.includes(token));
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * ⌘K palette: a modal dialog containing a combobox (the input) that controls a
 * listbox of commands. Focus stays on the input (Tab is trapped), arrows move
 * the active option, Enter runs it, Esc or a backdrop click closes.
 */
export default function CommandPalette({ data, onClose, onOpenTerminal }: CommandPaletteProps) {
  const { copy } = data;
  const { resolvedTheme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const baseId = useId();
  const listId = `${baseId}-list`;
  const titleId = `${baseId}-title`;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // After "Copied!" has been shown (and announced), close the palette.
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => onClose(), 1200);
    return () => window.clearTimeout(timer);
  }, [copied, onClose]);

  const commands = useMemo<Command[]>(() => {
    const goTo = (id: string) => {
      onClose(false);
      requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (!target) return;
        target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    };

    const list: Command[] = data.sections.map((section) => ({
      id: `go-${section.id}`,
      group: "navigate",
      label: section.label,
      keywords: `${copy.groups.navigate} section ${section.id}`,
      icon: "section",
      run: () => goTo(section.id),
    }));

    list.push(
      {
        id: "copy-email",
        group: "actions",
        label: copy.actions.copyEmail,
        keywords: `email mail contact ${data.email}`,
        icon: "copy",
        run: () => {
          navigator.clipboard
            .writeText(data.email)
            .then(() => setCopied(true))
            .catch(() => {
              onClose();
              window.location.href = `mailto:${data.email}`;
            });
        },
      },
      {
        id: "download-resume",
        group: "actions",
        label: copy.actions.downloadResume,
        keywords: "resume cv pdf download",
        icon: "download",
        run: () => {
          const link = document.createElement("a");
          link.href = data.resume.url;
          link.download = data.resume.fileName;
          document.body.appendChild(link);
          link.click();
          link.remove();
          onClose();
        },
      },
      {
        id: "toggle-theme",
        group: "actions",
        label: copy.actions.toggleTheme,
        keywords: "theme dark light mode appearance",
        icon: "theme",
        run: () => {
          const next = resolvedTheme === "dark" ? "light" : "dark";
          onClose();
          requestAnimationFrame(() => {
            const toggle = document.querySelector("[data-theme-toggle]");
            switchTheme(next, setTheme, toggle ? centerOf(toggle) : undefined);
          });
        },
      },
    );

    list.push({
      id: "open-terminal",
      group: "actions",
      label: copy.actions.openTerminal,
      keywords: "terminal shell console cli",
      icon: "terminal",
      shortcut: "`",
      run: onOpenTerminal,
    });

    for (const social of data.socials) {
      list.push({
        id: `social-${social.label}`,
        group: "links",
        label: copy.actions.openSocial.replace("{label}", social.label),
        keywords: `${social.label} profile link ${social.url}`,
        icon: "external",
        run: () => {
          window.open(social.url, "_blank", "noopener,noreferrer");
          onClose();
        },
      });
    }

    return list;
  }, [data, copy, onClose, onOpenTerminal, resolvedTheme, setTheme]);

  const filtered = useMemo(
    () =>
      GROUP_ORDER.flatMap((group) =>
        commands.filter((command) => command.group === group && matches(command, query)),
      ),
    [commands, query],
  );

  const activeIndex = filtered.length === 0 ? -1 : Math.min(active, filtered.length - 1);
  const activeCommand = activeIndex >= 0 ? filtered[activeIndex] : undefined;
  const optionId = (command: Command) => `${baseId}-${command.id}`;

  useEffect(() => {
    if (!activeCommand) return;
    document.getElementById(`${baseId}-${activeCommand.id}`)?.scrollIntoView({ block: "nearest" });
  }, [activeCommand, baseId]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        onClose();
        break;
      case "Tab":
        // Focus trap: the input is the dialog's only focus stop.
        event.preventDefault();
        inputRef.current?.focus();
        break;
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        if (filtered.length === 0) break;
        const step = event.key === "ArrowDown" ? 1 : -1;
        setActive((activeIndex + step + filtered.length) % filtered.length);
        break;
      }
      case "Home":
      case "End":
        if (filtered.length === 0) break;
        event.preventDefault();
        setActive(event.key === "Home" ? 0 : filtered.length - 1);
        break;
      case "Enter":
        event.preventDefault();
        activeCommand?.run();
        break;
    }
  };

  const groups = GROUP_ORDER.map((group) => ({
    group,
    items: filtered.filter((command) => command.group === group),
  })).filter(({ items }) => items.length > 0);

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]">
      <div
        aria-hidden="true"
        className="cmdk-backdrop absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onMouseDown={() => onClose()}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={onKeyDown}
        onMouseDown={(event) => {
          // Keep focus on the input when clicking non-focusable parts.
          if (event.target !== inputRef.current) event.preventDefault();
        }}
        className="cmdk-panel relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface text-fg shadow-2xl shadow-black/20"
      >
        <h2 id={titleId} className="sr-only">
          {copy.title}
        </h2>
        <div className="flex items-center gap-3 border-b border-line px-4">
          <svg viewBox="0 0 16 16" className="size-4 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="7" cy="7" r="4.5" />
            <path d="m10.5 10.5 3 3" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={activeCommand ? optionId(activeCommand) : undefined}
            aria-label={copy.placeholder}
            placeholder={copy.placeholder}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            className="h-14 w-full min-w-0 bg-transparent text-base text-fg outline-none placeholder:text-muted"
          />
          <kbd className="hidden rounded-md border border-line px-1.5 py-0.5 font-mono text-[0.65rem] text-muted sm:inline">
            Esc
          </kbd>
        </div>

        <div
          role="listbox"
          id={listId}
          aria-label={copy.title}
          className="max-h-[min(55vh,24rem)] overflow-y-auto overscroll-contain p-2"
        >
          {groups.map(({ group, items }) => (
            <div key={group} role="group" aria-labelledby={`${baseId}-group-${group}`} className="py-1">
              <div
                id={`${baseId}-group-${group}`}
                role="presentation"
                className="px-3 pt-2 pb-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted"
              >
                {copy.groups[group]}
              </div>
              {items.map((command) => {
                const index = filtered.indexOf(command);
                const isCopied = copied && command.id === "copy-email";
                return (
                  <div
                    key={command.id}
                    id={optionId(command)}
                    role="option"
                    aria-selected={index === activeIndex}
                    onMouseMove={() => index !== activeIndex && setActive(index)}
                    onClick={() => command.run()}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted aria-selected:bg-accent-soft aria-selected:text-fg"
                  >
                    <Icon name={isCopied ? "check" : command.icon} />
                    <span className={`truncate ${isCopied ? "font-medium text-accent" : ""}`}>
                      {isCopied ? copy.actions.copied : command.label}
                    </span>
                    {command.shortcut ? (
                      <kbd
                        aria-hidden="true"
                        className="ml-auto rounded-md border border-line px-1.5 font-mono text-[0.7rem] text-muted"
                      >
                        {command.shortcut}
                      </kbd>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="px-4 pt-2 pb-8 text-center text-sm text-muted">{copy.empty}</p>
        ) : null}

        <div
          aria-hidden="true"
          className="hidden items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[0.65rem] text-muted sm:flex"
        >
          <span>↑↓ {copy.hints.navigate}</span>
          <span>↵ {copy.hints.select}</span>
          <span>esc {copy.hints.close}</span>
        </div>
        <p role="status" aria-live="polite" className="sr-only">
          {copied ? copy.actions.copiedAnnouncement : ""}
        </p>
      </div>
    </div>,
    document.body,
  );
}
