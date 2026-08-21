import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? {}
    : {
        opacity: 0,
        y: 16,
      };

  const animate = shouldReduceMotion
    ? {}
    : {
        opacity: 1,
        y: 0,
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-32 sm:pt-44"
    >
      {/* Background atmosphere */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{
              opacity: [0.12, 0.28, 0.12],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <motion.div
            animate={{
              opacity: [0.06, 0.14, 0.06],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[4%] top-[40%] h-64 w-64 rounded-full bg-accent/5 blur-3xl"
          />
        </>
      )}

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:gap-14 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-16">
        {/* =========================
            LEFT — HERO CONTENT
        ========================== */}
        <div>
          {/* Availability */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-tag text-[10px] text-muted dark:border-border-dark dark:text-muted-dark sm:text-[11px]"
          >
            <span className="relative flex h-1.5 w-1.5">
              {!shouldReduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              )}

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            {site.status}
          </motion.div>

          {/* Identity */}
          <motion.p
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
            className="mt-6 font-tag text-[10px] uppercase tracking-[0.16em] text-muted dark:text-muted-dark sm:mt-8 sm:text-xs sm:tracking-[0.22em]"
          >
            AI × Intelligent Systems × Full-Stack
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mt-3 font-display text-[2.7rem] font-semibold leading-[0.98] tracking-tight text-ink dark:text-ink-dark sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </motion.h1>

          {/* Main positioning */}
          <motion.h2
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
            className="mt-5 max-w-2xl font-display text-[1.9rem] font-medium leading-[1.08] tracking-tight text-ink dark:text-ink-dark sm:mt-6 sm:text-4xl"
          >
            Building Intelligence
            <br />
            <span className="text-accent-ink">
              for the Real World.
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.6,
              delay: 0.22,
            }}
            className="mt-5 max-w-xl font-display text-base leading-relaxed text-muted dark:text-muted-dark sm:mt-7 sm:text-xl"
          >
            {site.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.6,
              delay: 0.28,
            }}
            className="mt-3 max-w-lg text-[13px] leading-6 text-muted dark:text-muted-dark sm:mt-4 sm:text-sm sm:leading-7"
          >
            {site.subtagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
          >
            {/* Work */}
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:bg-ink-dark dark:text-bg-dark sm:px-6"
            >
              Explore My Work

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Resume */}
            <a
              href="/resume/Spoorthi_K_P_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:shadow-sm dark:border-border-dark dark:text-ink-dark dark:hover:border-ink-dark sm:px-6"
            >
              View Resume

              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.6,
              delay: 0.42,
            }}
            className="mt-5 flex items-center gap-3 sm:mt-7"
          >
            {/* GitHub */}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              title="GitHub"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent-ink hover:shadow-sm dark:border-border-dark dark:text-muted-dark sm:h-10 sm:w-10"
            >
              <GithubIcon className="h-[17px] w-[17px] transition-transform duration-200 group-hover:scale-110 sm:h-[18px] sm:w-[18px]" />
            </a>

            {/* LinkedIn */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
              title="LinkedIn"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent-ink hover:shadow-sm dark:border-border-dark dark:text-muted-dark sm:h-10 sm:w-10"
            >
              <LinkedinIcon className="h-[17px] w-[17px] transition-transform duration-200 group-hover:scale-110 sm:h-[18px] sm:w-[18px]" />
            </a>

            <span className="ml-1 h-px w-6 bg-border dark:bg-border-dark sm:w-8" />

            <span className="font-tag text-[9px] uppercase tracking-[0.12em] text-muted dark:text-muted-dark sm:text-[10px] sm:tracking-[0.14em]">
              Connect
            </span>
          </motion.div>
        </div>

        {/* =========================
            RIGHT — PROFILE
        ========================== */}
        <motion.div
          initial={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                  x: 60,
                  scale: 0.85,
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
          className="relative mx-auto mt-2 flex w-full max-w-md items-center justify-center sm:mt-0"
        >
          {/* Ambient glow */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.18, 0.38, 0.18],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl sm:h-96 sm:w-96"
            />
          )}

          {/* Outer rotating ring */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: 360,
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
            className="absolute h-64 w-64 rounded-full border-2 border-accent/60 border-t-transparent border-r-transparent sm:h-96 sm:w-96"
          />

          {/* Inner ring */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: -360,
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            className="absolute h-56 w-56 rounded-full border border-accent/30 sm:h-[22rem] sm:w-[22rem]"
          />

          {/* Profile image */}
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
                    scale: 1.025,
                  }
            }
            className="relative z-10 h-52 w-52 overflow-hidden rounded-full border-4 border-bg shadow-2xl dark:border-bg-dark sm:h-80 sm:w-80"
          >
            <img
              src="/spoorthi.jpg"
              alt="Spoorthi K P — AI and Software Developer"
              loading="eager"
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Technology badge */}
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
            className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border border-border bg-bg/90 px-3 py-2 shadow-lg backdrop-blur-md dark:border-border-dark dark:bg-bg-dark/90 sm:bottom-5 sm:px-4"
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_currentColor]" />

              <span className="font-tag text-[8px] uppercase tracking-[0.12em] text-muted dark:text-muted-dark sm:text-[10px] sm:tracking-[0.16em]">
                AI • Intelligent Systems • Full-Stack
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}