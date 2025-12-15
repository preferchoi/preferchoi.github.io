export type Skill = {
  name: string;
  icon: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  description: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react', level: 'Advanced', description: 'Hooks, context, routing' },
      { name: 'TypeScript', icon: 'typescript', level: 'Advanced', description: 'Type-safe components' },
      { name: 'Tailwind CSS', icon: 'tailwind', level: 'Advanced', description: 'Utility-first styling' },
      { name: 'Accessibility', icon: 'a11y', level: 'Intermediate', description: 'Inclusive design patterns' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'node', level: 'Advanced', description: 'Express, API design' },
      { name: 'Python', icon: 'python', level: 'Intermediate', description: 'FastAPI, Flask' },
      { name: 'GraphQL', icon: 'graphql', level: 'Intermediate', description: 'Schema design & resolvers' },
      { name: 'Testing', icon: 'tests', level: 'Advanced', description: 'Jest, integration workflows' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'postgres', level: 'Advanced', description: 'Schema design, indexing' },
      { name: 'MongoDB', icon: 'mongo', level: 'Intermediate', description: 'Document modeling' },
      { name: 'Redis', icon: 'redis', level: 'Intermediate', description: 'Caching & queues' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: 'docker', level: 'Intermediate', description: 'Containerization & images' },
      { name: 'CI/CD', icon: 'ci', level: 'Intermediate', description: 'Automated pipelines' },
      { name: 'Git & GitHub', icon: 'git', level: 'Advanced', description: 'Collaboration workflows' },
      { name: 'Monitoring', icon: 'monitoring', level: 'Basic', description: 'Logging & alerting setup' },
    ],
  },
];
