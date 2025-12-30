import { motion } from 'framer-motion';
import { Home, Terminal } from 'lucide-react';

export const TopBar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 lg:left-[220px] right-0 h-12 bg-card/80 backdrop-blur-lg border-b border-border z-40 flex items-center justify-between px-4"
    >
      {/* Left: Dots */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Center: Path */}
      <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
        <Home className="w-4 h-4" />
        <span>~/portfolio/home/</span>
        <span className="typing-cursor" />
      </div>

      {/* Right: Terminal Badge */}
      <a
        href="#contact"
        className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded text-primary text-sm font-mono hover:bg-primary/20 transition-all"
      >
        <Terminal className="w-4 h-4" />
        <span className="hidden sm:inline">Terminal</span>
      </a>
    </motion.header>
  );
};
