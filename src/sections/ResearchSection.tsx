import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ExternalLink, FileText, BookOpen } from 'lucide-react';
import { publications } from '@/data/publications';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TerminalWindow } from '@/components/TerminalWindow';
import { sectionNumbers } from '@/constants/siteConfig';

export const ResearchSection = () => {
  const { ref, isInView } = useScrollReveal();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="research" className="section-padding bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader number={sectionNumbers.research} title="Research" />

          <div className="max-w-4xl mx-auto space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TerminalWindow title={`paper_${index + 1}.tex`} interactive>
                  <div className="p-6 -mt-4">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <BookOpen className="w-5 h-5 text-primary" />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1 hover-glow">
                              {pub.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {pub.authors.join(', ')}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                              <span className="text-primary">{pub.conference}</span>
                              <span>•</span>
                              <span>{pub.year}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {pub.pdfUrl && (
                              <motion.a
                                href={pub.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <FileText className="w-5 h-5" />
                              </motion.a>
                            )}
                            {pub.doi && (
                              <motion.a
                                href={`https://doi.org/${pub.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-5 h-5" />
                              </motion.a>
                            )}
                          </div>
                        </div>

                        {/* Keywords */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {pub.keywords.map((keyword, i) => (
                            <motion.span
                              key={keyword}
                              className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                              whileHover={{ scale: 1.1, y: -2 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                            >
                              {keyword}
                            </motion.span>
                          ))}
                        </div>

                        {/* Abstract Toggle */}
                        <motion.button
                          onClick={() => toggleExpand(pub.id)}
                          className="flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors font-mono"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            animate={{ rotate: expandedId === pub.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                          {expandedId === pub.id ? 'hide_abstract()' : 'show_abstract()'}
                        </motion.button>

                        {/* Abstract Content */}
                        <AnimatePresence>
                          {expandedId === pub.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 p-4 bg-background/50 rounded-lg border border-border">
                                <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                                  <span className="text-primary">// Abstract</span><br />
                                  {pub.abstract}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </TerminalWindow>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
