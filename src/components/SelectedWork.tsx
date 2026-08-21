import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Animated heading */}
        <motion.div
          initial={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 40,
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
            eyebrow="Selected Work"
            title="Products, prototypes and things I've shipped."
            description="MediMind AI is the primary, ongoing product. The rest are real, scoped projects — including a hackathon build, labeled honestly as one."
          />
        </motion.div>

        {/* Animated project cards */}
        <div className="mt-16 flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: 70,
                      scale: 0.97,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
              }
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                    }
              }
            >
              <ProjectCard
                project={project}
                featured={project.kind === "flagship"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}