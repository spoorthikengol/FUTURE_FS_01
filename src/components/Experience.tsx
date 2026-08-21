import { experience } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I'm building."
        />

        <div className="mt-14 flex flex-col gap-px overflow-hidden rounded-3xl border border-border bg-border dark:border-border-dark dark:bg-border-dark">
          {experience.map((entry, i) => (
            <Reveal
              key={entry.org}
              delay={i * 0.08}
              className="flex flex-col gap-4 bg-bg p-8 dark:bg-bg-dark sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-medium text-ink dark:text-ink-dark">
                  {entry.role}
                </h3>

                <p className="mt-1 text-sm text-accent-ink">
                  {entry.org}
                </p>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {entry.description}
                </p>
              </div>

              <span className="shrink-0 font-tag text-xs uppercase tracking-[0.1em] text-muted dark:text-muted-dark">
                {entry.period}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}