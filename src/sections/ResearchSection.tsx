import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ExternalLink, FileText, BookOpen } from 'lucide-react';
import { publications } from '@/data/publications';

export const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Research</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="terminal-window"
              >
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">paper_{index + 1}.tex</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
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
                            <a
                              href={pub.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <FileText className="w-5 h-5" />
                            </a>
                          )}
                          {pub.doi && (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {pub.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      {/* Abstract Toggle */}
                      <button
                        onClick={() => toggleExpand(pub.id)}
                        className="flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors font-mono"
                      >
                        <motion.div
                          animate={{ rotate: expandedId === pub.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                        {expandedId === pub.id ? 'hide_abstract()' : 'show_abstract()'}
                      </button>

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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
