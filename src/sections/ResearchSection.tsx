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
    <section id="research" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Academic Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Research Publications
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Contributing to the advancement of machine learning and cybersecurity through peer-reviewed research
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-base overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground leading-tight mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {pub.authors.join(', ')}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-primary font-medium">{pub.conference}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{pub.year}</span>
                    </div>
                  </div>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {pub.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Abstract Toggle */}
                <button
                  onClick={() => toggleExpand(pub.id)}
                  className="flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:underline"
                >
                  <span>{expandedId === pub.id ? 'Hide Abstract' : 'View Abstract'}</span>
                  <motion.div
                    animate={{ rotate: expandedId === pub.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Expandable Abstract */}
                <AnimatePresence>
                  {expandedId === pub.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Abstract</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {pub.abstract}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>PDF</span>
                    </a>
                  )}
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>DOI: {pub.doi}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
