import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, Trophy, BadgeCheck, ChevronDown } from 'lucide-react';
import { education, certifications } from '@/data/experience';

const INITIAL_COUNT = 2;

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const certificationsList = certifications.filter(c => c.type === 'certification');
  const achievementsList = certifications.filter(c => c.type === 'achievement');

  const visibleCerts = showAllCerts ? certificationsList : certificationsList.slice(0, INITIAL_COUNT);
  const visibleAchievements = showAllAchievements ? achievementsList : achievementsList.slice(0, INITIAL_COUNT);

  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">06.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {education.map((edu) => {
                const visibleCourses = showAllCourses ? edu.coursework : edu.coursework.slice(0, 6);
                const hasMoreCourses = edu.coursework.length > 6;

                return (
                  <div key={edu.id} className="terminal-window">
                    <div className="terminal-header">
                      <div className="terminal-dot terminal-dot-red" />
                      <div className="terminal-dot terminal-dot-yellow" />
                      <div className="terminal-dot terminal-dot-green" />
                      <span className="ml-4 text-xs text-muted-foreground font-mono">education.json</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
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
                              Expected: {edu.expectedGraduation}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <h4 className="font-mono text-sm text-foreground">coursework[]</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <AnimatePresence>
                            {visibleCourses.map((course) => (
                              <motion.span
                                key={course}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                              >
                                {course}
                              </motion.span>
                            ))}
                          </AnimatePresence>
                        </div>
                        {hasMoreCourses && (
                          <button
                            onClick={() => setShowAllCourses(!showAllCourses)}
                            className="flex items-center gap-1 mt-3 text-xs text-primary font-mono hover:underline"
                          >
                            <motion.div
                              animate={{ rotate: showAllCourses ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-3 h-3" />
                            </motion.div>
                            {showAllCourses ? 'show_less()' : `view_more(${edu.coursework.length - 6})`}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Certifications & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Certifications */}
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">certifications.json</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="font-mono text-foreground">Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    <AnimatePresence>
                      {visibleCerts.map((cert, index) => (
                        <motion.div
                          key={cert.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border"
                        >
                          <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground text-sm">{cert.title}</p>
                            <p className="text-muted-foreground text-xs font-mono mt-0.5">
                              {cert.issuer} {cert.year && `• ${cert.year}`}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  {certificationsList.length > INITIAL_COUNT && (
                    <button
                      onClick={() => setShowAllCerts(!showAllCerts)}
                      className="flex items-center gap-1 mt-4 text-xs text-primary font-mono hover:underline"
                    >
                      <motion.div
                        animate={{ rotate: showAllCerts ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                      {showAllCerts ? 'show_less()' : `view_more(${certificationsList.length - INITIAL_COUNT})`}
                    </button>
                  )}
                </div>
              </div>

              {/* Achievements */}
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">achievements.json</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="w-5 h-5 text-primary" />
                    <h3 className="font-mono text-foreground">Achievements</h3>
                  </div>
                  <div className="space-y-3">
                    <AnimatePresence>
                      {visibleAchievements.map((achievement, index) => (
                        <motion.div
                          key={achievement.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border"
                        >
                          <span className="text-primary">▹</span>
                          <div>
                            <p className="font-medium text-foreground text-sm">{achievement.title}</p>
                            <p className="text-muted-foreground text-xs font-mono">{achievement.issuer}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  {achievementsList.length > INITIAL_COUNT && (
                    <button
                      onClick={() => setShowAllAchievements(!showAllAchievements)}
                      className="flex items-center gap-1 mt-4 text-xs text-primary font-mono hover:underline"
                    >
                      <motion.div
                        animate={{ rotate: showAllAchievements ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                      {showAllAchievements ? 'show_less()' : `view_more(${achievementsList.length - INITIAL_COUNT})`}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
