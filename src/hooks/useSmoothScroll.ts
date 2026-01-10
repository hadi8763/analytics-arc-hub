import { useCallback } from 'react';

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
}

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const { offset = -60 } = options;

  const scrollToSection = useCallback((targetId: string) => {
    const element = document.getElementById(targetId.replace('#', ''));
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, [offset]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return { scrollToSection, scrollToTop };
};
