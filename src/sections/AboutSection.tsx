import { motion } from 'framer-motion';
import { MapPin, BarChart3, Brain, Users, BookOpen } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TerminalWindow } from '@/components/TerminalWindow';
import { TiltCard } from '@/components/TiltCard';
import { siteConfig, sectionNumbers } from '@/constants/siteConfig';

const highlights = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transforming raw data into compelling visual stories'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building intelligent systems for classification'
  },
  {
    icon: BookOpen,
    title: 'Research',
    description: 'Published researcher with industry exposure'
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'President of AIU Cricket Club'
  }
];

export const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader number={sectionNumbers.about} title="About Me" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div>
              <TerminalWindow title="about_me.md" className="mb-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Final-year Computer Science student majoring in <span className="text-primary">Data Science</span> with 
                    hands-on experience in data analysis, reporting, and dashboard development.
                  </p>
                  <p>
                    Skilled in <span className="text-primary">Python</span>, <span className="text-primary">SQL</span>, 
                    <span className="text-primary"> Excel</span>, <span className="text-primary">Tableau</span>, and 
                    <span className="text-primary"> Power BI</span>, with strong foundations in data validation, 
                    visualization, and machine learning.
                  </p>
                  <p>
                    Seeking opportunities as a Junior Data Analyst, Software Engineer, or Research Assistant to 
                    transform data into actionable insights.
                  </p>
                </div>
              </TerminalWindow>

              <motion.div 
                className="flex items-center gap-2 text-muted-foreground font-mono text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span>{siteConfig.location}</span>
              </motion.div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <TiltCard
                  key={item.title}
                  className="p-4"
                  maxTilt={8}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
