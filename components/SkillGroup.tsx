import React from 'react';

interface SkillGroupProps {
  title: string;
  skills: string[];
  activeFilter?: string;
  onSkillClick?: (skill: string) => void;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills, activeFilter, onSkillClick }) => {
  return (
    <div className="mb-6 last:mb-0">
      <h5 className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-3 font-display flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
        {title}
      </h5>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => {
          const isActive = activeFilter === skill;
          return (
            <button
              key={idx}
              onClick={() => onSkillClick && onSkillClick(skill)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shadow-2xs print:shadow-none print:bg-white print:border-slate-300 print:text-slate-800 ${
                isActive
                  ? 'bg-amber-500 text-slate-950 font-bold scale-105 shadow-md shadow-amber-500/20'
                  : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:border-amber-500/60 dark:hover:border-amber-400/60 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
            >
              {skill}
            </button>
          );
        })}
      </div>
    </div>
  );
};