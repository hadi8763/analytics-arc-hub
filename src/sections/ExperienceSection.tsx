import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative mb-8 last:mb-0 pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="terminal-window">
                    <div className="terminal-header">
                      <div className="terminal-dot terminal-dot-red" />
                      <div className="terminal-dot terminal-dot-yellow" />
                      <div className="terminal-dot terminal-dot-green" />
                      <span className="ml-4 text-xs text-muted-foreground font-mono">experience_{index + 1}.json</span>
                    </div>
                    <div className="p-6">
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
                          <li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                          >
                            <span className="text-primary mt-0.5">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
