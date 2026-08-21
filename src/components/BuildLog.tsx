import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const buildLog = [
  {
    year: "AUG 2026",
    label: "CURRENT",
    title: "Full Stack Web Development Internship",
    organization: "Future Interns",
    description:
      "Working on practical full-stack development tasks, project building and real-world development experience.",
    current: true,
  },
  {
    year: "2026",
    label: "HACKATHON",
    title: "SafetyNet AI",
    organization: "AI × Computer Vision",
    description:
      "A privacy-first video anomaly detection system using human skeletal movement to identify unusual activity.",
    current: false,
  },
  {
    year: "2026",
    label: "HACKATHON",
    title: "MRI Enhancement & Segmentation",
    organization: "Medical Imaging",
    description:
      "A medical-imaging project focused on enhancing MRI scans and segmenting medical images using computer vision techniques.",
    current: false,
  },
  {
    year: "2026",
    label: "PROJECT",
    title: "MediMind AI",
    organization: "AI × Healthcare",
    description:
      "An AI-powered healthcare assistant designed to help users understand medical reports and receive meaningful health insights.",
    current: false,
  },
];

const cardVariants = [
  { x: -90, rotate: -2 },
  { x: 90, rotate: 2 },
  { x: -90, rotate: -2 },
  { x: 90, rotate: 2 },
];

export function BuildLog() {
  return (
    <section id="build-log" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* ========================= */}
        {/* HEADING */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SectionHeading
            eyebrow="Build Log"
            title="What I've been building."
          />
        </motion.div>

        <div className="relative mt-14">

          {/* ========================= */}
          {/* TIMELINE LINE */}
          {/* ========================= */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformOrigin: "top",
            }}
            className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-border dark:bg-border-dark sm:block"
          />

          <div className="space-y-8">

            {buildLog.map((item, index) => {
              const variant = cardVariants[index];

              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: variant.x,
                    rotate: variant.rotate,
                    scale: 0.94,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative sm:pl-10"
                >

                  {/* ========================= */}
                  {/* TIMELINE DOT */}
                  {/* ========================= */}

                  <motion.span
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      delay: index * 0.15 + 0.25,
                      type: "spring",
                      stiffness: 350,
                      damping: 14,
                    }}
                    className={`absolute left-0 top-7 hidden h-[15px] w-[15px] rounded-full border-2 bg-bg dark:bg-bg-dark sm:block ${
                      item.current
                        ? "border-accent"
                        : "border-border dark:border-border-dark"
                    }`}
                  >

                    {/* Current dot glow */}
                    {item.current && (
                      <motion.span
                        animate={{
                          scale: [1, 2.4, 1],
                          opacity: [0.7, 0, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-accent"
                      />
                    )}
                  </motion.span>

                  {/* ========================= */}
                  {/* CARD */}
                  {/* ========================= */}

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                      rotateX: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 18,
                    }}
                    className={`group relative overflow-hidden rounded-3xl border p-7 sm:p-8 ${
                      item.current
                        ? "border-accent/40 bg-surface shadow-lg shadow-accent/5 dark:bg-surface-dark"
                        : "border-border bg-bg dark:border-border-dark dark:bg-bg-dark"
                    }`}
                  >

                    {/* ========================= */}
                    {/* CURRENT CARD GLOW */}
                    {/* ========================= */}

                    {item.current && (
                      <motion.div
                        className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-accent/10 blur-3xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.25, 0.55, 0.25],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    {/* Animated top border */}
                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.15 + 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute left-0 top-0 h-px bg-accent"
                    />

                    <div className="relative">

                      {/* ========================= */}
                      {/* TOP ROW */}
                      {/* ========================= */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + 0.3,
                        }}
                        className="flex flex-wrap items-center justify-between gap-3"
                      >

                        <div className="flex flex-wrap items-center gap-3">

                          <span className="font-tag text-xs tracking-[0.14em] text-muted dark:text-muted-dark">
                            {item.year}
                          </span>

                          <motion.span
                            whileHover={{
                              scale: 1.08,
                            }}
                            className={`rounded-full border px-2.5 py-1 font-tag text-[10px] uppercase tracking-[0.12em] ${
                              item.current
                                ? "border-accent/40 text-accent-ink"
                                : "border-border text-muted dark:border-border-dark dark:text-muted-dark"
                            }`}
                          >
                            {item.label}
                          </motion.span>

                        </div>

                        {/* ========================= */}
                        {/* NOW */}
                        {/* ========================= */}

                        {item.current && (
                          <span className="inline-flex items-center gap-2 font-tag text-[10px] uppercase tracking-[0.12em] text-accent-ink">

                            <span className="relative flex h-2 w-2">

                              <motion.span
                                animate={{
                                  scale: [1, 2.5, 1],
                                  opacity: [0.8, 0, 0.8],
                                }}
                                transition={{
                                  duration: 1.6,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-full bg-accent"
                              />

                              <span className="relative h-2 w-2 rounded-full bg-accent" />

                            </span>

                            Now
                          </span>
                        )}

                      </motion.div>

                      {/* ========================= */}
                      {/* CONTENT */}
                      {/* ========================= */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 25,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.65,
                          delay: index * 0.15 + 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-5"
                      >

                        <h3 className="font-display text-xl font-medium text-ink transition-transform duration-300 group-hover:translate-x-1 dark:text-ink-dark sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                          {item.organization}
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted dark:text-muted-dark">
                          {item.description}
                        </p>

                      </motion.div>

                    </div>
                  </motion.div>
                </motion.article>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}