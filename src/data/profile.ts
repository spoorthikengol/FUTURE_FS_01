export interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    org: "Future Interns",
    role: "Full Stack Web Development Intern",
    period: "August 2026 — September 2026",
    description:
      "Completed the Full Stack Web Development internship. Tasks completed: Task 1 — Professional Portfolio, Task 2 — VeloraCRM, Task 3 — SALORA.",
  },
];

export const education = {
  institution: "JNN College of Engineering (JNNCE)",
  status: "Student",
};

export const hackathons = [
  {
    team: "ClassOfEquipments",
    focus: "Medical Imaging / AI",
  },
  {
    team: "Neural Experts",
    focus: "SafetyNet AI / Computer Vision / Edge AI",
  },
];

export const toolGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["C++", "C", "Python", "JavaScript / TypeScript"],
  },
  {
    label: "Development",
    items: ["React", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    label: "AI / ML",
    items: ["Machine Learning", "Computer Vision", "Medical AI"],
  },
  {
    label: "Workflow",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const currentlyLearning = [
  "C++",
  "Data Structures & Algorithms",
  "Full Stack Development",
  "Cybersecurity",
];

export const buildPhilosophy = [
  {
    step: "01",
    title: "Understand",
    body: "Start with the problem, not the tech — what's actually broken, and for whom.",
  },
  {
    step: "02",
    title: "Design",
    body: "Turn complexity into an experience someone can actually use.",
  },
  {
    step: "03",
    title: "Build",
    body: "Develop a practical, working version of the solution.",
  },
  {
    step: "04",
    title: "Iterate",
    body: "Test it, learn what's wrong, and improve it.",
  },
];

export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Full Stack Development",
  "Computer Vision",
  "Cybersecurity",
  "Medical AI",
];