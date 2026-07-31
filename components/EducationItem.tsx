import React from 'react';
import { Education } from '../data';

interface EducationItemProps {
  data: Education;
}

export const EducationItem: React.FC<EducationItemProps> = ({ data }) => {
  return (
    <div className="mb-4 last:mb-0 pl-3 border-l-2 border-amber-500/40 dark:border-amber-400/40">
      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 font-display">
        {data.degree}
      </h4>
      <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">
        {data.institution}
      </div>
      <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
        {data.period}
      </div>
    </div>
  );
};