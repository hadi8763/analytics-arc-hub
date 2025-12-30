import { motion } from 'framer-motion';
import { 
  Code2, Database, Terminal, Layers, BarChart3, 
  Server, GitBranch, Cloud, FileCode, Cpu 
} from 'lucide-react';

const technologies = [
  { name: 'Python', icon: Code2 },
  { name: 'JavaScript', icon: FileCode },
  { name: 'React', icon: Layers },
  { name: 'MySQL', icon: Database },
  { name: 'Tableau', icon: BarChart3 },
  { name: 'Power BI', icon: BarChart3 },
  { name: 'Git', icon: GitBranch },
  { name: 'Linux', icon: Terminal },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Server },
  { name: 'TensorFlow', icon: Cpu },
];

export const TechMarquee = () => {
  const allTechs = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-4 bg-card/30 border-t border-border backdrop-blur-sm">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {allTechs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <span
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-colors cursor-default"
            >
              <Icon className="w-4 h-4 text-primary" />
              {tech.name}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};
