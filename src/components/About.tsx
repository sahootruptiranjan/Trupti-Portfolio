import React from 'react';
import { Database, LineChart, Cpu, GraduationCap, MapPin, Briefcase, Award } from 'lucide-react';

export const About: React.FC = () => {

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 mb-3">
            About Me
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Analytical Rigor & Data-Driven Purpose
          </h2>
          <div className="w-12 h-1 bg-accent-cyan rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Narrative & Mission */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a Master of Computer Applications (MCA) student at <span className="font-semibold text-slate-900 dark:text-white">MS Ramaiah University of Applied Sciences, Bengaluru</span>, where I achieved an initial <span className="text-accent-cyan font-semibold">8.55 CGPA</span> in Semester 1. My academic foundation began with a Bachelor of Computer Applications (BCA) at <span className="font-semibold text-slate-900 dark:text-white">N.C. Autonomous College</span> in Odisha (7.96 CGPA), where I grounded myself in computer science fundamentals, data structures, algorithms, and databases.
            </p>

            <p>
              My focus lies in turning raw, messy datasets into structured, dependable intelligence. Through hands-on analytical projects like the <span className="font-semibold text-slate-900 dark:text-white">Zomato Restaurant Data Analysis</span>, I have worked with Python, SQL, MS Excel, Tableau, and Power BI to clean unstructured data, handle missing values and duplicates, and build clear interactive dashboards that highlight rating factors, cost variations, and consumer preferences.
            </p>

            <p>
              I am actively seeking a <span className="text-accent-cyan font-semibold">Data Analytics / Data Science internship</span> where I can collaborate with teams to clean and analyze large datasets, engineer predictive models, and provide clear data visualizations that empower stakeholders to make confident, fact-backed decisions.
            </p>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">Data Cleaning</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Handling nulls, duplicates, and inconsistent structures via Python & SQL.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-3">
                  <LineChart className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">BI Dashboards</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Building visual storytelling reports in Tableau and Power BI.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-accent-amber/10 text-accent-amber flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">Applied Modeling</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Predictive modeling and foundational machine learning techniques.</p>
              </div>
            </div>
          </div>

          {/* Right: Quick Facts Card & Academic Verification */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Quick Profile Summary Card */}
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-lg shadow-slate-900/5 dark:shadow-black/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent-cyan" />
                <span>Profile Snapshot</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                    <span>Current Degree</span>
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                    MCA (2025 – Present)
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span>Current Institution</span>
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                    MS Ramaiah University
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span>Semester 1 CGPA</span>
                  </span>
                  <span className="font-mono font-bold text-accent-cyan text-right">
                    8.55 / 10.0
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>Location</span>
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                    Bengaluru, Karnataka
                  </span>
                </div>

                <div className="flex items-start justify-between pt-1">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <span>Role Target</span>
                  </span>
                  <span className="font-semibold text-accent-cyan text-right">
                    Data Analytics Internship
                  </span>
                </div>
              </div>

              {/* Status Banner */}
              <div className="mt-6 p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center gap-3 text-xs text-accent-cyan font-mono">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shrink-0" />
                <span>Actively interviewing & open to relocation/remote roles</span>
              </div>
            </div>

            {/* Abstract Data Pipeline Graphic */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">Analytical Workflow</span>
              <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-300">
                <span className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800">Raw Data</span>
                <span className="text-accent-cyan">→</span>
                <span className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800">Cleaning</span>
                <span className="text-accent-cyan">→</span>
                <span className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800">EDA</span>
                <span className="text-accent-cyan">→</span>
                <span className="px-2.5 py-1 rounded bg-accent-cyan/15 text-accent-cyan font-semibold">Insight</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
