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

const currentExperience = experience[0];

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
    id: "developer-type",
    keywords: [
      "what kind of developer is spoorthi",
      "what type of developer is spoorthi",
      "what kind of developer",
      "what type of developer",
      "what does spoorthi specialize in",
      "what does spoorthi focus on",
      "what is spoorthi focused on",
    ],
    answer:
      `${site.name} is a builder focused on AI, software, full-stack systems, ` +
      `computer vision and building products for real-world problems.`,
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
      "where does spoorthi study",
      "where is spoorthi studying",
      "which college does spoorthi study at",
      "which college does spoorthi attend",
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
      "what projects does spoorthi have",
      "tell me about her projects",
    ],
    answer:
      projects.length > 0
        ? `Spoorthi has built ${projects.length} main projects: ${projects
            .map((project) => project.name)
            .join(", ")}.`
        : "Spoorthi's projects are listed in this portfolio.",
  },

  {
    id: "hackathon-projects",
    keywords: [
      "hackathon projects",
      "hackathon project",
      "what hackathon projects has spoorthi worked on",
      "what hackathons has spoorthi worked on",
      "spoorthi hackathon",
      "hackathon work",
      "which hackathons did she participate in",
      "which hackathons did spoorthi participate in",
      "tell me about her hackathon work",
      "what did spoorthi build during hackathons",
      "which projects were built for hackathons",
      "did spoorthi work on any hackathons",
      "hackathon experience",
    ],
    answer:
      `Spoorthi has worked on two hackathon projects: ${
        safetynet?.name ?? "SafetyNet AI"
      } and ${
        mri?.name ?? "MRI Enhancement & Segmentation"
      }. ${
        safetynet?.summary ?? ""
      } ${
        mri?.summary ?? ""
      }`,
  },

  {
    id: "ai-projects",
    keywords: [
      "ai projects",
      "artificial intelligence projects",
      "machine learning projects",
      "ml projects",
      "computer vision projects",
      "ai work",
      "machine learning work",
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
      "what is medimind",
      "what is medimind ai",
      "tell me about medimind",
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
      "what is safetynet",
      "tell me about safetynet",
    ],
    answer: safetynet
      ? `${safetynet.name} — ${safetynet.category}. ${
          safetynet.contextLabel ?? ""
        } ${safetynet.summary}`
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
      "what is mri project",
      "tell me about mri",
    ],
    answer: mri
      ? `${mri.name} — ${mri.category}. ${
          mri.contextLabel ?? ""
        } ${mri.summary}`
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
      "what technologies does spoorthi use",
      "what is her tech stack",
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
      "what is spoorthi currently learning",
      "what is she currently learning",
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
      "what are spoorthi interests",
      "what is spoorthi interested in",
    ],
    answer: `Spoorthi's interests include ${interests.join(", ")}.`,
  },

  {
    id: "current-work",
    keywords: [
      "currently working",
      "currently working on",
      "currently work",
      "current work",
      "current job",
      "current role",
      "what is spoorthi currently working on",
      "what is spoorthi doing currently",
      "what is spoorthi's current work",
      "what is spoorthi doing now",
      "what is spoorthi working on now",
      "what is spoorthi doing right now",
    ],
    answer: currentExperience
      ? `${currentExperience.role} at ${currentExperience.org} (${currentExperience.period}). ${currentExperience.description}`
      : "Spoorthi's current work is listed in the Experience section of this portfolio.",
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
      "internship experience",
      "what is spoorthi's internship",
      "what is her internship",
      "tell me about her internship",
      "where is spoorthi interning",
      "where does spoorthi work",
      "where is spoorthi working",
      "which company is spoorthi interning at",
      "which company is spoorthi working at",
      "what company is spoorthi interning with",
      "who is spoorthi interning with",
      "where is her internship",
      "internship company",
      "where does she work",
      "where is she interning",
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
      "how do i contact spoorthi",
      "how can i reach spoorthi",
    ],
    answer: `You can reach Spoorthi at ${site.email}, or through the contact form on this portfolio.`,
  },

  {
    id: "linkedin",
    keywords: [
      "linkedin",
      "linkedin profile",
      "professional profile",
      "spoorthi linkedin",
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
      "spoorthi github",
    ],
    answer: `Spoorthi's GitHub profile: ${site.github}`,
  },
];

export const fallbackAnswer =
  "I don't have that information in Spoorthi's portfolio.";

export const suggestedQuestions = [
  "What is MediMind AI?",
  "What projects has Spoorthi built?",
  "What hackathon projects has Spoorthi worked on?",
  "What kind of developer is Spoorthi?",
  "What is Spoorthi currently working on?",
  "Where is Spoorthi interning?",
  "What technologies does she use?",
  "How can I contact her?",
];