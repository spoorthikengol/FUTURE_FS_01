import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  X,
} from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface Command {
  id: string;
  label: string;
  description: string;
  group: "Navigation" | "Projects" | "Assistant";
  action: () => void;
}

interface CommandCenterProps {
  onAskAI?: () => void;
}

export function CommandCenter({ onAskAI }: CommandCenterProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);

      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [open]);

  const navigationCommands: Command[] = [
    {
      id: "work",
      label: "Work",
      description: "View selected projects",
      group: "Navigation",
      action: () => scrollToSection("work"),
    },
    {
      id: "about",
      label: "About",
      description: "Learn more about Spoorthi",
      group: "Navigation",
      action: () => scrollToSection("about"),
    },
    {
      id: "experience",
      label: "Experience",
      description: "View experience",
      group: "Navigation",
      action: () => scrollToSection("experience"),
    },
    {
      id: "contact",
      label: "Contact",
      description: "Start a conversation",
      group: "Navigation",
      action: () => scrollToSection("contact"),
    },
  ];

  const projectCommands: Command[] = projects.map((project) => ({
    id: project.slug,
    label: project.name,
    description: project.headline,
    group: "Projects",
    action: () => {
      scrollToSection("work");

      window.setTimeout(() => {
        const element = document.querySelector(
          `[data-project="${project.slug}"]`
        );

        if (element instanceof HTMLElement) {
          element.click();
        }
      }, 300);
    },
  }));

  const assistantCommand: Command = {
    id: "ask-ai",
    label: "Ask Spoorthi AI",
    description: "Ask questions about Spoorthi",
    group: "Assistant",
    action: () => {
      if (onAskAI) {
        onAskAI();
        return;
      }

      const button = Array.from(
        document.querySelectorAll("button")
      ).find((element) =>
        element.textContent?.includes("Ask Spoorthi AI")
      );

      if (button instanceof HTMLElement) {
        button.click();
      }
    },
  };

  const commands = [
    ...navigationCommands,
    ...projectCommands,
    assistantCommand,
  ];

  const filteredCommands = commands.filter((command) => {
    const searchableText =
      `${command.label} ${command.description} ${command.group}`.toLowerCase();

    return searchableText.includes(query.toLowerCase().trim());
  });

  useEffect(() => {
    setSelected(0);
  }, [query]);

  function executeSelected() {
    const command = filteredCommands[selected];

    if (!command) {
      return;
    }

    setOpen(false);
    command.action();
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelected((current) =>
        filteredCommands.length === 0
          ? 0
          : (current + 1) % filteredCommands.length
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelected((current) =>
        filteredCommands.length === 0
          ? 0
          : (current - 1 + filteredCommands.length) %
            filteredCommands.length
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();
      executeSelected();
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command Center"
            className="fixed left-1/2 top-[12vh] z-[90] w-[min(640px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-3xl border border-border bg-bg shadow-2xl dark:border-border-dark dark:bg-bg-dark"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-5 py-4 dark:border-border-dark">
              <Search
                size={20}
                className="shrink-0 text-muted dark:text-muted-dark"
              />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search portfolio..."
                className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted dark:text-ink-dark dark:placeholder:text-muted-dark"
              />

              <button
                onClick={() => setOpen(false)}
                aria-label="Close command center"
                className="rounded-lg p-1.5 text-muted hover:bg-surface dark:text-muted-dark dark:hover:bg-surface-dark"
              >
                <X size={17} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-3">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-12 text-center">
                  <p className="text-sm font-medium text-ink dark:text-ink-dark">
                    No commands found
                  </p>
                  <p className="mt-1 text-xs text-muted dark:text-muted-dark">
                    Try searching for a project or section.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {(["Navigation", "Projects", "Assistant"] as const).map(
                    (group) => {
                      const groupCommands = filteredCommands.filter(
                        (command) => command.group === group
                      );

                      if (groupCommands.length === 0) {
                        return null;
                      }

                      return (
                        <div key={group}>
                          <p className="px-3 pb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                            {group}
                          </p>

                          <div className="space-y-1">
                            {groupCommands.map((command) => {
                              const index = filteredCommands.indexOf(command);
                              const active = index === selected;

                              return (
                                <button
                                  key={command.id}
                                  onMouseEnter={() => setSelected(index)}
                                  onClick={command.action}
                                  className={cn(
                                    "flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-colors",
                                    active
                                      ? "bg-surface dark:bg-surface-dark"
                                      : "hover:bg-surface/70 dark:hover:bg-surface-dark/70"
                                  )}
                                >
                                  <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-ink dark:text-ink-dark">
                                      {command.label}
                                    </p>

                                    <p className="mt-0.5 truncate text-xs text-muted dark:text-muted-dark">
                                      {command.description}
                                    </p>
                                  </div>

                                  {active && (
                                    <CornerDownLeft
                                      size={15}
                                      className="ml-3 shrink-0 text-muted dark:text-muted-dark"
                                    />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 border-t border-border px-5 py-3 text-[11px] text-muted dark:border-border-dark dark:text-muted-dark">
              <span className="flex items-center gap-1">
                <ArrowUp size={12} />
                <ArrowDown size={12} />
                Navigate
              </span>

              <span className="flex items-center gap-1">
                <CornerDownLeft size={12} />
                Select
              </span>

              <span className="ml-auto">Esc to close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}