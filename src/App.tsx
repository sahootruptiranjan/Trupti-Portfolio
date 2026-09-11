import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationTimeline } from './components/EducationTimeline';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy([
    'about',
    'skills',
    'projects',
    'education',
    'certifications',
    'contact'
  ]);

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark bg-dark-bg text-slate-100' : 'bg-light-bg text-slate-800'}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main className="flex-grow">
        <Hero />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <EducationTimeline />
        <Certifications />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
