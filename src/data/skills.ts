export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  icon: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming",
    skills: ["Python", "SQL", "HTML", "CSS", "PHP", "JavaScript", "R"],
    icon: "Code2"
  },
  {
    id: "technical",
    title: "Development & AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Artificial Intelligence",
      "AI Automation",
      "Web Development",
      "GitHub",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn"
    ],
    icon: "Layers"
  },
  {
    id: "data",
    title: "Data & Analytics",
    skills: ["Power BI", "Tableau", "Excel", "Jupyter Notebook", "Pandas", "NumPy"],
    icon: "Database"
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: ["OpenAI API", "Lindy", "Vapi", "n8n", "Make.com", "SpeedBot", "Git", "VS Code"],
    icon: "Wrench"
  },
  {
    id: "it-systems",
    title: "IT Systems",
    skills: ["Windows OS", "macOS", "Linux", "Networking", "Hardware Maintenance", "Troubleshooting"],
    icon: "Server"
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Team Collaboration", "Leadership"],
    icon: "Users"
  }
];
