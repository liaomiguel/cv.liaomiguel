import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  compact?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children, compact = false }) => {
  return (
    <section className={`mb-10 ${compact ? 'mb-6' : ''} print:mb-5 page-break-inside-avoid`}>
      <div className="flex items-center gap-3 mb-5 print:mb-3 border-b border-slate-200 dark:border-slate-700/80 pb-2.5">
        {icon && (
          <span className="p-2 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 print:bg-transparent print:p-0">
            {icon}
          </span>
        )}
        <h3 className={`font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider font-display ${compact ? 'text-sm' : 'text-lg'}`}>
          {title}
        </h3>
      </div>
      <div className="text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </section>
  );
};