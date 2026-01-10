import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealOptions {
  once?: boolean;
  margin?: `${number}px` | `${number}%` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { once = true, margin = '-100px' } = options;
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  return { ref, isInView };
};
