import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TechMarquee } from '@/components/TechMarquee';
import { GlitchText } from '@/components/GlitchText';
import { MagneticButton } from '@/components/MagneticButton';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export const HeroSection = () => {
  const { scrollToSection } = useSmoothScroll({ offset: -80 });
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Terminal Code Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="terminal-window max-w-md interactive"
              whileHover={{ scale: 1.02 }}
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
              </div>
              <div className="terminal-body leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="code-keyword">class</span>{' '}
                  <span className="code-class">Developer</span>{' '}
                  <span className="code-punctuation">{'{'}</span>
                </motion.p>
                <motion.p 
                  className="pl-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="code-keyword">constructor</span>
                  <span className="code-punctuation">()</span>{' '}
                  <span className="code-punctuation">{'{'}</span>
                </motion.p>
                <motion.p 
                  className="pl-8"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="code-property">this</span>
                  <span className="code-punctuation">.</span>
                  <span className="code-property">name</span>
                  <span className="code-punctuation"> = </span>
                  <span className="code-string hover-glow cursor-pointer">"Abdullah Al Hadi"</span>
                  <span className="code-punctuation">;</span>
                </motion.p>
                <motion.p 
                  className="pl-8"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="code-property">this</span>
                  <span className="code-punctuation">.</span>
                  <span className="code-property">role</span>
                  <span className="code-punctuation"> = </span>
                  <span className="code-string hover-glow cursor-pointer">"Data Scientist"</span>
                  <span className="code-punctuation">;</span>
                </motion.p>
                <motion.p 
                  className="pl-8"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="code-property">this</span>
                  <span className="code-punctuation">.</span>
                  <span className="code-property">passion</span>
                  <span className="code-punctuation"> = </span>
                  <span className="code-string hover-glow cursor-pointer">"Machine Learning"</span>
                  <span className="code-punctuation">;</span>
                </motion.p>
                <motion.p 
                  className="pl-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <span className="code-punctuation">{'}'}</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="code-punctuation">{'}'}</span>
                  <span className="typing-cursor" />
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <GlitchText text="BUILDING" className="text-foreground" />{' '}
              <span className="text-muted-foreground">THE </span>
              <GlitchText text="FUTURE" className="gradient-text glow-text" />
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Transforming complex data into{' '}
              <span className="text-primary shimmer-text">actionable insights</span> and ideas into{' '}
              <span className="text-primary shimmer-text">scalable applications</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticButton>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="btn-primary animate-pulse-glow"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </MagneticButton>
              <MagneticButton>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="btn-secondary border-glow"
                >
                  Contact Me
                </button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <TechMarquee />
      </motion.div>
    </section>
  );
};
