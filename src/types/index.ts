export interface ProjectLink {
  label: string;
  url: string;
  type: 'powerbi' | 'github' | 'tableau' | 'python';
}

export interface Project {
  id: number;
  title: string;
  image: string;
  summary: string;
  insights: string[];
  tags: string[];
  links: ProjectLink[];
}

export interface SkillCardItem {
  iconClass: string;
  title: string;
  description: string;
}

export interface EducationItem {
  title: string;
  period: string;
  description: string;
}