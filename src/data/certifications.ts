export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationUrl?: string;
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

  {
    title: "Full Stack Web Development Internship",
    issuer: "Future Interns",
    date: "2026",
    image: "/certificates/future-interns-fullstack.png",
  },

  {
    title: "Programming in Modern C++",
    issuer: "NPTEL",
    date: "2026",
    image: "/certificates/nptel-programming-modern-cpp.png",
  },

  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "21 Nov 2026",
    image: "/certificates/sql-intermediate.pdf",
    
  },

    {
    title: "Smart India Hackathon 2026 – Participation",
    issuer: "J N N College of Engineering (JNNCE)",
    date: "17 Sep 2026",
    image: "/certificates/smart-india-hackathon-2026.webp",
  },
];