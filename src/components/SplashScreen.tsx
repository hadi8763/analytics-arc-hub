import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'loading' | 'revealing' | 'complete'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase('revealing'), 300);
      setTimeout(() => {
        setPhase('complete');
        onComplete();
      }, 1200);
    }
  }, [progress, onComplete]);

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    })
  };

  const name = "ABDULLAH AL HADI";

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.03) 2px, hsl(var(--primary) / 0.03) 4px)',
            }} />
          </div>

          {/* Terminal window */}
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glowing backdrop */}
            <div className="absolute -inset-20 bg-primary/5 blur-3xl rounded-full" />
            
            {/* Main content */}
            <div className="relative z-10 text-center">
              {/* ASCII art bracket */}
              <motion.div 
                className="font-mono text-primary/30 text-6xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {'</>'}
              </motion.div>

              {/* Name animation */}
              <div className="flex justify-center gap-1 mb-8">
                {name.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={`font-mono text-2xl md:text-4xl font-bold ${
                      letter === ' ' ? 'w-4' : 'text-foreground'
                    }`}
                    style={{
                      textShadow: '0 0 20px hsl(var(--primary) / 0.5)'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Loading bar */}
              <div className="w-64 md:w-80 mx-auto">
                <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
                  <span>$ loading_portfolio</span>
                  <span>{Math.min(100, Math.floor(progress))}%</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-primary to-primary/50"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, progress)}%` }}
                    transition={{ duration: 0.1 }}
                    style={{
                      boxShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)'
                    }}
                  />
                </div>
              </div>

              {/* Status messages */}
              <motion.div 
                className="mt-6 font-mono text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {progress < 30 && '> initializing_components...'}
                  {progress >= 30 && progress < 60 && '> loading_assets...'}
                  {progress >= 60 && progress < 90 && '> compiling_experience...'}
                  {progress >= 90 && '> ready_to_launch...'}
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 font-mono text-xs text-primary/30">
            <div>v1.0.0</div>
            <div>2025</div>
          </div>
          <div className="absolute bottom-8 right-8 font-mono text-xs text-primary/30">
            <div>DATA_SCIENTIST</div>
            <div>ML_ENGINEER</div>
          </div>

          {/* Animated borders */}
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
