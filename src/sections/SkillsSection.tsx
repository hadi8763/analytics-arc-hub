import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Layers, Database, Wrench, ChevronDown } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Layers,
  Database,
  Wrench,
};

const INITIAL_SKILLS_COUNT = 5;

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = iconMap[category.icon] || Code2;
              const isExpanded = expandedCategories[category.id];
              const visibleSkills = isExpanded 
                ? category.skills 
                : category.skills.slice(0, INITIAL_SKILLS_COUNT);
              const hasMore = category.skills.length > INITIAL_SKILLS_COUNT;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  className="card-base card-hover p-5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-mono text-sm text-foreground font-medium">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence>
                      {visibleSkills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2, delay: skillIndex * 0.03 }}
                          className="skill-badge"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>

                  {hasMore && (
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="flex items-center gap-1 mt-3 text-xs text-primary font-mono hover:underline"
                    >
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                      {isExpanded ? 'show_less()' : `view_more(${category.skills.length - INITIAL_SKILLS_COUNT})`}
                    </button>
                  )}
                </motion.div>
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
