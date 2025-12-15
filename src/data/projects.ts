export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  category?: 'Web' | 'Platform' | 'Data' | 'Tooling' | 'Mobile';
  badge?: string;
  highlight?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  thumbnailUrl?: string;
};

const projects: Project[] = [
  {
    id: 'api-gateway',
    title: 'API Gateway Platform',
    shortDescription: 'A lightweight gateway aggregating microservices with rate limiting, caching, and observability.',
    description: 'Built for a distributed system to centralize authentication, request throttling, and metrics.',
    techStack: ['TypeScript', 'Node.js', 'Express', 'Redis'],
    category: 'Platform',
    badge: 'New',
    highlight: true
  },
  {
    id: 'portfolio-cms',
    title: 'Portfolio CMS',
    shortDescription: 'Content management tooling to quickly publish case studies with MDX and live previews.',
    description: 'A headless CMS experience focused on developer ergonomics and rapid iteration.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    category: 'Web',
    badge: 'Featured'
  },
  {
    id: 'design-system',
    title: 'Design System Kit',
    shortDescription: 'Reusable component library with accessibility-first patterns and theme tokens.',
    description: 'Provides UI primitives, documentation, and tokens for product teams.',
    techStack: ['Storybook', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    category: 'Tooling'
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    shortDescription: 'Interactive dashboards with drill-down reports and realtime streaming data.',
    description: 'A performant dashboard layering caching strategies to keep insights fresh.',
    techStack: ['React', 'D3.js', 'WebSockets', 'Go'],
    category: 'Data',
    highlight: true
  },
  {
    id: 'automation-suite',
    title: 'Automation Suite',
    shortDescription: 'Workflow engine automating deployments, notifications, and audit logging.',
    description: 'Simplifies repetitive tasks with declarative pipelines and strong observability.',
    techStack: ['Python', 'FastAPI', 'Celery', 'PostgreSQL'],
    category: 'Platform'
  }
];

export default projects;
