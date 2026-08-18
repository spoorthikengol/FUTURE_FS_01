import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products, prototypes and things I've shipped."
          description="MediMind AI is the primary, ongoing product. The rest are real, scoped projects — including a hackathon build, labeled honestly as one."
        />

        <div className="mt-14 flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={project.kind === "flagship"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
