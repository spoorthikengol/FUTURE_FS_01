import { ArrowUpRight } from "lucide-react";
import { currentlyLearning, toolGroups, interests } from "@/data/profile";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function CommandCenter() {
  return (
    <section id="command-center" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Command Center"
          title="Where my attention is right now."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Currently Working */}
          <Reveal className="h-full lg:col-span-3">
            <div className="rounded-3xl border border-border bg-surface p-8 dark:border-border-dark dark:bg-surface-dark sm:p-10">
              <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                Currently Working On
              </p>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl font-medium text-ink dark:text-ink-dark sm:text-3xl">
                  Full Stack Web Development Internship
                </h3>

                <span className="text-sm text-muted dark:text-muted-dark">
                  Future Interns
                </span>
              </div>

              <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                August 2026 — September 2026
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted dark:text-muted-dark">
                Selected for a Full Stack Web Development internship focused
                on practical development tasks, project building and real-world
                development experience.
              </p>
            </div>
          </Reveal>

          {/* Currently Learning */}
          <Reveal delay={0.06} className="h-full">
            <div className="h-full rounded-3xl border border-border bg-bg p-7 dark:border-border-dark dark:bg-bg-dark">
              <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                Currently Learning
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-muted dark:text-muted-dark">
                {currentlyLearning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Core Focus */}
          <Reveal delay={0.12} className="h-full">
            <div className="h-full rounded-3xl border border-border bg-bg p-7 dark:border-border-dark dark:bg-bg-dark">
              <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                Core Focus
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-dark">
                {interests.join(" · ")}
              </p>
            </div>
          </Reveal>

          {/* Stack */}
          <Reveal delay={0.18} className="h-full">
            <div className="h-full rounded-3xl border border-border bg-bg p-7 dark:border-border-dark dark:bg-bg-dark">
              <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                Stack
              </p>

              <div className="mt-4 space-y-2.5">
                {toolGroups.map((group) => (
                  <p
                    key={group.label}
                    className="text-sm leading-relaxed text-muted dark:text-muted-dark"
                  >
                    <span className="text-ink dark:text-ink-dark">
                      {group.label}:
                    </span>{" "}
                    {group.items.join(", ")}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Direction */}
        <Reveal delay={0.24} className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-6 py-5 dark:border-border-dark dark:bg-surface-dark">
            <p className="max-w-xl text-sm text-muted dark:text-muted-dark">
              <span className="text-ink dark:text-ink-dark">
                {site.status}.
              </span>{" "}
              {site.subtagline}
            </p>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-ink transition-opacity hover:opacity-70 dark:text-ink-dark"
            >
              Let's Connect <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}