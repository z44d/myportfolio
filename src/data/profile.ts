export interface Profile {
  name: string;
  handle: string;
  role: string;
  email: string;
  socials: {
    github: string;
    x: string;
    telegram: string;
    linkedin: string;
  };
}

export const profile: Profile = {
  name: 'Zaid Ballour',
  handle: 'z44d',
  role: 'Backend Software Engineer',
  email: 'zaid@z44d.com',
  socials: {
    github: 'https://github.com/z44d',
    x: 'https://x.com/0z44d',
    telegram: 'https://t.me/zaidballour',
    linkedin: 'https://www.linkedin.com/in/z44d/',
  },
};
