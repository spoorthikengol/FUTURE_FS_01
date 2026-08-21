export type ProjectKind = "flagship" | "hackathon" | "technical";

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  kind: ProjectKind;
  name: string;
  category: string;
  contextLabel?: string;
  headline: string;
  summary: string;
  tech: string[];
  pipeline?: string[];
  caseStudy: CaseStudySection[];
  links?: { label: string; href: string }[];
  liveDemoNote?: string;
}

export const projects: Project[] = [
  {
    slug: "medimind-ai",
    kind: "flagship",
    name: "MediMind AI",
    category: "AI / Healthcare / Full Stack",
    headline: "Making complex medical information easier to understand.",
    summary:
      "An AI-powered healthcare assistant that helps people make sense of their medical reports — combining report analysis, health scoring, disease-risk prediction and an AI assistant into one dashboard.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "AI/ML"],
    caseStudy: [
      {
        heading: "Context",
        body: [
          "Medical reports are written for clinicians, not patients — full of terminology and reference ranges that are hard to act on without help.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "Medical reports can contain complex terminology that's difficult for the people they're about to actually understand.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "MediMind AI combines medical report analysis, a health scoring system, disease-risk prediction, an AI health assistant and personalized insights into a single dashboard, so a report becomes something a person can actually read and act on.",
        ],
      },
      {
        heading: "What it does",
        body: [
          "Analyzes uploaded medical report PDFs and simplifies the terminology inside them.",
          "Calculates a health score and flags disease risk based on report data.",
          "Provides an AI assistant for follow-up questions, plus a dashboard with report history and personalized insights.",
        ],
      },
      {
        heading: "Boundaries",
        body: [
          "MediMind AI does not diagnose disease or replace a medical professional — it's built to make existing reports easier to understand, not to make clinical decisions.",
        ],
      },
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/spoorthikengol/MediMind-AI",
      },
      {
        label: "Live Demo",
        href: "https://medimind-ai-frontend-web.onrender.com",
      },
    ],
    liveDemoNote: "Hosted on Render · First load may take a moment",
  },

  {
    slug: "safetynet-ai",
    kind: "hackathon",
    name: "SafetyNet AI",
    category: "Computer Vision / Edge AI / Physical Security",
    contextLabel: "Hackathon Build · Computer Vision · Edge AI",
    headline: "Reading movement, not faces — anomaly detection without the pixels.",
    summary:
      "A privacy-first video anomaly detection system built with a team during a hackathon. Instead of analyzing raw video pixels, it tracks human skeletal movement over time to flag unusual activity — built for two environments, school and retail.",
    tech: ["Python", "PyTorch", "MediaPipe", "OpenCV", "Gradio"],
    pipeline: [
      "Video",
      "Skeletal Pose Extraction",
      "Kinematic Feature Engineering",
      "Temporal Sequence Modeling (BiLSTM + Attention)",
      "Anomaly Detection",
      "Alert / Risk Level",
    ],
    caseStudy: [
      {
        heading: "Context",
        body: [
          "Built at a hackathon, with a team, under a hard time limit — this is a hackathon build, not a polished long-term product.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "Traditional CCTV is reactive — footage is reviewed after something has already happened. Pixel-based computer vision is also expensive to run continuously, captures more biometric detail than a security system needs, and tends to memorize backgrounds rather than actions.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "SafetyNet AI never analyzes raw pixels directly. It extracts human skeletal landmarks with MediaPipe Pose, engineers movement features from them (joint velocity, body geometry, motion over time), and feeds a rolling 30-frame window into a bidirectional LSTM with an attention layer to score anomaly risk.",
          "When skeletal tracking fails — crowded or occluded scenes — an optical-flow fallback estimates risk from raw motion instead, so the system degrades gracefully rather than going blind.",
        ],
      },
      {
        heading: "What it does",
        body: [
          "Runs in two modes with separately trained weights — School (built around physical-altercation patterns) and Shop (built around shoplifting patterns) — with an adjustable detection threshold.",
          "Classifies risk into Normal, Suspicious and Critical tiers and overlays live status on the video.",
          "Automatically archives and SHA-256-hashes any clip that trips an anomaly, logging it to a security log for an evidence chain of custody.",
        ],
      },
      {
        heading: "What I learned",
        body: [
          "Building SafetyNet AI during a hackathon taught me how to turn a real-world safety problem into an ML-based solution under real time pressure. I got hands-on experience with computer vision, human pose and movement analysis, and temporal sequence modeling — and just as much with the non-technical side: working as a team, prototyping fast, debugging under a clock, and making pragmatic technical calls instead of perfect ones when time is short.",
        ],
      },
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/shsumukha381-ui/NEURALNETWROKS",
      },
    ],
  },

  {
    slug: "mri-enhancement-segmentation",
    kind: "hackathon",
    name: "MRI Enhancement & Segmentation",
    category: "Computer Vision / Medical AI",
    contextLabel: "Hackathon Project · Computer Vision · Medical AI",
    headline: "Sharper scans, clearer boundaries.",
    summary:
      "A hackathon medical-imaging project focused on enhancing MRI scans and segmenting them — applying image processing and computer vision techniques to medical images.",
    tech: ["Python", "Computer Vision", "Image Processing"],
    pipeline: ["Input MRI", "Enhancement", "Segmentation", "Output"],
    caseStudy: [
      {
        heading: "Context",
        body: [
          "A hackathon computer-vision project applying image enhancement and segmentation techniques to MRI scans.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "The workflow takes a raw MRI scan, enhances it to improve clarity, and segments the enhanced image to isolate structures of interest — a standard medical-imaging pipeline applied hands-on.",
        ],
      },
      {
        heading: "Focus areas",
        body: [
          "Medical image processing, MRI enhancement techniques, and image segmentation using computer vision.",
        ],
      },
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/spoorthikengol/AI-Medical-imaging",
      },
    ],
  },
];

export const flagshipProject = projects.find(
  (p) => p.kind === "flagship"
)!;

export const otherProjects = projects.filter(
  (p) => p.kind !== "flagship"
);