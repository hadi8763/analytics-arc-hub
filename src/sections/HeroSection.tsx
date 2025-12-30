import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { TechMarquee } from '@/components/TechMarquee';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Terminal Code Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-window max-w-md">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
              </div>
              <div className="terminal-body leading-relaxed">
                <p>
                  <span className="code-keyword">class</span>{' '}
                  <span className="code-class">Developer</span>{' '}
                  <span className="code-punctuation">{'{'}</span>
                </p>
                <p className="pl-4">
                  <span className="code-keyword">constructor</span>
                  <span className="code-punctuation">()</span>{' '}
                  <span className="code-punctuation">{'{'}</span>
                </p>
                <p className="pl-8">
                  <span className="code-property">this</span>
                  <span className="code-punctuation">.</span>
                  <span className="code-property">name</span>
                  <span className="code-punctuation"> = </span>
                  <span className="code-string">"Abdullah Al Hadi"</span>
                  <span className="code-punctuation">;</span>
                </p>
                <p className="pl-8">
                  <span className="code-property">this</span>
                  <span className="code-punctuation">.</span>
                  <span className="code-property">role</span>
                  <span className="code-punctuation"> = </span>
                  <span className="code-string">"Data Scientist"</span>
                  <span className="code-punctuation">;</span>
                </p>
                <p className="pl-8">
                  <span className="code-property">this</span>
                  <span className="code-punctuation">.</span>
                  <span className="code-property">passion</span>
                  <span className="code-punctuation"> = </span>
                  <span className="code-string">"Machine Learning"</span>
                  <span className="code-punctuation">;</span>
                </p>
                <p className="pl-4">
                  <span className="code-punctuation">{'}'}</span>
                </p>
                <p>
                  <span className="code-punctuation">{'}'}</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">BUILDING THE </span>
              <span className="gradient-text glow-text">FUTURE</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Transforming complex data into{' '}
              <span className="text-primary">actionable insights</span> and ideas into{' '}
              <span className="text-primary">scalable applications</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
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
