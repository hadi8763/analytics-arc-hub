export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "ulink-assist",
    title: "Data Analyst & Operations",
    company: "Ulink Assist Pte. Ltd.",
    location: "Remote, Singapore",
    type: "Full-time",
    duration: "Sep 2025 – Present",
    startDate: "2025-09",
    endDate: "Present",
    description: [
      "Analyzed operational data to identify trends and optimize business processes",
      "Built comprehensive reports and interactive dashboards using Excel and Power BI",
      "Supported data-driven decision-making across multiple departments",
      "Collaborated with cross-functional teams to deliver actionable insights"
    ],
    technologies: ["Excel", "Power BI", "SQL", "Data Analysis"]
  },
  {
    id: "cyres-usm",
    title: "Data Analyst",
    company: "Cybersecurity Research Center (CYRES), USM",
    location: "Penang, Malaysia",
    type: "Internship",
    duration: "Jul 2025 – Sep 2025",
    startDate: "2025-07",
    endDate: "2025-09",
    description: [
      "Cleaned and validated large-scale cybersecurity datasets for research purposes",
      "Identified anomalies and emerging trends in security data",
      "Applied machine learning techniques to improve data quality and reporting accuracy",
      "Contributed to research publications on cybersecurity analytics"
    ],
    technologies: ["Python", "Machine Learning", "Data Cleaning", "Statistical Analysis"]
  }
];

export interface Education {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  duration: string;
  expectedGraduation: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    id: "aiu-bcs",
    degree: "Bachelor of Computer Science (Honours)",
    major: "Data Science",
    institution: "Albukhary International University",
    location: "Kedah, Malaysia",
    duration: "2022 – 2026",
    expectedGraduation: "March 2026",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Mining & Analytics",
      "Database Management Systems",
      "Information Visualization",
      "Software Engineering"
    ]
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: number;
  type: "certification" | "achievement";
}

export const certifications: Certification[] = [
  {
    id: "google-pm",
    title: "Google Project Management Professional Certificate",
    issuer: "Google",
    year: 2024,
    type: "certification"
  },
  {
    id: "aws-ml",
    title: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services",
    year: 2024,
    type: "certification"
  },
  {
    id: "deans-list",
    title: "Dean's List (3 Semesters)",
    issuer: "Albukhary International University",
    type: "achievement"
  },
  {
    id: "ict-volunteer",
    title: "Malaysia ICT Volunteer",
    issuer: "Malaysia Digital Economy Corporation",
    type: "achievement"
  },
  {
    id: "cricket-president",
    title: "President, AIU Cricket Club",
    issuer: "Albukhary International University",
    type: "achievement"
  }
];
