import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle, Terminal } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">07.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contact</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Terminal Style Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="terminal-window h-full">
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">contact.sh</span>
                </div>
                <div className="terminal-body">
                  <div className="space-y-4">
                    <p>
                      <span className="text-primary">guest@abdullah.dev</span>
                      <span className="text-muted-foreground">:~$ </span>
                      <span className="text-foreground">cat contact_info.txt</span>
                    </p>
                    
                    <div className="pl-4 space-y-3 text-muted-foreground">
                      <p className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>abdullahhadi@email.com</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Kedah, Malaysia</span>
                      </p>
                    </div>

                    <p className="pt-4">
                      <span className="text-primary">guest@abdullah.dev</span>
                      <span className="text-muted-foreground">:~$ </span>
                      <span className="text-foreground">ls socials/</span>
                    </p>

                    <div className="flex gap-4 pl-4">
                      <a
                        href="https://github.com/abdullahhadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/abdullahhadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="mailto:abdullahhadi@email.com"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="pt-4">
                      <span className="text-primary">guest@abdullah.dev</span>
                      <span className="text-muted-foreground">:~$ </span>
                      <span className="typing-cursor" />
                    </p>
                  </div>
                </div>
              </div>
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
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
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

                      <button type="submit" className="btn-primary w-full">
                        <Terminal className="w-4 h-4" />
                        ./send_message.sh
                      </button>
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
