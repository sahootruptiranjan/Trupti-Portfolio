import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Database,
  BarChart3,
  Layers,
  FileText,
  Activity,
  Calendar,
  Bell,
  PieChart
} from 'lucide-react';
import { projectsList } from '../data/profile';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<'all' | 'analytics' | 'software'>('all');

  const internProject: ProjectItem = projectsList[0];
  const zomatoProject: ProjectItem = projectsList[1];
  const ayurSutraProject: ProjectItem = projectsList[2];

  const filterMatches = (projectId: string): boolean => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'analytics') {
      return (
        projectId === 'intern-performance-analytics-dashboard' ||
        projectId === 'zomato-restaurant-data-analysis'
      );
    }
    if (filterCategory === 'software') {
      return projectId === 'ayursutra-panchakarma-management';
    }
    return true;
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 mb-3">
            Featured Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Practical Analytics & Software Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world projects demonstrating end-to-end data pipeline construction, star schema data
            warehousing, exploratory intelligence, and clinical workflow tracking.
          </p>
          <div className="w-16 h-1 bg-accent-cyan rounded-full mt-4" />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${filterCategory === 'all'
                ? 'bg-accent-cyan text-slate-950 shadow-md shadow-accent-cyan/20'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                }`}
            >
              All Projects ({projectsList.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('analytics')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${filterCategory === 'analytics'
                ? 'bg-accent-cyan text-slate-950 shadow-md shadow-accent-cyan/20'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                }`}
            >
              Data Analytics & BI (2)
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('software')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${filterCategory === 'software'
                ? 'bg-accent-cyan text-slate-950 shadow-md shadow-accent-cyan/20'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                }`}
            >
              Software Systems (1)
            </button>
          </div>
        </div>

        {/* =========================================================================
            FLAGSHIP PROJECT 1: Intern Performance Analytics Dashboard
            ========================================================================= */}
        {filterMatches(internProject.id) && (
          <div className="mb-16 rounded-3xl border-2 border-accent-cyan/40 dark:border-accent-cyan/30 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/5 dark:shadow-black/40 overflow-hidden relative group hover:border-accent-cyan/70 transition-all duration-300">
            {/* Subtle Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

            {/* Flagship Top Bar */}
            <div className="px-6 sm:px-8 pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-50/70 dark:bg-slate-950/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-cyan text-slate-950 tracking-wider uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {internProject.badge || 'FLAGSHIP PROJECT'}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-accent-cyan" />
                  Workforce Analytics & Star Schema BI Platform
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Completed Analytics & Report
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
                      {internProject.title}
                    </h3>
                    <p className="text-sm font-mono text-accent-cyan font-medium">
                      {internProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {internProject.description}
                  </p>

                  {/* Analytical Process Flow (4 Key Steps) */}
                  {internProject.processSteps && internProject.processSteps.length > 0 && (
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                          Interactive Architecture Pipeline:
                        </span>
                        <span className="text-[11px] font-mono text-accent-cyan">
                          Step {activeStep + 1} of {internProject.processSteps.length}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {internProject.processSteps.map((step, idx) => (
                          <div
                            key={step.step}
                            onClick={() => setActiveStep(idx)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                setActiveStep(idx);
                              }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Select step ${step.step}: ${step.title}`}
                            className={`group p-3.5 rounded-xl border transition-all cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan ${activeStep === idx
                              ? 'border-accent-cyan bg-accent-cyan/10 dark:bg-accent-cyan/15 shadow-sm ring-1 ring-accent-cyan/40'
                              : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 text-slate-400 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200'
                              }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="text-xs font-mono font-bold text-accent-cyan">
                                {step.step}
                              </span>
                              <span
                                className={`text-xs font-bold transition-colors ${activeStep === idx
                                  ? 'text-slate-900 dark:text-slate-100'
                                  : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white'
                                  }`}
                              >
                                {step.title}
                              </span>
                            </div>
                            <p
                              className={`text-xs leading-snug transition-colors ${activeStep === idx
                                ? 'text-slate-600 dark:text-slate-300'
                                : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200'
                                }`}
                            >
                              {step.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  {internProject.bullets && internProject.bullets.length > 0 && (
                    <div className="pt-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2">
                        Key Accomplishments & Implementation:
                      </span>
                      <ul className="space-y-2">
                        {internProject.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {internProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links & Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={internProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-semibold hover:bg-accent-cyan hover:text-slate-950 dark:hover:bg-accent-cyan dark:hover:text-slate-950 transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-accent-cyan"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>

                    {internProject.liveUrl && internProject.liveUrl !== '#' ? (
                      <a
                        href={internProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-accent-cyan/40 bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan transition-colors text-xs font-mono font-medium"
                      >
                        <FileText className="w-4 h-4" />
                        <span>{internProject.liveStatusText || 'Executive Report (PDF)'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-xs font-mono">
                        <ExternalLink className="w-4 h-4" />
                        <span>{internProject.liveStatusText || 'Report Coming Soon'}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Visual Dashboard Mockup & Metric Cards */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white shadow-2xl relative overflow-hidden">
                    {/* Mock Window Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-slate-300 font-medium">intern_cohort_bi.pbix</span>
                      </div>
                      <span className="text-[11px] text-accent-cyan font-mono font-semibold">
                        POWER BI / MYSQL
                      </span>
                    </div>

                    {/* Chart 1: Cohort Benchmarks & DAX Indicators */}
                    <div className="mt-5 space-y-3.5">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <BarChart3 className="w-3.5 h-3.5 text-accent-cyan" />
                          Cohort Performance Metrics
                        </span>
                        <span className="text-accent-cyan font-semibold">DAX Measures</span>
                      </div>

                      <div className="space-y-3 pt-1">
                        <div>
                          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                            <span>Task Turnaround Efficiency</span>
                            <span className="text-accent-cyan font-semibold">94.2% On-Time</span>
                          </div>
                          <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                            <div className="h-full bg-gradient-to-r from-accent-cyan to-teal-400 rounded-full w-[94%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                            <span>Attendance & Consistency Rate</span>
                            <span className="text-emerald-400 font-semibold">96.4% Regular</span>
                          </div>
                          <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[96%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                            <span>Mentor Assessment Index</span>
                            <span className="text-accent-amber font-semibold">4.6 / 5.0 Avg</span>
                          </div>
                          <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                            <div className="h-full bg-gradient-to-r from-accent-amber to-yellow-400 rounded-full w-[92%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chart 2: Star Schema Warehouse Architecture Grid */}
                    <div className="mt-6 pt-5 border-t border-slate-800">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-teal-400" />
                          Star Schema Architecture
                        </span>
                        <span className="text-teal-400 font-semibold">MySQL 8.0</span>
                      </div>

                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="text-[10px] font-mono text-slate-400">Dim Tables</div>
                          <div className="h-7 flex items-center justify-center font-mono font-bold text-accent-cyan text-sm">
                            4
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="text-[10px] font-mono text-slate-400">Fact Tables</div>
                          <div className="h-7 flex items-center justify-center font-mono font-bold text-teal-400 text-sm">
                            4
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="text-[10px] font-mono text-slate-400">Cohort Size</div>
                          <div className="h-7 flex items-center justify-center font-mono font-bold text-accent-amber text-sm">
                            1,000+
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="text-[10px] font-mono text-slate-400">ETL Pipeline</div>
                          <div className="h-7 flex items-center justify-center font-mono font-bold text-emerald-400 text-xs">
                            Python
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Summary Badge Note */}
                    <div className="mt-5 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>
                        Normalized Star Schema modeled into automated DAX measures feeding cross-pillar
                        interactive Power BI executive views.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SECONDARY PROJECTS: Zomato Restaurant Analytics & AyurSutra Management
            ========================================================================= */}
        <div className="space-y-8 mt-8">
          {/* Zomato Project */}
          {filterMatches(zomatoProject.id) && (
            <div
              key={zomatoProject.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md shadow-slate-900/5 dark:shadow-black/20 p-6 sm:p-8 lg:p-10 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Content */}
                <div className="lg:col-span-8 flex flex-col space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {zomatoProject.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Data Analytics & Business Intelligence
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                      {zomatoProject.title}
                    </h3>
                    <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
                      {zomatoProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {zomatoProject.description}
                  </p>

                  {/* Process Steps */}
                  {zomatoProject.processSteps && (
                    <div className="pt-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2.5">
                        Analytical Pipeline Stages:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {zomatoProject.processSteps.map((step) => (
                          <div
                            key={step.step}
                            className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono font-bold text-accent-cyan">
                                {step.step}
                              </span>
                              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                {step.title}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                              {step.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2">
                      Analytical Highlights:
                    </span>
                    <ul className="space-y-2">
                      {zomatoProject.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {zomatoProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={zomatoProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-accent-cyan"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Profile & Repos</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>

                    {zomatoProject.liveUrl && zomatoProject.liveUrl !== '#' ? (
                      <a
                        href={zomatoProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 transition-colors text-xs font-mono font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{zomatoProject.liveStatusText || 'View Live Dashboard'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 text-xs font-mono font-medium">
                        <BarChart3 className="w-4 h-4 text-accent-cyan" />
                        <span>{zomatoProject.liveStatusText || 'Dashboard (Coming Soon)'}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Abstract Visual */}
                <div className="lg:col-span-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 flex flex-col space-y-4">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <PieChart className="w-3.5 h-3.5 text-accent-cyan" />
                    EDA & BI Modeling Preview
                  </span>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex justify-between text-slate-800 dark:text-slate-200 mb-1 font-semibold">
                        <span>Online Order vs Dine-In</span>
                        <span className="text-accent-cyan">EDA Modeled</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                        Online delivery vs dine-in cluster segmentation
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-accent-cyan w-[64%]" title="Online Delivery (64%)" />
                        <div className="h-full bg-teal-500 w-[36%]" title="Dine-in (36%)" />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>Online (64%)</span>
                        <span>Dine-In (36%)</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex justify-between text-slate-800 dark:text-slate-200 mb-1 font-semibold">
                        <span>Cost Tier Distribution</span>
                        <span className="text-accent-amber">Multivariate</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                        Budget to luxury price-point distribution
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-400">
                          <span>Budget / Casual</span>
                          <span className="text-slate-300">58%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-accent-amber rounded-full w-[58%]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex justify-between text-slate-800 dark:text-slate-200 mb-1 font-semibold">
                        <span>Rating Pattern Clusters</span>
                        <span className="text-emerald-500 dark:text-emerald-400">Evaluated</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Synthesized findings on factors impacting ratings and customer preferences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AyurSutra Project */}
          {filterMatches(ayurSutraProject.id) && (
            <div
              key={ayurSutraProject.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md shadow-slate-900/5 dark:shadow-black/20 p-6 sm:p-8 lg:p-10 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Content */}
                <div className="lg:col-span-8 flex flex-col space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30 uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {ayurSutraProject.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
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

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2">
                      Core Engineering Milestones:
                    </span>
                    <ul className="space-y-2.5">
                      {ayurSutraProject.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {ayurSutraProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={ayurSutraProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-accent-cyan"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Profile & Repos</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Right Abstract Visual */}
                <div className="lg:col-span-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 flex flex-col space-y-4">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-accent-cyan" />
                    Clinical Workflow Architecture
                  </span>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex justify-between text-slate-800 dark:text-slate-200 mb-1 font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                          Therapy Regimen
                        </span>
                        <span className="text-accent-cyan">Automated</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Multi-stage Panchakarma regimen sequencing and timetable scheduling.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex justify-between text-slate-800 dark:text-slate-200 mb-1 font-semibold">
                        <span className="flex items-center gap-1">
                          <Bell className="w-3.5 h-3.5 text-accent-amber" />
                          Patient Precaution Alerts
                        </span>
                        <span className="text-accent-amber">Channels</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Pre- and post-procedure clinical precautions sent via notification system.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex justify-between text-slate-800 dark:text-slate-200 mb-1 font-semibold">
                        <span>Recovery Milestones</span>
                        <span className="text-emerald-500 dark:text-emerald-400">Real-Time</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
                        Interactive therapy tracking and patient progress monitoring.
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[82%] rounded-full" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex justify-between text-slate-800 dark:text-slate-200 mb-1 font-semibold">
                        <span>Dynamic Feedback</span>
                        <span className="text-teal-400">Closed Loop</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Symptom feedback loop enables practitioners to refine treatment schedules.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
