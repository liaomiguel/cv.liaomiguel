import React from 'react';
import { Mail, Github, MapPin, Copy, ExternalLink, Sparkles } from './Icons';
import { Social } from '../data';

interface ResumeHeaderProps {
  profile: {
    name: string;
    title: string;
    location: string;
  };
  social: Social;
  onCopyEmail: () => void;
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({ profile, social, onCopyEmail }) => {
  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white p-8 md:p-12 border-b border-slate-800 print:bg-slate-900 print:text-white print:p-8 print:border-none overflow-hidden">
      
      {/* Background Decorative Blur Glows (Screen only) */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none print-hidden"></div>
      <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none print-hidden"></div>

      <div className="relative z-10 flex flex-col md:flex-row print:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-3">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide print:hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Senior Full Stack & Arquitecto Backend</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            {profile.name}
          </h1>

          <h2 className="text-xl md:text-2xl text-amber-400 dark:text-amber-300 font-semibold tracking-wide font-display">
            {profile.title}
          </h2>
        </div>

        {/* Contact Chips */}
        <div className="flex flex-col gap-2.5 text-slate-300 text-sm w-full md:w-auto">
          
          {/* Email Chip with Copy Action */}
          <button
            onClick={onCopyEmail}
            className="group flex items-center justify-between md:justify-start gap-3 bg-slate-800/80 hover:bg-slate-800 dark:bg-slate-900/90 dark:hover:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700/80 hover:border-amber-500/50 transition-all duration-200 text-left print:bg-transparent print:border-none print:p-0"
            title="Hacer clic para copiar email"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-medium text-slate-200 group-hover:text-amber-300 transition-colors">
                {social.email}
              </span>
            </div>
            <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors print-hidden ml-2" />
          </button>

          {/* GitHub Chip */}
          <a
            href={`https://${social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between md:justify-start gap-3 bg-slate-800/80 hover:bg-slate-800 dark:bg-slate-900/90 dark:hover:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700/80 hover:border-amber-500/50 transition-all duration-200 print:bg-transparent print:border-none print:p-0"
          >
            <div className="flex items-center gap-2.5">
              <Github className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-medium text-slate-200 group-hover:text-amber-300 transition-colors">
                {social.github}
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors print-hidden ml-2" />
          </a>

          {/* Location Chip */}
          {profile.location && (
            <div className="flex items-center gap-2.5 px-3.5 py-2 text-slate-400 text-xs font-medium print:p-0 print:text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{profile.location}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};