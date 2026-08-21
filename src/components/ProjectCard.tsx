import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.article
      layout
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
  "group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 transition-colors duration-300 hover:border-accent/40 dark:border-border-dark dark:bg-surface-dark/60 dark:hover:border-accent/40 dark:hover:bg-surface-dark sm:p-10",
  featured && "sm:p-12"
)}
    >
      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: "left" }}
        className="absolute left-0 right-0 top-0 h-px bg-accent"
      />

      {/* Subtle hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
      />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
        <div>
          <motion.p
            className="font-tag text-xs uppercase tracking-[0.2em] text-accent-ink"
            whileHover={{ x: 3 }}
          >
            {project.category}
          </motion.p>

          {project.contextLabel && (
            <p className="mt-2 font-tag text-[11px] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
              {project.contextLabel}
            </p>
          )}
        </div>

        {project.links && project.links.length > 0 && (
  <div className="flex flex-wrap items-center gap-3">
    {project.links.map((link) => {
      const isLiveDemo = link.label.toLowerCase() === "live demo";

      return (
        <motion.a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            "group/link inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
            isLiveDemo
              ? "bg-ink text-bg shadow-sm hover:shadow-md dark:bg-ink-dark dark:text-bg-dark"
              : "border border-border text-muted hover:border-accent/40 hover:text-ink dark:border-border-dark dark:text-muted-dark dark:hover:text-ink-dark"
          )}
        >
          {link.label}

          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </motion.a>
      );
    })}
  </div>
)}
      </div>

      {/* Project title */}
      <motion.h3
        className={cn(
          "relative z-10 mt-5 font-display font-medium leading-tight tracking-tight text-ink dark:text-ink-dark",
          featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        )}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.25 }}
      >
        {project.headline}
      </motion.h3>

      {/* Summary */}
      <p className="relative z-10 mt-4 max-w-2xl text-[15px] leading-relaxed text-muted dark:text-muted-dark">
        {project.summary}
      </p>

      {/* Pipeline */}
{project.pipeline && project.pipeline.length > 0 && (
  <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2 text-xs text-muted dark:text-muted-dark">
    {project.pipeline.map((step, index) => (
      <motion.span
        key={step}
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: index * 0.05,
        }}
        className="flex items-center gap-2"
      >
        <span className="rounded-full border border-border px-3 py-1.5 font-tag transition-colors duration-300 hover:border-accent/40 dark:border-border-dark">
          {step}
        </span>

        {index < (project.pipeline?.length ?? 0) - 1 && (
          <span aria-hidden="true">→</span>
        )}
      </motion.span>
    ))}
  </div>
)}

      {/* Technology */}
      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {project.tech.map((technology) => (
          <motion.span
            key={technology}
            whileHover={{
              y: -3,
              scale: 1.04,
            }}
            transition={{
              duration: 0.2,
            }}
            className="rounded-full bg-bg px-3 py-1 font-tag text-[11px] text-muted transition-colors duration-300 hover:text-accent-ink dark:bg-bg-dark dark:text-muted-dark"
          >
            {technology}
          </motion.span>
        ))}
      </div>

      {/* Case study toggle */}
      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.97 }}
        className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-opacity hover:opacity-70 dark:text-ink-dark"
      >
        {open ? "Close Case Study" : "Explore Case Study"}

        <motion.span
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.button>

      {/* Expanded case study */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 overflow-hidden"
          >
            {/* Behind the Build */}
            <div className="mt-8 border-t border-border pt-8 dark:border-border-dark">
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
                  {project.caseStudy.slice(0, 4).map((section, index) => (
                    <motion.div
                      key={`behind-${section.heading}`}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      className="rounded-2xl border border-border bg-bg p-5 transition-colors duration-300 hover:border-accent/30 hover:shadow-md dark:border-border-dark dark:bg-bg-dark"
                    >
                      <p className="font-tag text-[10px] uppercase tracking-[0.14em] text-accent-ink">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h5 className="mt-3 text-sm font-medium text-ink dark:text-ink-dark">
                        {section.heading}
                      </h5>

                      <div className="mt-3 space-y-2">
                        {section.body.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-xs leading-relaxed text-muted dark:text-muted-dark"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Full case study */}
              {project.caseStudy.length > 4 && (
                <div className="grid gap-8 border-t border-border pt-8 dark:border-border-dark sm:grid-cols-2">
                  {project.caseStudy.slice(4).map((section, index) => (
                    <motion.div
                      key={section.heading}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.08,
                      }}
                    >
                      <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                        {String(index + 5).padStart(2, "0")} —{" "}
                        {section.heading}
                      </p>

                      {section.body.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}