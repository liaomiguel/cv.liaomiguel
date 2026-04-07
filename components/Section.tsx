import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  compact?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children, compact = false }) => {
  return (
    <section className={`mb-10 ${compact ? 'mb-6' : ''} print:mb-4 page-break-inside-avoid`}>
      <div className="flex items-center gap-3 mb-5 print:mb-3 border-b border-slate-200 pb-2">
        {icon && <span className="p-1.5 bg-amber-50 rounded-md print:bg-transparent print:p-0">{icon}</span>}
        <h3 className={`font-bold text-slate-800 uppercase tracking-wider ${compact ? 'text-sm' : 'text-lg'}`}>
          {title}
        </h3>
      </div>
      <div className="text-slate-700">
        {children}
      </div>
    </section>
  );
};