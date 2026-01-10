import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle, Terminal } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TerminalWindow } from '@/components/TerminalWindow';
import { siteConfig, sectionNumbers } from '@/constants/siteConfig';

export const ContactSection = () => {
  const { ref, isInView } = useScrollReveal();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader number={sectionNumbers.contact} title="Contact" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Terminal Style Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TerminalWindow title="contact.sh" className="h-full">
                <div className="space-y-4">
                  <p>
                    <span className="text-primary">{siteConfig.terminal.prompt}</span>
                    <span className="text-muted-foreground">:~$ </span>
                    <span className="text-foreground">cat contact_info.txt</span>
                  </p>
                  
                  <div className="pl-4 space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>{siteConfig.email}</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{siteConfig.location}</span>
                    </p>
                  </div>

                  <p className="pt-4">
                    <span className="text-primary">{siteConfig.terminal.prompt}</span>
                    <span className="text-muted-foreground">:~$ </span>
                    <span className="text-foreground">ls socials/</span>
                  </p>

                  <div className="flex gap-4 pl-4">
                    <motion.a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={siteConfig.socials.email}
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>

                  <p className="pt-4">
                    <span className="text-primary">{siteConfig.terminal.prompt}</span>
                    <span className="text-muted-foreground">:~$ </span>
                    <span className="typing-cursor" />
                  </p>
                </div>
              </TerminalWindow>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">send_message.sh</span>
                </div>
                <div className="p-6">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-8"
                    >
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 font-mono">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6 font-mono text-sm">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-mono text-sm hover:underline"
                      >
                        send_another()
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-mono text-foreground mb-2">
                          name:
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg bg-background border font-mono text-sm ${
                            errors.name ? 'border-destructive' : 'border-border'
                          } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-destructive font-mono">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-mono text-foreground mb-2">
                          email:
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg bg-background border font-mono text-sm ${
                            errors.email ? 'border-destructive' : 'border-border'
                          } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-destructive font-mono">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-mono text-foreground mb-2">
                          message:
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg bg-background border font-mono text-sm ${
                            errors.message ? 'border-destructive' : 'border-border'
                          } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none`}
                          placeholder="Your message..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-destructive font-mono">{errors.message}</p>
                        )}
                      </div>

                      <motion.button 
                        type="submit" 
                        className="btn-primary w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Terminal className="w-4 h-4" />
                        ./send_message.sh
                      </motion.button>
                    </form>
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
