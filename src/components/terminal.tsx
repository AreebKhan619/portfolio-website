"use client";

import { useTheme } from "next-themes";
import {
  Fragment,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import type { TerminalData } from "@/lib/commands";
import { centerOf, switchTheme } from "@/lib/theme-transition";
import type { TerminalCommand } from "@/types/profile";

interface Entry {
  id: number;
  /** The command as typed, or null for system lines (welcome). */
  input: string | null;
  lines: string[];
}

export interface TerminalProps {
  data: TerminalData;
  onClose: () => void;
}

const URL_PATTERN = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.]+)/g;

/** Turns URLs and email addresses in an output line into links. */
function linkify(line: string): ReactNode {
  return line.split(URL_PATTERN).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    const href = part.includes("@") && !part.startsWith("http") ? `mailto:${part}` : part;
    return (
      <a
        key={i}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
      >
        {part}
      </a>
    );
  });
}

/**
 * Terminal easter egg, answered entirely from profile data.
 * A modal dialog; output is a polite live log, the input is labelled, ↑/↓
 * walk the command history, Esc closes, Tab cycles input ↔ close button.
 */
export default function Terminal({ data, onClose }: TerminalProps) {
  const { copy, output, resume } = data;
  const { resolvedTheme, setTheme } = useTheme();
  const [entries, setEntries] = useState<Entry[]>(() => [
    { id: 0, input: null, lines: copy.welcome },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const nextId = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const baseId = useId();
  const titleId = `${baseId}-title`;
  const inputId = `${baseId}-input`;

  const names = Object.keys(copy.commands) as TerminalCommand[];
  const width = Math.max(...names.map((name) => name.length)) + 3;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [entries]);

  const respond = (raw: string): string[] | null => {
    const command = raw.trim().toLowerCase();
    if (command === "") return [];
    switch (command as TerminalCommand) {
      case "help":
        return names.map((name) => `${name.padEnd(width)}${copy.commands[name]}`);
      case "whoami":
      case "experience":
      case "skills":
      case "projects":
      case "contact":
        return output[command as keyof TerminalData["output"]];
      case "resume": {
        const link = document.createElement("a");
        link.href = resume.url;
        link.download = resume.fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        return [copy.responses.resume.replace("{fileName}", resume.fileName)];
      }
      case "theme": {
        const next = resolvedTheme === "dark" ? "light" : "dark";
        const toggle = document.querySelector("[data-theme-toggle]");
        switchTheme(next, setTheme, toggle ? centerOf(toggle) : undefined);
        return [copy.responses.theme.replace("{theme}", next)];
      }
      case "clear":
      case "exit":
        return null;
      default:
        return [copy.notFound.replace("{command}", raw.trim())];
    }
  };

  const submit = () => {
    const command = value.trim().toLowerCase();
    if (value.trim()) setHistory((prev) => [...prev, value.trim()]);
    setCursor(null);
    setValue("");

    if (command === "exit") {
      onClose();
      return;
    }
    if (command === "clear") {
      setEntries([]);
      return;
    }
    const lines = respond(value) ?? [];
    const id = nextId.current++;
    setEntries((prev) => [...prev, { id, input: value, lines }]);
  };

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      if (history.length === 0) return;
      event.preventDefault();
      const up = event.key === "ArrowUp";
      const start = cursor ?? history.length;
      const next = up ? Math.max(0, start - 1) : start + 1;
      if (next >= history.length) {
        setCursor(null);
        setValue("");
      } else {
        setCursor(next);
        setValue(history[next]);
      }
    }
  };

  const onDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key === "Tab") {
      // Focus trap between the two focus stops.
      event.preventDefault();
      const target = document.activeElement === inputRef.current ? closeRef.current : inputRef.current;
      target?.focus();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        aria-hidden="true"
        className="cmdk-backdrop absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        onMouseDown={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={onDialogKeyDown}
        className="cmdk-panel relative flex h-[min(75vh,34rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-surface font-mono text-[0.8rem] leading-relaxed text-fg shadow-2xl shadow-black/30 sm:text-sm"
      >
        <div className="flex items-center gap-2 border-b border-line bg-bg/60 px-4 py-2.5">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </span>
          <h2 id={titleId} className="mx-auto truncate text-xs text-muted">
            {copy.title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={copy.closeLabel}
            className="inline-flex size-6 items-center justify-center rounded-md text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-accent"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="m4 4 8 8M12 4l-8 8" />
            </svg>
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto overscroll-contain px-4 py-3"
          onMouseUp={() => {
            if (!window.getSelection()?.toString()) inputRef.current?.focus();
          }}
        >
          <div role="log" aria-live="polite" aria-relevant="additions">
            {entries.map((entry) => (
              <div key={entry.id} className="mb-2">
                {entry.input !== null ? (
                  <p className="break-words">
                    <span className="text-accent">{copy.prompt}</span> {entry.input}
                  </p>
                ) : null}
                {entry.lines.map((line, i) => (
                  <p key={i} className="min-h-[1lh] break-words whitespace-pre-wrap text-muted">
                    {linkify(line)}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-2">
            <label htmlFor={inputId} className="sr-only">
              {copy.inputLabel}
            </label>
            <span aria-hidden="true" className="shrink-0 text-accent">
              {copy.prompt}
            </span>
            <input
              ref={inputRef}
              id={inputId}
              type="text"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                setCursor(null);
              }}
              onKeyDown={onInputKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
              className="min-w-0 flex-1 bg-transparent text-base text-fg caret-accent outline-none sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
