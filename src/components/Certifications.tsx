import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Animated heading */}
        <motion.div
          initial={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SectionHeading
            eyebrow="Certifications"
            title="Proof of learning. Built through practice."
          />
        </motion.div>

        {/* Certificate cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.title}-${cert.issuer}`}
              initial={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: 50,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                    }
              }
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/40 dark:border-border-dark dark:bg-surface-dark sm:p-8"
            >
              {/* Top accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scaleX: 1,
                      }
                }
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                style={{
                  transformOrigin: "left",
                }}
                className="absolute left-0 right-0 top-0 h-px bg-accent"
              />

              {/* Icon + Date */}
              <div className="flex items-start justify-between gap-4">
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotate: 8,
                          scale: 1.08,
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg text-accent-ink dark:border-border-dark dark:bg-bg-dark"
                >
                  <Award size={20} />
                </motion.div>

                <span className="font-tag text-[10px] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
                  {cert.date}
                </span>
              </div>

              {/* Certificate information */}
              <div className="mt-6">
                <h3 className="font-display text-xl font-medium leading-tight text-ink dark:text-ink-dark">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {cert.issuer}
                </p>
              </div>

              {/* View Certificate */}
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink dark:border-border-dark dark:text-ink-dark"
              >
                View Certificate

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}