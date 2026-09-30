export type ProjectLinkKind = 'github' | 'pypi' | 'demo';

export interface ProjectLink {
  kind: ProjectLinkKind;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  label: string;
  accent: string;
  skills: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}
