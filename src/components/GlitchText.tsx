import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);

    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) return text[index];
            if (char === ' ') return ' ';
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      iterations += 1;
      if (iterations > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 40);
  };

  return (
    <motion.span
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={triggerGlitch}
      whileHover={{ scale: 1.02 }}
    >
      {displayText}
    </motion.span>
  );
};
