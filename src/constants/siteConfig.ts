// ============================================
// Site Configuration
// Centralized config for easy editing
// ============================================

export const siteConfig = {
  // Personal Info
  name: 'Abdullah Al Hadi',
  role: 'Computer Science Graduate',
  passion: 'Machine Learning',
  location: 'Kedah, Malaysia',
  email: 'abdullahhadi@email.com',
  
  // Social Links
  socials: {
    github: 'https://github.com/hadi8763',
    linkedin: 'https://www.linkedin.com/in/abdullah-al-hadi-005486219',
    facebook: '#',
    email: 'mailto:abdullahhadi@email.com',
  },
  
  // SEO
  title: 'Abdullah Al Hadi | Data Science & AI Portfolio',
  description: 'Portfolio of Abdullah Al Hadi - Computer Science graduate specializing in Data Science, Machine Learning, Generative AI, and AI Automation.',
  
  // Terminal theming
  terminal: {
    prompt: 'guest@abdullah.dev',
    cursor: '▋',
  },
} as const;

// Section numbers for consistent ordering
export const sectionNumbers = {
  about: '01',
  skills: '02',
  projects: '03',
  research: '04',
  experience: '05',
  education: '06',
  contact: '07',
} as const;
