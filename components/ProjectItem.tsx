import React from 'react';
import { Project } from '../data';
import { FolderGit2 } from './Icons';

interface ProjectItemProps {
  data: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ data }) => {
  return (
    <div className="group bg-slate-50 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200/80 dark:border-slate-700/70 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 print:bg-white print:border-slate-200 print:shadow-none break-inside-avoid">
      <div className="flex justify-between items-start mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
            <FolderGit2 className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base font-display group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {data.name}
          </h4>
        </div>
      </div>
      
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        {data.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5">
        {data.tech.map((t, i) => (
          <span 
            key={i} 
            className="text-[11px] font-semibold text-slate-700 dark:text-amber-300 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-md shadow-2xs print:bg-slate-100 print:border-none print:text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};