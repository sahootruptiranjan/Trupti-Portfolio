export interface PersonalInfo {
  name: string;
  initials: string;
  tagline: string;
  roles: string[];
  objective: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  resumePdfPath: string;
  locationContext: string;
  status: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  current?: boolean;
}

export interface SkillCategory {
  category: string;
  badge?: string;
  skills: {
    name: string;
    icon?: string;
  }[];
  isSoftSkill?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  isFlagship: boolean;
  status?: 'Completed' | 'In Progress' | 'Developing';
  description: string;
  bullets: string[];
  processSteps?: {
    step: string;
    title: string;
    detail: string;
  }[];
  tags: string[];
  codeUrl: string;
  liveUrl?: string;
  liveStatusText?: string;
}
