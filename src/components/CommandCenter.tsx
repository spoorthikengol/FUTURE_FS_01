import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { currentlyLearning, toolGroups, interests } from "@/data/profile";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

const spring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 18,
};

export function CommandCenter() {
  return (
    <section id="command-center" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SectionHeading
            eyebrow="Command Center"
            title="Where my attention is right now."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ===================================================== */}
          {/* CURRENTLY WORKING */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.92,
              rotateX: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.01,
              transition: spring,
            }}
            className="group h-full lg:col-span-3"
            style={{ perspective: 1000 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-surface p-8 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl dark:bg-surface-dark sm:p-10">

              {/* Animated glow */}
              <motion.div
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Animated top line */}
              <motion.div
                className="absolute left-0 top-0 h-px bg-accent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              />

              <div className="relative">

                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <motion.span
                      className="absolute inset-0 rounded-full bg-accent"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>

                  <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                    Currently Working On
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35,
                  }}
                  className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1"
                >
                  <h3 className="font-display text-2xl font-medium text-ink dark:text-ink-dark sm:text-3xl">
                    Full Stack Web Development Internship
                  </h3>

                  <span className="text-sm text-muted dark:text-muted-dark">
                    Future Interns
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                  }}
                  className="mt-1 text-sm text-muted dark:text-muted-dark"
                >
                  August 2026 — September 2026
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.55,
                  }}
                  className="mt-4 max-w-2xl text-sm leading-relaxed text-muted dark:text-muted-dark"
                >
                  Selected for a Full Stack Web Development internship focused
                  on practical development tasks, project building and
                  real-world development experience.
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                  }}
                  className="mt-7 h-px w-full bg-border dark:bg-border-dark"
                />
              </div>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* CURRENTLY LEARNING */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 90, x: -40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: spring,
            }}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-border bg-bg p-7 transition-shadow duration-500 hover:shadow-xl dark:border-border-dark dark:bg-bg-dark">

              <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                Currently Learning
              </p>

              <ul className="mt-5 space-y-3">
                {currentlyLearning.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + index * 0.12,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className="flex items-center gap-3 text-sm text-muted dark:text-muted-dark"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        delay: 0.5 + index * 0.12,
                      }}
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />

                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* CORE FOCUS */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 90, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: spring,
            }}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-border bg-bg p-7 transition-shadow duration-500 hover:shadow-xl dark:border-border-dark dark:bg-bg-dark">

              <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                Core Focus
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 14,
                      delay: 0.45 + index * 0.08,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    className="cursor-default rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent-ink dark:border-border-dark dark:text-muted-dark"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* STACK */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 90, x: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: spring,
            }}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-border bg-bg p-7 transition-shadow duration-500 hover:shadow-xl dark:border-border-dark dark:bg-bg-dark">

              <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                Stack
              </p>

              <div className="mt-5 space-y-3">
                {toolGroups.map((group, index) => (
                  <motion.p
                    key={group.label}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + index * 0.1,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="text-sm leading-relaxed text-muted dark:text-muted-dark"
                  >
                    <span className="font-medium text-ink dark:text-ink-dark">
                      {group.label}:
                    </span>{" "}
                    {group.items.join(", ")}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================== */}
        {/* DIRECTION */}
        {/* ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -4,
            scale: 1.01,
          }}
          className="mt-6"
        >
          <div className="group flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-2xl border border-border bg-surface px-6 py-5 transition-shadow duration-500 hover:shadow-xl dark:border-border-dark dark:bg-surface-dark">

            {/* Animated accent */}
            <motion.div
              className="absolute"
              initial={{ x: "-100%" }}
              whileInView={{ x: "200%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />

            <p className="relative max-w-xl text-sm text-muted dark:text-muted-dark">
              <span className="text-ink dark:text-ink-dark">
                {site.status}.
              </span>{" "}
              {site.subtagline}
            </p>

            <a
              href="#contact"
              className="group/link relative inline-flex shrink-0 items-center gap-1 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:opacity-70 dark:text-ink-dark"
            >
              Let's Connect

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}