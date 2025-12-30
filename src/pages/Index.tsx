import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ResearchSection } from '@/sections/ResearchSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { EducationSection } from '@/sections/EducationSection';
import { ContactSection } from '@/sections/ContactSection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = 'Abdullah Al Hadi | Data Science Portfolio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Abdullah Al Hadi - Final-year Computer Science student specializing in Data Science, Machine Learning, and Analytics. View projects, research publications, and professional experience.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Portfolio of Abdullah Al Hadi - Final-year Computer Science student specializing in Data Science, Machine Learning, and Analytics. View projects, research publications, and professional experience.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
