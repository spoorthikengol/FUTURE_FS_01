import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? {}
    : { opacity: 0, y: 16 };

  const animate = shouldReduceMotion
    ? {}
    : { opacity: 1, y: 0 };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-36 sm:pt-44"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT — INTRO */}
        <div>
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-tag text-xs text-muted dark:border-border-dark dark:text-muted-dark"
          >
            <span className="relative flex h-1.5 w-1.5">
              {!shouldReduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            {site.status}
          </motion.div>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 font-tag text-xs uppercase tracking-[0.2em] text-muted dark:text-muted-dark"
          >
            {site.name} — {site.role}
          </motion.p>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink dark:text-ink-dark sm:text-5xl lg:text-6xl"
          >
            {site.tagline}
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted dark:text-muted-dark"
          >
            {site.subtagline}
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 dark:bg-ink-dark dark:text-bg-dark"
            >
              Explore Work
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink dark:border-border-dark dark:text-ink-dark dark:hover:border-ink-dark"
            >
              Let's Connect
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — PROFESSIONAL PHOTO */}
        <motion.div
          initial={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                  x: 60,
                  scale: 0.9,
                }
          }
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }
          }
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Animated outer glow */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-accent/20 blur-3xl"
            />
          )}

          {/* Floating image container */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -12,
                    scale: 1.025,
                  }
            }
            className="relative"
          >
            {/* Glow ring */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [0, 360],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
              className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r from-accent via-transparent to-accent opacity-70"
            />

            {/* Photo card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl dark:border-border-dark dark:bg-surface-dark">

              {/* Animated top accent */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut",
                }}
                className="absolute left-0 right-0 top-0 z-20 h-px bg-accent"
              />

              {/* Image */}
              <motion.img
                src="/spoorthi.jpg"
                alt="Spoorthi K P"
                loading="eager"
                className="block h-auto w-full object-cover"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                      }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />

              {/* Bottom cinematic overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Corner accent */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: [0.3, 1, 0.3],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-accent shadow-[0_0_15px_currentColor]"
              />
            </div>
          </motion.div>

          {/* Professional label */}
          <motion.div
            initial={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.6,
              delay: 1.1,
            }}
            className="mt-5 text-center font-tag text-[10px] uppercase tracking-[0.18em] text-muted dark:text-muted-dark"
          >
            AI × Software × Products
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}