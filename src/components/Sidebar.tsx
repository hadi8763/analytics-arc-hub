import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, Code2, FolderKanban, FileText, Briefcase, 
  GraduationCap, Mail, Download, Github, Linkedin, 
  Menu, X, Circle
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home, file: 'home/' },
  { name: 'about_me.md', href: '#about', icon: User, file: 'about_me.md' },
  { name: 'skills.json', href: '#skills', icon: Code2, file: 'skills.json' },
  { name: 'projects.json', href: '#projects', icon: FolderKanban, file: 'projects.json' },
  { name: 'publications.tex', href: '#research', icon: FileText, file: 'publications.tex' },
  { name: 'experience.json', href: '#experience', icon: Briefcase, file: 'experience.json' },
  { name: 'education.json', href: '#education', icon: GraduationCap, file: 'education.json' },
  { name: 'contact.sh', href: '#contact', icon: Mail, file: 'contact.sh' },
];

export const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setActiveSection(href.replace('#', ''));
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg text-foreground"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isMobileOpen ? 0 : -280 }}
        className="lg:translate-x-0 fixed left-0 top-0 bottom-0 w-[220px] bg-sidebar-background border-r border-border z-50 flex flex-col transition-transform lg:transition-none"
      >
        {/* Profile Section */}
        <div className="p-6 text-center border-b border-border">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary border-2 border-primary/50 flex items-center justify-center overflow-hidden">
              <span className="text-2xl font-bold gradient-text">AAH</span>
            </div>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-sidebar-background" />
          </div>
          
          <h2 className="text-lg font-semibold text-foreground">Abdullah Al Hadi</h2>
          <p className="text-xs font-mono text-muted-foreground mt-1">root@developer:~/</p>
          
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono">
            <Circle className="w-2 h-2 fill-current" />
            Open to Work
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Explorer
          </p>
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`file-item ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.file}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary font-mono text-sm hover:bg-primary/20 transition-all"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://github.com/abdullahhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/abdullahhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:abdullahhadi@email.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            © 2025 Abdullah Al Hadi
          </p>
        </div>
      </motion.aside>
    </>
  );
};
