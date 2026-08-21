export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    title: "SafetyNet AI",
    issuer: "Dayananda Sagar Academy of Technology and Management",
    date: "2026",
    image: "/certificates/safetynet-ai.jpg",
  },
  {
    title: "MRI Enhancement & Segmentation",
    issuer: "JNNCE",
    date: "2026",
    image: "/certificates/mri-enhancement.jpg",
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    date: "2026",
    image: "/certificates/mongodb-basics.jpg",
  },
  {
    title: "Building AI-Powered Search with MongoDB Vector Search",
    issuer: "MongoDB",
    date: "2026",
    image: "/certificates/mongodb-vector-search.jpg",
  },
];