import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { projectsList } from '../data/profile';

export const ProjectsSection: React.FC = () => {
  const zomatoProject = projectsList[0];
  const ayurSutraProject = projectsList[1];

  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 mb-3">
            Featured Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Practical Analytics & Software Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
            Real-world projects demonstrating end-to-end data pipeline construction, exploratory intelligence, and clinical workflow tracking.
          </p>
          <div className="w-12 h-1 bg-accent-cyan rounded-full mt-4" />
        </div>

        {/* =========================================================================
            FLAGSHIP PROJECT: Zomato Restaurant Data Analysis
            ========================================================================= */}
        <div className="mb-16 rounded-3xl border-2 border-accent-cyan/30 dark:border-accent-cyan/20 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/5 dark:shadow-black/30 overflow-hidden relative group hover:border-accent-cyan/60 transition-all duration-300">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

          {/* Flagship Top Bar */}
          <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-cyan text-slate-950 tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                {zomatoProject.badge}
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Data Analytics & Business Intelligence
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Completed Analysis
              </span>
            </div>
          </div>

          {/* Flagship Main Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Context, Process, Bullets, Actions */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    {zomatoProject.title}
                  </h3>
                  <p className="text-sm font-mono text-accent-cyan">
                    {zomatoProject.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {zomatoProject.description}
                </p>

                {/* Analytical Process Flow (4 Key Steps) */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                    Analytical Pipeline & Execution:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {zomatoProject.processSteps?.map((step, idx) => (
                      <div
                        key={step.step}
                        onClick={() => setActiveStep(idx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          activeStep === idx
                            ? 'border-accent-cyan bg-accent-cyan/10 dark:bg-accent-cyan/10 shadow-sm'
                            : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono font-bold text-accent-cyan">{step.step}</span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{step.title}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {zomatoProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={zomatoProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-semibold hover:bg-accent-cyan hover:text-slate-950 dark:hover:bg-accent-cyan dark:hover:text-slate-950 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-accent-cyan"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 text-xs sm:text-sm font-mono cursor-not-allowed"
                    title="Live Tableau/Power BI dashboard deployment link coming soon"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Dashboard (Coming Soon)</span>
                  </button>
                </div>

              </div>

              {/* Right Column: Abstract Interactive Data Visualization Motif */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                
                {/* Visual Dashboard Card Mockup */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white shadow-xl relative overflow-hidden">
                  
                  {/* Mock Window Controls */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-slate-300">zomato_analytics_bi.view</span>
                    </div>
                    <span className="text-[11px] text-accent-cyan font-mono">TABLEAU / POWER BI</span>
                  </div>

                  {/* Abstract Chart 1: Rating Distribution Bars */}
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Rating Pattern vs Order Channel</span>
                      <span className="text-accent-cyan font-semibold">EDA Insights</span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                          <span>Online Delivery Outlets</span>
                          <span className="text-accent-cyan">Higher Rating Volume</span>
                        </div>
                        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                          <div className="h-full bg-gradient-to-r from-accent-cyan to-teal-400 rounded-full w-[82%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                          <span>Dine-In Exclusive Outlets</span>
                          <span className="text-slate-400">Specialty Distribution</span>
                        </div>
                        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                          <div className="h-full bg-gradient-to-r from-slate-600 to-slate-400 rounded-full w-[54%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                          <span>Table Booking Enabled</span>
                          <span className="text-accent-amber">Premium Cost Tier</span>
                        </div>
                        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                          <div className="h-full bg-gradient-to-r from-accent-amber to-yellow-400 rounded-full w-[68%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Abstract Chart 2: Cost Variations & Cuisine Spread */}
                  <div className="mt-6 pt-5 border-t border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                      <span>Multivariate Clustering</span>
                      <span className="text-teal-400">Cost Variation</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400">Budget</div>
                        <div className="h-8 flex items-end justify-center">
                          <div className="w-4 bg-accent-cyan/60 rounded-t h-[75%]" />
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400">Mid-Tier</div>
                        <div className="h-8 flex items-end justify-center">
                          <div className="w-4 bg-accent-cyan rounded-t h-[95%]" />
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400">Premium</div>
                        <div className="h-8 flex items-end justify-center">
                          <div className="w-4 bg-accent-amber/80 rounded-t h-[45%]" />
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400">Luxury</div>
                        <div className="h-8 flex items-end justify-center">
                          <div className="w-4 bg-slate-600 rounded-t h-[25%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Factual Note */}
                  <div className="mt-5 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                    <span>Tableau & Power BI visual modeling synthesized from cleaned Python/SQL tables.</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            PROJECT 2: AyurSutra: Panchakarma Patient Management Software
            ========================================================================= */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md shadow-slate-900/5 dark:shadow-black/20 p-6 sm:p-8 lg:p-10 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {ayurSutraProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  Healthcare Technology & Clinical Management
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {ayurSutraProject.title}
                </h3>
                <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
                  {ayurSutraProject.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {ayurSutraProject.description}
              </p>

              {/* Exact Resume Bullets */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Core Engineering Milestones:
                </span>
                <ul className="space-y-2.5">
                  {ayurSutraProject.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {ayurSutraProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <div className="pt-2">
                <a
                  href={ayurSutraProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-accent-cyan"
                >
                  <Github className="w-4 h-4" />
                  <span>View Profile & Repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Right HealthTech Abstract Visual */}
            <div className="lg:col-span-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex flex-col space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Clinical Tracking Architecture</span>
              
              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
                    <span>Therapy Scheduling</span>
                    <span className="text-accent-cyan">Automated</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Multi-stage Panchakarma regimen sequencing</div>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
                    <span>Patient Alerts</span>
                    <span className="text-accent-amber">Notification Channels</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Pre & post procedure clinical precautions</div>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
                    <span>Milestone Tracking</span>
                    <span className="text-emerald-400">Real-Time Progress</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-1.5">
                    <div className="bg-emerald-400 h-full w-3/4 rounded-full" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
                    <span>Dynamic Feedback</span>
                    <span className="text-teal-400">Closed Loop</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Symptom reporting to refine practitioner schedules</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
