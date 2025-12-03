export interface Project {
  title: string;
  techStack: string[];
  description: string;
  year?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
}

export interface Internship {
  company: string;
  role: string;
  location: string;
  duration: string;
}

export interface Certification {
  title: string;
  description?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}