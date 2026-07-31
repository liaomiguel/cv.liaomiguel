import React from 'react';
import { Experience } from '../data';

interface ExperienceItemProps {
  data: Experience;
  isFirst?: boolean;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ data, isFirst }) => {
  return (
    <div className="relative pl-6 md:pl-8 border-l-2 border-slate-200 dark:border-slate-700/80 last:mb-0 mb-8 break-inside-avoid group">
      
      {/* Timeline Node Icon/Dot */}
      <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
        isFirst 
          ? 'bg-amber-500 border-amber-300 shadow-md shadow-amber-500/50' 
          : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600 group-hover:border-amber-500 group-hover:scale-125'
      } print:border-amber-600 print:bg-amber-600`} />

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-display group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {data.role}
        </h4>
        <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full whitespace-nowrap self-start sm:self-auto print:text-slate-900 print:bg-transparent print:border-none print:p-0">
          {data.period}
        </span>
      </div>

      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
        {data.company}
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3.5 italic leading-relaxed">
        {data.description}
      </p>

      {/* Achievements List */}
      <ul className="space-y-2">
        {data.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
            <span className="mr-2.5 mt-1.5 w-1.5 h-1.5 bg-amber-500 dark:bg-amber-400 rounded-full flex-shrink-0"></span>
            <span className="leading-snug">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};