import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Reveal>
      <article
        className={cn(
          "rounded-3xl border border-border bg-surface/60 p-8 dark:border-border-dark dark:bg-surface-dark/60 sm:p-10",
          featured && "sm:p-12"
        )}
      >
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
          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
            >
              {link.label} <ArrowUpRight size={13} />
            </a>
          ))}
        </div>

        <h3
          className={cn(
            "mt-5 font-display font-medium leading-tight tracking-tight text-ink dark:text-ink-dark",
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          )}
        >
          {project.headline}
        </h3>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted dark:text-muted-dark">
          {project.summary}
        </p>

        {project.pipeline && (
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted dark:text-muted-dark">
            {project.pipeline.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-border px-3 py-1.5 font-tag dark:border-border-dark">
                  {step}
                </span>
                {i < project.pipeline!.length - 1 && <span aria-hidden>→</span>}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-bg px-3 py-1 font-tag text-[11px] text-muted dark:bg-bg-dark dark:text-muted-dark"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-opacity hover:opacity-70 dark:text-ink-dark"
        >
          {open ? "Close Case Study" : "Explore Case Study"}
          <ArrowDown
            size={15}
            className={cn("transition-transform", open && "rotate-180")}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid gap-8 border-t border-border pt-8 dark:border-border-dark sm:grid-cols-2">
                {project.caseStudy.map((section, i) => (
                  <div key={section.heading}>
                    <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                      {String(i + 1).padStart(2, "0")} — {section.heading}
                    </p>
                    {section.body.map((paragraph, j) => (
                      <p
                        key={j}
                        className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}
