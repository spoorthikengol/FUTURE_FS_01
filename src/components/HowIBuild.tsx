import { buildPhilosophy } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function HowIBuild() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow="How I Build" title="A process, not a pile of tools." />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border dark:border-border-dark dark:bg-border-dark sm:grid-cols-2 lg:grid-cols-4">
          {buildPhilosophy.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08} className="bg-bg p-8 dark:bg-bg-dark">
              <span className="font-tag text-xs text-accent-ink">{item.step}</span>
              <h3 className="mt-4 font-display text-lg font-medium text-ink dark:text-ink-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
