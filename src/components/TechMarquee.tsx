import { motion } from 'framer-motion';

const technologies = [
  'Python', 'JavaScript', 'React', 'SQL', 'Tableau', 
  'Power BI', 'TensorFlow', 'MySQL', 'Git', 'Docker',
  'AWS', 'R', 'Flask', 'PostgreSQL', 'Pandas'
];

export const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-6 bg-card/50 border-y border-border">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="flex items-center gap-3 text-muted-foreground font-mono text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary/50" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
