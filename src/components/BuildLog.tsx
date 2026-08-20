import { Reveal } from "./Reveal";
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

export function BuildLog() {
  return (
    <section id="build-log" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Build Log"
          title="What I've been building."
        />

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-border dark:bg-border-dark sm:block" />

          <div className="space-y-8">
            {buildLog.map((item, index) => (
              <Reveal
                key={`${item.year}-${item.title}`}
                delay={index * 0.06}
              >
                <article className="relative sm:pl-10">
                  {/* Timeline dot */}
                  <span
                    className={`absolute left-0 top-7 hidden h-[15px] w-[15px] rounded-full border-2 bg-bg dark:bg-bg-dark sm:block ${
                      item.current
                        ? "border-accent"
                        : "border-border dark:border-border-dark"
                    }`}
                  />

                  <div
                    className={`rounded-3xl border p-7 transition-colors sm:p-8 ${
                      item.current
                        ? "border-accent/40 bg-surface dark:bg-surface-dark"
                        : "border-border bg-bg dark:border-border-dark dark:bg-bg-dark"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-tag text-xs tracking-[0.14em] text-muted dark:text-muted-dark">
                          {item.year}
                        </span>

                        <span
                          className={`rounded-full border px-2.5 py-1 font-tag text-[10px] uppercase tracking-[0.12em] ${
                            item.current
                              ? "border-accent/40 text-accent-ink"
                              : "border-border text-muted dark:border-border-dark dark:text-muted-dark"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      {item.current && (
                        <span className="inline-flex items-center gap-2 font-tag text-[10px] uppercase tracking-[0.12em] text-accent-ink">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          Now
                        </span>
                      )}
                    </div>

                    <div className="mt-5">
                      <h3 className="font-display text-xl font-medium text-ink dark:text-ink-dark sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                        {item.organization}
                      </p>

                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted dark:text-muted-dark">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}