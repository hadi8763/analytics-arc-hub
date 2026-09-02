import { motion } from 'framer-motion';
import { Code2, Layers, Database, Wrench, Server, Users } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';
import { sectionNumbers } from '@/constants/siteConfig';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Layers,
  Database,
  Wrench,
  Server,
  Users,
};

export const SkillsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader number={sectionNumbers.skills} title="Skills" />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = iconMap[category.icon] || Code2;
              
              return (
                <TiltCard key={category.id} className="p-5" maxTilt={8}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="font-mono text-sm text-foreground font-medium">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: skillIndex * 0.03 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="skill-badge cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>

          {/* Interactive Terminal */}
          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
};
