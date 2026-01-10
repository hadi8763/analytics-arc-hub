import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';
import { siteConfig, sectionNumbers } from '@/constants/siteConfig';

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader number={sectionNumbers.projects} title="Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <TiltCard key={project.id} className="group interactive">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Folder className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.liveUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors hover-glow">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <motion.span 
                          className="text-primary mt-0.5"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >▹</motion.span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded border-glow"
                        whileHover={{ scale: 1.1, backgroundColor: 'hsl(180 100% 45% / 0.2)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-8"
          >
            <motion.a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
            >
              View all on GitHub
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
