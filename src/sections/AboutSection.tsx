import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, BarChart3, Brain, Users } from 'lucide-react';

const highlights = [
  {
    icon: BarChart3,
    title: 'Data Analytics & Visualization',
    description: 'Expertise in transforming raw data into compelling visual stories'
  },
  {
    icon: Brain,
    title: 'Machine Learning & NLP',
    description: 'Building intelligent systems for classification and prediction'
  },
  {
    icon: GraduationCap,
    title: 'Research Experience',
    description: 'Published researcher with hands-on industry exposure'
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'President of AIU Cricket Club, driving team success'
  }
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold gradient-text">
                  AAH
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-background rounded-xl p-4 shadow-lg border border-border"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Kedah, Malaysia</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Passionate about Data Science
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Final-year Computer Science student majoring in Data Science with hands-on 
              experience in data analysis, reporting, and dashboard development. Skilled in 
              Python, SQL, Excel, Tableau, and Power BI, with strong foundations in data 
              validation, visualization, and machine learning.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Seeking opportunities as a Junior Data Analyst, Software Engineer, or Research 
              Assistant to transform data into actionable insights and contribute to applied research.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
