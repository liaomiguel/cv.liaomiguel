export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Social {
  email: string;
  github: string;
  linkedin?: string;
  location?: string;
}

export const RESUME_DATA = {
  profile: {
    name: "Miguel Liao",
    title: "Senior PHP/Laravel Developer & Arquitecto de Software",
    location: "Buenos Aires, Argentina"
  },
  social: {
    email: "liaomiguel@gmail.com",
    github: "github.com/liaomiguel",
    location: "Buenos Aires, Argentina"
  },
  summary: "Desarrollador Full Stack Senior con más de 15 años de experiencia, especializado en arquitecturas backend robustas utilizando PHP y Laravel (versiones 11/12). Experto en la digitalización de procesos institucionales complejos, diseño de sistemas seguros y optimización de alto rendimiento. Capacidad probada para liderar ciclos completos de desarrollo, desde la arquitectura de base de datos hasta la integración de APIs críticas (Renaper, Google, Moodle) y despliegue en entornos Linux.",
  experience: [
    {
      role: "Líder Técnico de Desarrollo / Senior Backend Developer",
      company: "Ministerio de Desregulación y Transformación del Estado",
      period: "Mar 2025 – Actualidad",
      description: "Responsable de la estrategia tecnológica y evolución de plataformas críticas del estado.",
      achievements: [
        "Liderazgo técnico en la modernización de sistemas de selección de personal.",
        "Implementación de estándares de seguridad OWASP y optimización de consultas SQL para manejo de alta concurrencia.",
        "Arquitectura de microservicios para desacoplar módulos legacy y mejorar la escalabilidad."
      ]
    },
    {
      role: "Senior Full Stack Developer (PHP/Laravel)",
      company: "Jefatura de Gabinete de Ministros",
      period: "Abr 2017 – Mar 2025",
      description: "Desarrollo integral y mantenimiento de ecosistemas digitales para la gestión pública.",
      achievements: [
        "Diseño y desarrollo del 'Sistema de Concursos Públicos', reduciendo tiempos administrativos en un 40%.",
        "Implementación de firma digital y validación biométrica mediante integración con API Renaper.",
        "Automatización de procesos de evaluación masiva integrando Moodle y generación dinámica de certificados con trazabilidad QR."
      ]
    },
    {
      role: "Web Developer & Content Manager",
      company: "Laboratorio FOTO NIKO – Nikodigital",
      period: "Jun 2007 – Abr 2017",
      description: "Gestión del ciclo de vida de aplicaciones web comerciales y sistemas internos.",
      achievements: [
        "Migración tecnológica de portales legacy a frameworks modernos.",
        "Optimización de tiempos de carga (Web Vitals) y SEO técnico.",
        "Desarrollo de módulos de gestión de pedidos y stock en tiempo real."
      ]
    }
  ],
  skills: {
    backend: ["PHP 8.3", "Laravel 11/12", "MySQL / MariaDB", "PostgreSQL", "RESTful APIs", "Eloquent ORM"],
    frontend: ["JavaScript ES6+", "React Basics", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "Blade Templates"],
    tools: ["Git & GitHub Flow", "Docker & Compose", "Ubuntu Server", "Nginx/Apache", "Composer", "PHPUnit"],
    integrations: ["OAuth2 (Google)", "Renaper API", "Moodle LMS", "OCR Processing", "Firma Digital"]
  },
  projects: [
    {
      name: "Sistema de Evaluación Pública",
      description: "Plataforma centralizada para exámenes estatales. Integración bidireccional con Moodle, autenticación segura y emisión de certificados blockchain-ready con QR.",
      tech: ["Laravel", "Moodle API", "PDF Generation"]
    },
    {
      name: "MIPS Digital (OCR & Analytics)",
      description: "Digitalización automatizada del test psicológico MIPS. Motor de OCR para lectura de grillas físicas y generación instantánea de informes psicométricos.",
      tech: ["Python/PHP", "OCR Library", "Data Analytics"]
    },
    {
      name: "Gestor de Expedientes & Actuaciones",
      description: "Workflow configurable para seguimiento de trámites estatales. Sistema de notificaciones en tiempo real y auditoría de acciones.",
      tech: ["Laravel Queues", "WebSockets", "Audit Logs"]
    },
    {
      name: "E-Commerce Mayorista",
      description: "Plataforma B2B con gestión compleja de precios por cliente, historial de pedidos y trazabilidad logística.",
      tech: ["PHP", "MySQL", "Livewire"]
    }
  ],
  education: [
    {
      degree: "Técnico Superior en Informática Aplicada",
      institution: "UTN – Inspt",
      period: "2009 – 2016"
    },
    {
      degree: "Técnico Mecánico",
      institution: "Escuela Técnica Gral. José de San Martín",
      period: "Graduado 2006"
    }
  ],
  certifications: [
    { year: "2025", name: "Laravel 12 Fullstack (Coders Free)" },
    { year: "2023", name: "Laravel 11 Fullstack (Coders Free)" },
    { year: "2022", name: "Implementación Firma Digital Remota (INAP)" },
    { year: "2022", name: "#SéProgramar - Argentina Programa (INTI)" },
    { year: "2019", name: "Backend Developer Avanzado (UTN.BA)" }
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Técnico (Lectura/Escritura)" }
  ]
};
