import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsList } from '../data/profile';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 mb-3">
            Credentials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications & Workshops
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl">
            Specialized training in Artificial Intelligence development, modern version control, and productivity tooling.
          </p>
          <div className="w-12 h-1 bg-accent-cyan rounded-full mt-4" />
        </div>

        {/* 3 Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certificationsList.map((cert) => (
            <div
              key={cert.title}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md shadow-slate-900/5 dark:shadow-black/20 hover:border-accent-cyan/50 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-6">
                  Issued by: <span className="text-accent-cyan font-semibold">{cert.issuer}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Completion</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
