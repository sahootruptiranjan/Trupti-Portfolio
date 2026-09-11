import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { educationList } from '../data/profile';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 mb-3">
            Academic Pathway
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Formal Education & Qualifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl">
            Strong scholastic track record in Computer Applications, analytical mathematics, and data architecture.
          </p>
          <div className="w-12 h-1 bg-accent-cyan rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-200 dark:border-slate-800 space-y-12 ml-4 sm:ml-8">
          {educationList.map((item) => {
            return (
              <div key={item.degree} className="relative group">
                
                {/* Timeline Dot with Data-Chart Node Motif */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 ${
                  item.current
                    ? 'border-accent-cyan bg-slate-950 shadow-glow-cyan'
                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                } flex items-center justify-center transition-all duration-200 group-hover:scale-110`} />

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md shadow-slate-900/5 dark:shadow-black/20 hover:border-accent-cyan/40 hover:shadow-glow-cyan transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      {item.period}
                    </span>

                    {item.current && (
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Current Enrollment
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-600 dark:text-slate-300 mb-4">
                    <span className="flex items-center gap-1.5 font-medium">
                      <GraduationCap className="w-4 h-4 text-accent-cyan" />
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>

                  {/* Score Pill */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-mono font-bold">
                    <Award className="w-4 h-4" />
                    <span>{item.score}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
