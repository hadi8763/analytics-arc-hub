import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, BarChart3, Brain, Users, BookOpen } from 'lucide-react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div>
              <div className="terminal-window mb-6">
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">about_me.md</span>
                </div>
                <div className="terminal-body space-y-4 text-muted-foreground">
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
              </div>

              <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kedah, Malaysia</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="card-base card-hover p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
