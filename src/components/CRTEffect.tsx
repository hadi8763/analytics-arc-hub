import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CRTEffect = () => {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    // Random flicker effect
    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.97) {
        setFlicker(true);
        setTimeout(() => setFlicker(false), 50 + Math.random() * 100);
      }
    }, 100);

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <>
      {/* Scanlines overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.02) 2px,
            rgba(0, 255, 255, 0.02) 4px
          )`,
        }}
      />
      
      {/* Screen curvature vignette */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 60%,
            rgba(0, 0, 0, 0.3) 100%
          )`,
        }}
      />
      
      {/* RGB split / chromatic aberration on flicker */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        animate={{
          opacity: flicker ? 1 : 0,
        }}
        transition={{ duration: 0.05 }}
        style={{
          mixBlendMode: 'screen',
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(255,0,0,0.05) 0%, transparent 10%, transparent 90%, rgba(0,255,255,0.05) 100%)',
          }}
        />
      </motion.div>

      {/* Subtle horizontal glitch bars */}
      {flicker && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full bg-primary/10"
              style={{
                height: `${2 + Math.random() * 4}px`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          ))}
        </div>
      )}

      {/* Screen noise texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
};
