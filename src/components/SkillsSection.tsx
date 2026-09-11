import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  Search, 
  Filter, 
  TrendingUp, 
  Cpu, 
  LayoutGrid, 
  Table, 
  Code, 
  Coffee, 
  Terminal, 
  Globe, 
  Palette, 
  Sparkles, 
  Server, 
  GitBranch, 
  Github, 
  Binary, 
  MessageSquare, 
  Lightbulb, 
  CheckCircle2, 
  Users, 
  RefreshCw,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/profile';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Icon mapping helper
  const getSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case 'database': return <Database className="w-4 h-4 text-accent-cyan" />;
      case 'search': return <Search className="w-4 h-4 text-sky-400" />;
      case 'filter': return <Filter className="w-4 h-4 text-teal-400" />;
      case 'trending-up': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'cpu': return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'bar-chart-3': return <BarChart3 className="w-4 h-4 text-accent-cyan" />;
      case 'layout-grid': return <LayoutGrid className="w-4 h-4 text-accent-amber" />;
      case 'table': return <Table className="w-4 h-4 text-emerald-400" />;
      case 'code': return <Code className="w-4 h-4 text-yellow-400" />;
      case 'coffee': return <Coffee className="w-4 h-4 text-orange-400" />;
      case 'terminal': return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'globe': return <Globe className="w-4 h-4 text-orange-500" />;
      case 'palette': return <Palette className="w-4 h-4 text-sky-400" />;
      case 'sparkles': return <Sparkles className="w-4 h-4 text-yellow-400" />;
      case 'server': return <Server className="w-4 h-4 text-blue-400" />;
      case 'git-branch': return <GitBranch className="w-4 h-4 text-rose-400" />;
      case 'github': return <Github className="w-4 h-4 text-slate-400" />;
      case 'binary': return <Binary className="w-4 h-4 text-indigo-400" />;
      case 'message-square': return <MessageSquare className="w-4 h-4 text-teal-400" />;
      case 'lightbulb': return <Lightbulb className="w-4 h-4 text-amber-400" />;
      case 'check-circle': return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'users': return <Users className="w-4 h-4 text-sky-400" />;
      case 'refresh-cw': return <RefreshCw className="w-4 h-4 text-indigo-400" />;
      default: return <Sparkles className="w-4 h-4 text-accent-cyan" />;
    }
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'analytics' && (cat.category.includes('Analytics') || cat.category.includes('Visualization'))) return true;
    if (activeFilter === 'dev' && (cat.category.includes('Programming') || cat.category.includes('Web') || cat.category.includes('Databases'))) return true;
    if (activeFilter === 'tools' && (cat.category.includes('Tools') || cat.category.includes('Core'))) return true;
    if (activeFilter === 'soft' && cat.isSoftSkill) return true;
    return false;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 mb-3">
            Technical Matrix
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Competencies & Tools
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl">
            Grouped cleanly by specialized domain — no arbitrary percentage bars, only proven tools and methodologies.
          </p>
          <div className="w-12 h-1 bg-accent-cyan rounded-full mt-4" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Domains' },
            { id: 'analytics', label: 'Data & BI' },
            { id: 'dev', label: 'Languages & DB' },
            { id: 'tools', label: 'Platforms & Concepts' },
            { id: 'soft', label: 'Professional Soft Skills' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-mono rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                activeFilter === tab.id
                  ? 'bg-accent-cyan text-slate-950 font-semibold shadow-glow-cyan'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:border-accent-cyan/40 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const isSoft = group.isSoftSkill;

            return (
              <div
                key={group.category}
                className={`rounded-2xl p-6 transition-all duration-300 ${
                  isSoft
                    ? 'border-2 border-dashed border-teal-500/40 bg-teal-500/5 dark:bg-teal-950/15 shadow-sm'
                    : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-md shadow-slate-900/5 dark:shadow-black/20 hover:border-accent-cyan/40 hover:shadow-glow-cyan'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSoft ? 'bg-teal-500/20 text-teal-400' : 'bg-slate-100 dark:bg-slate-800 text-accent-cyan'
                    }`}>
                      {isSoft ? <Users className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                    </div>
                    <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>
                  {group.badge && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSoft 
                        ? 'bg-teal-500/20 text-teal-300' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}>
                      {group.badge}
                    </span>
                  )}
                </div>

                {/* Skill Chips / Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 group ${
                        isSoft
                          ? 'bg-white dark:bg-slate-900/80 text-teal-700 dark:text-teal-200 border border-teal-500/30 hover:border-teal-400 hover:scale-[1.02]'
                          : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/70 hover:border-accent-cyan/60 hover:text-accent-cyan hover:scale-[1.02]'
                      }`}
                    >
                      {getSkillIcon(skill.icon)}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>

                {isSoft && (
                  <p className="mt-4 pt-3 border-t border-teal-500/20 text-[11px] font-sans text-teal-700/80 dark:text-teal-300/80">
                    Interpersonal & teamwork capabilities demonstrated through academic collaboration and project workflows.
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
