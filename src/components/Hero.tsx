import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/profile';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        setFadeState('in');
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background Subtle Data Grids & Ambient Glows */}
      <div className="absolute inset-0 data-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-accent-amber/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Rotating Role, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-medium tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span>Available for Data Analytics & BI Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-teal-400 to-sky-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Rotating Role Text */}
            <div className="h-9 mb-6 flex items-center">
              <span className="text-lg sm:text-2xl font-mono text-slate-600 dark:text-slate-300 font-semibold flex items-center gap-2">
                <span className="text-accent-cyan">&gt;</span>
                <span 
                  className={`inline-block transition-all duration-300 transform ${
                    fadeState === 'in' ? 'opacity-100 translate-y-0 text-slate-900 dark:text-white' : 'opacity-0 -translate-y-2 text-slate-400'
                  }`}
                >
                  {personalInfo.roles[roleIndex]}
                </span>
                <span className="w-2 h-5 bg-accent-cyan animate-pulse" />
              </span>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              MCA student with hands-on experience in <strong>Python</strong>, <strong>SQL</strong>, <strong>MS Excel</strong>, <strong>Tableau</strong>, and <strong>Power BI</strong>. Focused on exploratory data analysis, data cleaning pipelines, and interactive executive dashboards that drive informed decision-making.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-cyan text-slate-950 font-semibold hover:bg-teal-300 hover:shadow-glow-cyan transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-cyan active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePdfPath}
                download="Trupti_Ranjan_Sahoo_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-cyan active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons & Email Quick Connect */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Connect:</span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-sm transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-sm transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-sm transition-all"
                aria-label="Send an Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Headshot Photo + Floating Micro-Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Backing Frame & Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent-cyan/30 via-teal-500/10 to-accent-amber/20 rounded-3xl blur-xl opacity-70" />
              
              {/* Photo Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/10 dark:shadow-black/40">
                <div className="aspect-[4/4.5] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src="./images/profile.jpg"
                    alt="Trupti Ranjan Sahoo, Data Analytics professional headshot"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  {/* Subtle Dark Gradient Overlay at Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Caption Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 text-accent-cyan">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Profile</span>
                    </span>
                    <span className="text-slate-400">Bangalore, IN</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Micro-Card 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-lg shadow-black/10 flex items-center gap-2.5 animate-pulse-subtle">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/15 text-accent-cyan flex items-center justify-center font-mono font-bold text-xs">
                  MCA
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Education</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">MS Ramaiah Univ</span>
                </div>
              </div>

              {/* Floating Stat Micro-Card 2 (Bottom Right) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 p-3 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-lg shadow-black/10 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-accent-amber/15 text-accent-amber flex items-center justify-center font-mono font-bold text-xs">
                  8.55
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">MCA Sem 1</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">CGPA Achieved</span>
                </div>
              </div>

              {/* Floating Stat Micro-Card 3 (Bottom Left) */}
              <div className="hidden sm:flex absolute bottom-8 -left-8 p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-lg shadow-black/10 items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  Python · SQL · Tableau · Power BI
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
