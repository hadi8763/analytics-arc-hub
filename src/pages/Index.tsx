import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { SocialBar } from '@/components/SocialBar';
import { CustomCursor } from '@/components/CustomCursor';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SplashScreen } from '@/components/SplashScreen';
import { MatrixRain } from '@/components/MatrixRain';
import { FloatingShapes } from '@/components/FloatingShapes';
import { CRTEffect } from '@/components/CRTEffect';
import { BackToTop } from '@/components/BackToTop';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ResearchSection } from '@/sections/ResearchSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { EducationSection } from '@/sections/EducationSection';
import { ContactSection } from '@/sections/ContactSection';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/constants/siteConfig';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = siteConfig.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteConfig.description);
    }
  }, []);

  return (
    <>
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      
      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CustomCursor />
        <MatrixRain />
        <ParticleBackground />
        <FloatingShapes />
        <CRTEffect />
        <ScrollProgress />
        <Sidebar />
        <TopBar />
        <SocialBar />
        <BackToTop />
        
        <main className="lg:ml-[220px] pt-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
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
                © 2025 {siteConfig.name}. Built with React & Tailwind CSS
              </p>
            </footer>
          </motion.div>
        </main>
      </motion.div>
    </>
  );
};

export default Index;
