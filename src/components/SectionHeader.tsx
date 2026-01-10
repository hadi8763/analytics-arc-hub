import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
}

export const SectionHeader = ({ number, title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <motion.span 
        className="text-primary font-mono text-sm"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        {number}.
      </motion.span>
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-foreground"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="flex-1 h-px bg-border ml-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ originX: 0 }}
      />
    </div>
  );
};
