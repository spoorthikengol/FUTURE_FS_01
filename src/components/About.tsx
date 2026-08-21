import { education, hackathons, interests } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Student by status. Builder by mindset."
        />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* About */}
          <Reveal>
            <p className="max-w-xl text-base leading-relaxed text-muted dark:text-muted-dark">
              I'm a student at {education.institution}, interested in AI,
              software development, full-stack systems, computer vision and
              using technology to solve real-world problems. Most of what's on
              this page came out of wanting to actually build the things I was
              reading about — a healthcare assistant, a computer-vision safety
              system, a medical-imaging pipeline — rather than stopping at the
              theory.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted dark:border-border-dark dark:text-muted-dark"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {/* Education */}
            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-border bg-surface p-8 dark:border-border-dark dark:bg-surface-dark">
                <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                  Education
                </p>

                <p className="mt-3 font-display text-lg font-medium text-ink dark:text-ink-dark">
                  {education.institution}
                </p>

                <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                  {education.status} · CGPA {education.cgpa}
                </p>
              </div>
            </Reveal>

            {/* Built Under Pressure */}
            <Reveal delay={0.12}>
              <div className="rounded-3xl border border-border bg-surface p-8 dark:border-border-dark dark:bg-surface-dark">
                <p className="font-tag text-xs uppercase tracking-[0.14em] text-accent-ink">
                  Built Under Pressure
                </p>

                <div className="mt-5 space-y-6">
                  {hackathons.map((hackathon, index) => (
                    <div
                      key={hackathon.team}
                      className={
                        index > 0
                          ? "border-t border-border pt-6 dark:border-border-dark"
                          : ""
                      }
                    >
                      <p className="font-display text-lg font-medium text-ink dark:text-ink-dark">
                        Team {hackathon.team}
                      </p>

                      <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                        Focus: {hackathon.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}