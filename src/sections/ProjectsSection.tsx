import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base card-hover group"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.liveUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-8"
          >
            <a
              href="https://github.com/abdullahhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline"
            >
              View all on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
