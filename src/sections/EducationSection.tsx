import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, Trophy, BadgeCheck, HeartHandshake, FileText } from 'lucide-react';
import { education, certifications, awards, volunteering } from '@/data/experience';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TerminalWindow } from '@/components/TerminalWindow';
import { sectionNumbers } from '@/constants/siteConfig';

export const EducationSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader number={sectionNumbers.education} title="Education" />

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {education.map((edu, eduIndex) => (
              <TerminalWindow key={edu.id} title={`education_${eduIndex + 1}.json`} interactive>
                <div className="p-6 -mt-4">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-mono text-sm">{edu.major}</p>
                      <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground font-mono">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.duration}
                        </span>
                        {edu.grade && (
                          <span className="flex items-center gap-1 text-primary">
                            <Trophy className="w-3 h-3" />
                            Final Grade: {edu.grade}
                          </span>
                        )}
                      </div>
                      {edu.thesis && (
                        <p className="flex items-start gap-2 mt-3 text-xs text-muted-foreground font-mono">
                          <FileText className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                          <span>Thesis: "{edu.thesis}"</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <h4 className="font-mono text-sm text-foreground">coursework[]</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <motion.span
                            key={course}
                            className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                            whileHover={{ scale: 1.1, y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03 }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TerminalWindow>
            ))}
          </motion.div>

          {/* Certifications & Honours Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TerminalWindow title="certifications.json" interactive>
                <div className="p-6 -mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="font-mono text-foreground">Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: 'hsl(var(--primary) / 0.05)' }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border transition-colors"
                      >
                        <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground text-sm">{cert.title}</p>
                          <p className="text-muted-foreground text-xs font-mono">
                            {cert.issuer}{cert.year ? ` • ${cert.year}` : ''}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>

            {/* Honours & Awards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TerminalWindow title="honours_awards.json" interactive>
                <div className="p-6 -mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="w-5 h-5 text-primary" />
                    <h3 className="font-mono text-foreground">Honours &amp; Awards</h3>
                  </div>
                  <div className="space-y-3">
                    {awards.map((award, index) => (
                      <motion.div
                        key={award.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: 'hsl(var(--primary) / 0.05)' }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border transition-colors"
                      >
                        <motion.span 
                          className="text-primary"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >▹</motion.span>
                        <div>
                          <p className="font-medium text-foreground text-sm">{award.title}</p>
                          <p className="text-muted-foreground text-xs font-mono">{award.year}</p>
                          <p className="text-muted-foreground text-xs mt-1">{award.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          </div>

          {/* Volunteering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8"
          >
            <TerminalWindow title="volunteering.json" interactive>
              <div className="p-6 -mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <HeartHandshake className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-foreground">Volunteering</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {volunteering.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5, backgroundColor: 'hsl(var(--primary) / 0.05)' }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border transition-colors"
                    >
                      <motion.span 
                        className="text-primary"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >▹</motion.span>
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.role}</p>
                        <p className="text-muted-foreground text-xs font-mono">
                          {item.organization}{item.year ? ` • ${item.year}` : ''}
                        </p>
                        {item.description && (
                          <p className="text-muted-foreground text-xs mt-1">{item.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
