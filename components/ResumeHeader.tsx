import React from 'react';
import { Mail, Github, MapPin } from './Icons';
import { Social } from '../data';

interface ResumeHeaderProps {
  profile: {
    name: string;
    title: string;
    location: string;
  };
  social: Social;
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({ profile, social }) => {
  return (
    <header className="bg-slate-850 text-white p-8 md:p-12 print:bg-slate-900 print:text-white print:p-10">
      <div className="flex flex-col md:flex-row print:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">
            {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-amber-400 font-medium mb-4">
            {profile.title}
          </h2>
        </div>
        
        <div className="flex flex-col gap-3 text-slate-300 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-amber-400" />
            <a href={`mailto:${social.email}`} className="hover:text-white transition-colors">
              {social.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Github className="w-4 h-4 text-amber-400" />
            <a href={`https://${social.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {social.github}
            </a>
          </div>
          {profile.location && (
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{profile.location}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};