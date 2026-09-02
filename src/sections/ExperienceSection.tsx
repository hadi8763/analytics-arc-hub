import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Users } from 'lucide-react';
import { experiences, leadership } from '@/data/experience';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TerminalWindow } from '@/components/TerminalWindow';
import { sectionNumbers } from '@/constants/siteConfig';

export const ExperienceSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader number={sectionNumbers.experience} title="Experience" />

          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <motion.div 
                className="absolute left-4 top-0 bottom-0 w-px bg-border"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1 }}
                style={{ originY: 0 }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative mb-8 last:mb-0 pl-12"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-2 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <TerminalWindow title={`experience_${index + 1}.json`} interactive>
                    <div className="p-6 -mt-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-primary" />
                            {exp.title}
                          </h3>
                          <p className="text-primary font-mono text-sm mt-1">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground font-mono">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <motion.span 
                              className="text-primary mt-0.5"
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >▹</motion.span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </TerminalWindow>
                </motion.div>
              ))}
            </div>

            {/* Leadership & Management */}
            <div className="mt-16">
              <motion.h3
                className="font-mono text-lg text-foreground mb-6 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                <Users className="w-5 h-5 text-primary" />
                <span className="text-primary">$</span> cat leadership.md
              </motion.h3>

              <div className="space-y-4">
                {leadership.map((role, index) => (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <TerminalWindow title={`leadership_${index + 1}.json`} interactive>
                      <div className="p-6 -mt-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-semibold text-foreground">{role.title}</h4>
                            <p className="text-primary font-mono text-sm mt-1">{role.organization}</p>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono shrink-0">
                            <Calendar className="w-3 h-3" />
                            <span>{role.duration}</span>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {role.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                              <span className="text-primary mt-0.5">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TerminalWindow>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
