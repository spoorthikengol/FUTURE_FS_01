import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={cn(
        "group rounded-3xl border border-border bg-surface/60 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl dark:border-border-dark dark:bg-surface-dark/60 dark:hover:border-accent/40 sm:p-10",
        featured && "sm:p-12"
      )}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-tag text-xs uppercase tracking-[0.2em] text-accent-ink">
            {project.category}
          </p>

          {project.contextLabel && (
            <p className="mt-2 font-tag text-[11px] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
              {project.contextLabel}
            </p>
          )}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
              >
                {link.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Project title */}
      <h3
        className={cn(
          "mt-5 font-display font-medium leading-tight tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 dark:text-ink-dark",
          featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        )}
      >
        {project.headline}
      </h3>

      {/* Summary */}
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted dark:text-muted-dark">
        {project.summary}
      </p>

      {/* Pipeline */}
      {project.pipeline && project.pipeline.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted dark:text-muted-dark">
          {project.pipeline.map((step, index) => (
            <span
              key={step}
              className="flex items-center gap-2"
            >
              <span className="rounded-full border border-border px-3 py-1.5 font-tag transition-colors duration-300 group-hover:border-accent/30 dark:border-border-dark">
                {step}
              </span>

              {index < project.pipeline!.length - 1 && (
                <span aria-hidden="true">→</span>
              )}
            </span>
          ))}
        </div>
      )}

      {/* Technology */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-bg px-3 py-1 font-tag text-[11px] text-muted transition-transform duration-300 group-hover:-translate-y-0.5 dark:bg-bg-dark dark:text-muted-dark"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Case study toggle */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-opacity hover:opacity-70 dark:text-ink-dark"
      >
        {open ? "Close Case Study" : "Explore Case Study"}

        <ArrowDown
          size={15}
          className={cn(
            "transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Expanded case study */}
      {open && (
        <div className="mt-8 border-t border-border pt-8 dark:border-border-dark">
          {/* Behind the Build */}
          <div className="mb-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                  Behind the Build
                </p>

                <h4 className="mt-2 font-display text-xl font-medium text-ink dark:text-ink-dark">
                  How this project came together.
                </h4>
              </div>

              <span className="font-tag text-[10px] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
                Case Study
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.caseStudy
                .slice(0, 4)
                .map((section, index) => (
                  <div
                    key={`behind-${section.heading}`}
                    className="rounded-2xl border border-border bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-border-dark dark:bg-bg-dark"
                  >
                    <p className="font-tag text-[10px] uppercase tracking-[0.14em] text-accent-ink">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h5 className="mt-3 text-sm font-medium text-ink dark:text-ink-dark">
                      {section.heading}
                    </h5>

                    <div className="mt-3 space-y-2">
                      {section.body.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-xs leading-relaxed text-muted dark:text-muted-dark"
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Full case study */}
          {project.caseStudy.length > 4 && (
            <div className="grid gap-8 border-t border-border pt-8 dark:border-border-dark sm:grid-cols-2">
              {project.caseStudy.slice(4).map(
                (section, index) => (
                  <div key={section.heading}>
                    <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                      {String(index + 5).padStart(2, "0")} —{" "}
                      {section.heading}
                    </p>

                    {section.body.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark"
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}