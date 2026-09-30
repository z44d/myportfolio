import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    accent: '#64ffda',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    label: 'Backend',
    accent: '#a78bfa',
    skills: ['Node.js', 'Bun', 'Hono', 'Express', 'REST APIs', 'System Design'],
  },
  {
    label: 'Data',
    accent: '#fbbf24',
    skills: ['PostgreSQL', 'Redis', 'SQLite', 'MongoDB', 'ClickHouse', 'DynamoDB'],
  },
  {
    label: 'Infrastructure',
    accent: '#f472b6',
    skills: ['Docker', 'Nginx', 'OpenResty', 'Cloudflare', 'AWS'],
  },
  {
    label: 'Frontend',
    accent: '#38bdf8',
    skills: ['React', 'Next.js', 'Vite'],
  },
  {
    label: 'Engineering',
    accent: '#34d399',
    skills: ['Distributed Systems', 'Reliability', 'Automation', 'Clean Code'],
  },
];
