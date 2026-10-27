export type ProjectLinkKind = 'github' | 'pypi' | 'demo';

export interface ProjectLink {
  kind: ProjectLinkKind;
  url: string;
  /** Overrides the default button label (e.g. to show a specific demo domain). */
  label?: string;
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

export interface Certificate {
  /** Certificate ID — used to build the default boot.dev verification/image URLs. */
  id: string;
  title: string;
  provider: string;
  /** Issue date shown on the card, e.g. "Oct 23, 2025". */
  issued: string;
  /** "course" = lesson-based path, "project" = build-a-project course. */
  kind: 'course' | 'project';
  /** Overrides the boot.dev verification URL (e.g. Coursera). */
  url?: string;
  /** Overrides the derived boot.dev image; `null` renders a placeholder tile instead. */
  image?: string | null;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}
