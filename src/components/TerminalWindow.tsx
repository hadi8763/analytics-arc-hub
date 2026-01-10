import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export const TerminalWindow = ({ 
  title = 'terminal', 
  children, 
  className = '',
  interactive = false,
}: TerminalWindowProps) => {
  return (
    <motion.div 
      className={`terminal-window ${interactive ? 'interactive' : ''} ${className}`}
      whileHover={interactive ? { scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="terminal-header">
        <motion.div 
          className="terminal-dot terminal-dot-red"
          whileHover={{ scale: 1.3 }}
        />
        <motion.div 
          className="terminal-dot terminal-dot-yellow"
          whileHover={{ scale: 1.3 }}
        />
        <motion.div 
          className="terminal-dot terminal-dot-green"
          whileHover={{ scale: 1.3 }}
        />
        {title && (
          <span className="ml-4 text-xs text-muted-foreground font-mono">
            {title}
          </span>
        )}
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </motion.div>
  );
};
