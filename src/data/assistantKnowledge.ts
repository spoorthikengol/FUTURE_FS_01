import { site } from "./site";
import { projects } from "./projects";
import {
  education,
  experience,
  toolGroups,
  currentlyLearning,
  interests,
} from "./profile";

export interface AssistantTopic {
  id: string;
  keywords: string[];
  answer: string;
}

const medimind = projects.find(
  (project) => project.slug === "medimind-ai"
);

const safetynet = projects.find(
  (project) => project.slug === "safetynet-ai"
);

const mri = projects.find(
  (project) => project.slug === "mri-enhancement-segmentation"
);

export const assistantTopics: AssistantTopic[] = [
  {
    id: "identity",
    keywords: [
  "who is spoorthi",
  "who is spoorthi k p",
  "who are you",
  "about spoorthi",
  "tell me about spoorthi",
],
    answer: `${site.name} is ${site.role}. ${site.tagline}`,
  },

  {
    id: "education",
    keywords: [
      "education",
      "college",
      "university",
      "study",
      "studies",
      "jnnce",
      "jnn college",
      "cgpa",
    ],
    answer: `Spoorthi is a ${education.status.toLowerCase()} at ${education.institution}, with a CGPA of ${education.cgpa}.`,
  },

  {
    id: "projects",
    keywords: [
      "projects",
      "project",
      "portfolio projects",
      "what has spoorthi built",
      "what has she built",
      "what does she build",
      "show me her work",
    ],
    answer:
      projects.length > 0
        ? `Spoorthi has built ${projects.length} main projects: ${projects
            .map((project) => project.name)
            .join(", ")}.`
        : "Spoorthi's projects are listed in this portfolio.",
  },

  {
    id: "ai-projects",
    keywords: [
      "ai projects",
      "artificial intelligence projects",
      "machine learning projects",
      "ml projects",
      "computer vision projects",
    ],
    answer: `Spoorthi's AI and computer-vision projects include ${projects
      .filter(
        (project) =>
          project.category.toLowerCase().includes("ai") ||
          project.category.toLowerCase().includes("computer vision")
      )
      .map((project) => project.name)
      .join(", ")}.`,
  },

  {
    id: "medimind",
    keywords: [
      "medimind",
      "medimind ai",
      "medical ai",
      "healthcare project",
      "health app",
      "medical report",
    ],
    answer: medimind
      ? `${medimind.name} — ${medimind.category}. ${medimind.summary}`
      : "MediMind AI is a healthcare-focused AI project featured in Spoorthi's portfolio.",
  },

  {
    id: "safetynet",
    keywords: [
      "safetynet",
      "safety net",
      "anomaly detection",
      "security project",
      "physical security",
      "edge ai",
    ],
    answer: safetynet
      ? `${safetynet.name} — ${safetynet.category}. ${safetynet.contextLabel ?? ""} ${safetynet.summary}`
      : "SafetyNet AI is a computer-vision and edge-AI project featured in Spoorthi's portfolio.",
  },

  {
    id: "mri",
    keywords: [
      "mri",
      "mri project",
      "medical imaging",
      "image segmentation",
      "segmentation",
      "image enhancement",
      "mri enhancement",
    ],
    answer: mri
      ? `${mri.name} — ${mri.category}. ${mri.contextLabel ?? ""} ${mri.summary}`
      : "MRI Enhancement & Segmentation is a medical-imaging project featured in Spoorthi's portfolio.",
  },

  {
    id: "tech-stack",
    keywords: [
      "tech stack",
      "technology",
      "technologies",
      "skills",
      "programming languages",
      "languages",
      "tools",
      "what technologies does she use",
      "what does she use",
    ],
    answer: `${toolGroups
      .map(
        (group) => `${group.label}: ${group.items.join(", ")}`
      )
      .join(". ")}.`,
  },

  {
    id: "learning",
    keywords: [
      "currently learning",
      "learning",
      "learning now",
      "studying now",
      "what is she learning",
      "what is spoorthi learning",
    ],
    answer: `Right now Spoorthi is learning ${currentlyLearning.join(", ")}.`,
  },

  {
    id: "interests",
    keywords: [
      "interests",
      "interest",
      "interested in",
      "passionate about",
      "what does she like",
    ],
    answer: `Spoorthi's interests include ${interests.join(", ")}.`,
  },

  {
    id: "experience",
    keywords: [
      "experience",
      "work experience",
      "internship",
      "internships",
      "future interns",
      "job",
      "work",
    ],
    answer:
      experience.length > 0
        ? experience
            .map(
              (entry) =>
                `${entry.role} at ${entry.org} (${entry.period}). ${entry.description}`
            )
            .join(" ")
        : "Spoorthi's experience is listed in the Experience section of this portfolio.",
  },

  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "contact her",
      "reach her",
      "get in touch",
      "hire her",
      "how can i contact spoorthi",
    ],
    answer: `You can reach Spoorthi at ${site.email}, or through the contact form on this portfolio.`,
  },

  {
    id: "linkedin",
    keywords: [
      "linkedin",
      "linkedin profile",
      "professional profile",
    ],
    answer: `Spoorthi's LinkedIn: ${site.linkedin}`,
  },

  {
    id: "github",
    keywords: [
      "github",
      "github profile",
      "source code",
      "repository",
      "repo",
    ],
    answer: `Spoorthi's GitHub profile: ${site.github}`,
  },
];

export const fallbackAnswer =
  "I don't have that information in Spoorthi's portfolio.";

export const suggestedQuestions = [
  "What is MediMind AI?",
  "What projects has Spoorthi built?",
  "What technologies does she use?",
  "How can I contact her?",
];