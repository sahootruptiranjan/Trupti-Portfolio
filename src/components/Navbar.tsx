import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/profile';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background elevation on scroll
      setScrolled(window.scrollY > 20);

      // Top scroll progress bar calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-slate-800/80 dark:border-dark-border/80 shadow-lg shadow-black/5' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-accent-cyan via-teal-400 to-accent-amber transition-all duration-75 z-50"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-lg p-1"
            aria-label="Trupti Ranjan Sahoo Home"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 border border-slate-700 dark:border-slate-700/80 flex items-center justify-center text-accent-cyan font-mono font-bold text-sm tracking-wider shadow-sm group-hover:border-accent-cyan/60 group-hover:shadow-glow-cyan transition-all duration-300">
              <span className="text-accent-cyan">{personalInfo.initials}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-slate-100 group-hover:text-accent-cyan transition-colors">
                Trupti<span className="text-accent-cyan">.data</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId || (link.href === '#hero' && !activeSection);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-accent-cyan font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-accent-cyan rounded-full shadow-glow-cyan" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-slate-700 dark:border-slate-800 bg-slate-800/60 dark:bg-slate-800/60 text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-cyan"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-accent-amber animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-200" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumePdfPath}
              download="Trupti_Ranjan_Sahoo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg bg-accent-cyan text-slate-950 hover:bg-teal-300 hover:shadow-glow-cyan transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-cyan active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-700 dark:border-slate-800 bg-slate-800/60 text-slate-300 hover:text-accent-cyan transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-accent-amber" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-slate-700 dark:border-slate-800 bg-slate-800/60 text-slate-200 hover:text-accent-cyan transition-colors focus-visible:ring-2 focus-visible:ring-accent-cyan min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-900/95 dark:bg-dark-bg/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-fade-in">
          <nav aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-cyan/10 text-accent-cyan font-semibold border-l-4 border-accent-cyan'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={personalInfo.resumePdfPath}
              download="Trupti_Ranjan_Sahoo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-semibold uppercase tracking-wider rounded-lg bg-accent-cyan text-slate-950 hover:bg-teal-300 shadow-glow-cyan transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
