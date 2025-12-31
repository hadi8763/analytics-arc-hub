import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { SocialBar } from '@/components/SocialBar';
import { CustomCursor } from '@/components/CustomCursor';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ScrollProgress } from '@/components/ScrollProgress';
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
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Abdullah Al Hadi - Final-year Computer Science student specializing in Data Science, Machine Learning, and Analytics.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <Sidebar />
      <TopBar />
      <SocialBar />
      
      <main className="lg:ml-[220px] pt-12 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 text-center border-t border-border">
          <p className="text-muted-foreground font-mono text-sm hover-glow">
            © 2025 Abdullah Al Hadi. Built with React & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
