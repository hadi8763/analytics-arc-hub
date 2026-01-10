import { motion, Variants, Easing } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const easeOutExpo: Easing = [0.22, 1, 0.36, 1];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

export const SectionTransition = ({ 
  children, 
  className = '',
  delay = 0,
}: SectionTransitionProps) => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </motion.div>
  );
};

export const SectionChild = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  );
};
