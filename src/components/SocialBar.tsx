import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/abdullahhadi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/abdullahhadi', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:abdullahhadi@email.com', label: 'Email' },
];

export const SocialBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center"
    >
      {/* CONNECT Label */}
      <div className="writing-mode-vertical text-xs font-mono text-muted-foreground tracking-widest mb-4 rotate-180"
        style={{ writingMode: 'vertical-rl' }}
      >
        CONNECT
      </div>

      {/* Social Icons */}
      <div className="flex flex-col gap-2 p-2 bg-card/80 backdrop-blur-sm border border-border rounded-l-lg">
        {socials.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all interactive"
            aria-label={social.label}
            whileHover={{ scale: 1.2, x: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};
