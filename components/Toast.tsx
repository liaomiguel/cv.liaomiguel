import React from 'react';
import { Check } from './Icons';

interface ToastProps {
  message: string;
  show: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 px-4 py-2.5 rounded-full shadow-xl border border-slate-700 dark:border-amber-400 text-xs font-bold tracking-wide transition-all duration-300 animate-bounce print-hidden">
      <Check className="w-4 h-4 text-emerald-400 dark:text-slate-950" />
      <span>{message}</span>
    </div>
  );
};
