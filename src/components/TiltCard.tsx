import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTilt } from '@/hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glareEnabled?: boolean;
}

export const TiltCard = ({ 
  children, 
  className = '', 
  maxTilt = 10,
}: TiltCardProps) => {
  const { tiltProps } = useTilt({ maxTilt, scale: 1.02 });

  return (
    <motion.div
      {...tiltProps}
      className={`card-base card-hover relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Glare effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      </div>
      {children}
    </motion.div>
  );
};
