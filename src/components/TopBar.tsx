import { motion } from 'framer-motion';
import { Home, Terminal } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export const TopBar = () => {
  const { scrollToSection } = useSmoothScroll({ offset: -80 });

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('contact');
    window.history.pushState(null, '', '#contact');
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 lg:left-[220px] right-0 h-12 bg-card/80 backdrop-blur-lg border-b border-border z-40 flex items-center justify-between px-4"
    >
      {/* Left: Dots */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex items-center gap-1.5">
          <motion.div 
            className="w-3 h-3 rounded-full bg-red-500"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-yellow-500"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-green-500"
            whileHover={{ scale: 1.2 }}
          />
        </div>
      </div>

      {/* Center: Path */}
      <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
        <Home className="w-4 h-4" />
        <span>~/portfolio/home/</span>
        <span className="typing-cursor" />
      </div>

      {/* Right: Theme Toggle & Terminal Badge */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <motion.button
          onClick={handleContactClick}
          className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded text-primary text-sm font-mono hover:bg-primary/20 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Terminal className="w-4 h-4" />
          <span className="hidden sm:inline">Terminal</span>
        </motion.button>
      </div>
    </motion.header>
  );
};
