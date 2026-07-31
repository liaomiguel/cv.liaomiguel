import React, { useState, useEffect } from 'react';
import { ResumeHeader } from './components/ResumeHeader';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectItem } from './components/ProjectItem';
import { SkillGroup } from './components/SkillGroup';
import { EducationItem } from './components/EducationItem';
import { PrintButton } from './components/PrintButton';
import { ThemeToggle } from './components/ThemeToggle';
import { Toast } from './components/Toast';
import { RESUME_DATA } from './data';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  FolderGit2, 
  Award, 
  Languages,
  Sparkles
} from './components/Icons';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);

  // Sync dark mode class with root html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.social.email);
    setToastMessage('¡Email copiado al portapapeles!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSkillClick = (skill: string) => {
    if (activeSkillFilter === skill) {
      setActiveSkillFilter(null);
    } else {
      setActiveSkillFilter(skill);
    }
  };

  // Filter projects by active skill if selected
  const filteredProjects = activeSkillFilter
    ? RESUME_DATA.projects.filter(p => 
        p.tech.some(t => t.toLowerCase().includes(activeSkillFilter.toLowerCase())) ||
        activeSkillFilter.toLowerCase().includes(p.name.toLowerCase())
      )
    : RESUME_DATA.projects;

  return (
    <div className="min-h-screen py-6 px-3 sm:px-6 lg:px-8 flex flex-col items-center print:block print:p-0 print:m-0 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-100 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Floating Control Bar (Screen only) */}
      <div className="w-full max-w-5xl mb-4 flex justify-between items-center px-2 print-hidden">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-400">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">CV Interactivo & Portafolio</span>
        </div>
        <div className="flex items-center gap-3">
          {activeSkillFilter && (
            <button
              onClick={() => setActiveSkillFilter(null)}
              className="text-xs bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3 py-1.5 rounded-xl hover:bg-amber-500/30 transition-all"
            >
              Filtro: {activeSkillFilter} ✕
            </button>
          )}
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          <PrintButton />
        </div>
      </div>

      {/* Main Resume Container */}
      <main className="w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none print:w-full print:max-w-full print:border-none print:bg-white print:text-slate-900">
        
        {/* Header Section */}
        <ResumeHeader 
          profile={RESUME_DATA.profile} 
          social={RESUME_DATA.social} 
          onCopyEmail={handleCopyEmail}
        />

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row print:flex-row">
          
          {/* Main Column (Left - 65%) */}
          <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-10 border-r-0 md:border-r border-slate-200 dark:border-slate-800 print:w-2/3 print:p-8 print:border-r print:border-slate-200">
            
            {/* Professional Profile */}
            <Section title="Perfil Profesional" icon={<Code2 className="w-5 h-5" />}>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base text-justify">
                {RESUME_DATA.summary}
              </p>
            </Section>

            {/* Experience */}
            <Section title="Experiencia Laboral" icon={<Briefcase className="w-5 h-5" />}>
              <div className="space-y-6">
                {RESUME_DATA.experience.map((job, index) => (
                  <ExperienceItem key={index} data={job} isFirst={index === 0} />
                ))}
              </div>
            </Section>

            {/* Projects (Highlighted) */}
            <div className="page-break-inside-avoid">
              <Section title="Proyectos & Arquitecturas Destacadas" icon={<FolderGit2 className="w-5 h-5" />}>
                <div className="grid grid-cols-1 gap-4">
                  {(filteredProjects.length > 0 ? filteredProjects : RESUME_DATA.projects).map((project, index) => (
                    <ProjectItem key={index} data={project} />
                  ))}
                </div>
              </Section>
            </div>
          </div>

          {/* Sidebar Column (Right - 35%) */}
          <div className="w-full md:w-1/3 bg-slate-50/70 dark:bg-slate-950/50 p-6 sm:p-8 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 print:w-1/3 print:bg-slate-50 print:p-6 print:border-l print:border-slate-200">
            
            {/* Skills */}
            <Section title="Stack Tecnológico" icon={<Code2 className="w-5 h-5" />} compact>
              <div className="space-y-4">
                <SkillGroup 
                  title="Backend & Core" 
                  skills={RESUME_DATA.skills.backend} 
                  activeFilter={activeSkillFilter || undefined}
                  onSkillClick={handleSkillClick}
                />
                <SkillGroup 
                  title="Frontend & UI" 
                  skills={RESUME_DATA.skills.frontend} 
                  activeFilter={activeSkillFilter || undefined}
                  onSkillClick={handleSkillClick}
                />
                <SkillGroup 
                  title="DevOps & Herramientas" 
                  skills={RESUME_DATA.skills.tools} 
                  activeFilter={activeSkillFilter || undefined}
                  onSkillClick={handleSkillClick}
                />
                <SkillGroup 
                  title="Integraciones Críticas" 
                  skills={RESUME_DATA.skills.integrations} 
                  activeFilter={activeSkillFilter || undefined}
                  onSkillClick={handleSkillClick}
                />
              </div>
            </Section>

            <div className="my-6 border-t border-slate-200 dark:border-slate-800 w-2/3 mx-auto"></div>

            {/* Education */}
            <Section title="Formación" icon={<GraduationCap className="w-5 h-5" />} compact>
              <div className="space-y-3">
                {RESUME_DATA.education.map((edu, index) => (
                  <EducationItem key={index} data={edu} />
                ))}
              </div>
            </Section>

            <div className="my-6 border-t border-slate-200 dark:border-slate-800 w-2/3 mx-auto"></div>

            {/* Certifications */}
            <Section title="Certificaciones" icon={<Award className="w-5 h-5" />} compact>
              <ul className="space-y-3">
                {RESUME_DATA.certifications.map((cert, index) => (
                  <li key={index} className="text-xs text-slate-600 dark:text-slate-300 relative pl-3.5 border-l-2 border-amber-500/60 dark:border-amber-400/60">
                    <span className="font-bold block text-slate-800 dark:text-slate-100 font-display">{cert.year}</span>
                    <span>{cert.name}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <div className="my-6 border-t border-slate-200 dark:border-slate-800 w-2/3 mx-auto"></div>

            {/* Languages */}
            <Section title="Idiomas" icon={<Languages className="w-5 h-5" />} compact>
              <div className="space-y-2.5">
                {RESUME_DATA.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{lang.name}</span>
                    <span className="text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 font-medium">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center text-slate-500 dark:text-slate-500 text-xs print-hidden pb-6">
        <p>&copy; {new Date().getFullYear()} Miguel Liao. Diseñado con React, Tailwind CSS y Vite.</p>
      </footer>

      {/* Toast Notification */}
      <Toast message={toastMessage} show={showToast} />
    </div>
  );
};

export default App;