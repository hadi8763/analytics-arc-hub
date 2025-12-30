export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  icon: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["Python", "SQL", "R", "HTML", "CSS", "PHP", "JavaScript"],
    icon: "Code2"
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "React", "Node.js", "Flask", "FastAPI", "Pandas", "NumPy"],
    icon: "Layers"
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
    icon: "Database"
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: ["Tableau", "Power BI", "Excel", "GitHub", "Docker", "AWS", "Azure", "Jupyter Notebook", "VS Code", "Git"],
    icon: "Wrench"
  }
];
