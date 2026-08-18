import { toolGroups, currentlyLearning } from "@/data/profile";
import { flagshipProject } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function ToolsAndFocus() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="Tools I Build With" title="The stack, without the noise." />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {toolGroups.map((group, i) => (
                <Reveal key={group.label} delay={i * 0.06}>
                  <p className="font-tag text-xs uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
                    {group.label}
                  </p>
                  <p className="mt-3 text-base text-ink dark:text-ink-dark">
                    {group.items.join(" · ")}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-border bg-surface p-8 dark:border-border-dark dark:bg-surface-dark">
              <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                Currently Building
              </p>
              <p className="mt-3 font-display text-xl font-medium text-ink dark:text-ink-dark">
                {flagshipProject.name}
              </p>
              <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                Status: Building / Exploring
              </p>

              <div className="mt-8 border-t border-border pt-8 dark:border-border-dark">
                <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                  Currently Learning
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted dark:text-muted-dark">
                  {currentlyLearning.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
