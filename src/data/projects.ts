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
  role?: string[];
  duration?: string;
  team?: string;
  problem?: string;
  goals?: string[];
  contributions?: string[];
  architecture?: {
    summary: string;
    bullets?: string[];
    diagramUrl?: string;
  };
  challenges?: Array<{ title: string; detail: string; tradeoff?: string }>;
  results?: Array<{ label: string; value: string }>;
  screenshots?: Array<{ src: string; alt: string }>;
  links?: Array<{ label: string; url: string }>;
  nextSteps?: string[];
  variant?: 'page' | 'modal';
};

const projects: Project[] = [
  {
    id: 'api-gateway',
    title: 'API Gateway Platform',
    shortDescription:
      'A lightweight gateway aggregating microservices with rate limiting, caching, and observability.',
    description: 'Built for a distributed system to centralize authentication, request throttling, and metrics.',
    techStack: ['TypeScript', 'Node.js', 'Express', 'Redis'],
    category: 'Platform',
    badge: 'New',
    highlight: true,
    githubUrl: 'https://github.com/example/api-gateway',
    demoUrl: 'https://demo.example.com/gateway',
    role: ['Backend', 'DevOps'],
    duration: '2024.03 - 2024.05',
    team: '3 engineers',
    problem:
      'Multiple microservices shipped quickly, but authentication and rate limits were inconsistent and observability was fragmented.',
    goals: [
      'Introduce a unified entrypoint with consistent auth, rate limits, and caching.',
      'Reduce p99 latency on high-traffic endpoints by 20%.',
      'Add request tracing and error budgets to inform rollout decisions.'
    ],
    contributions: [
      'Designed and implemented gateway routes with typed contracts shared via OpenAPI.',
      'Added Redis-backed token bucket rate limiting with burst handling and per-tenant overrides.',
      'Instrumented metrics with Prometheus + Grafana dashboards and structured logging.',
      'Built canary + rollback scripts for zero-downtime deploys with traffic mirroring.'
    ],
    architecture: {
      summary:
        'Node.js gateway sitting in front of microservices with layered caching, auth middleware, and a fan-out executor for aggregate endpoints.',
      bullets: [
        'JWT verification and RBAC mapped from a central identity provider.',
        'Stale-while-revalidate cache strategy for read-heavy endpoints.',
        'Fan-out with timeout + fallback to maintain SLAs even when one service lags.'
      ],
      diagramUrl:
        'https://images.unsplash.com/photo-1581092152835-30ab079f19b9?auto=format&fit=crop&w=800&q=80'
    },
    challenges: [
      {
        title: 'Rate limiting without false positives',
        detail: 'Needed per-tenant + per-endpoint buckets while keeping Redis calls minimal.',
        tradeoff: 'Chose a sliding window with Lua scripts—slightly more complex but reduced cache chatter by ~15%.'
      },
      {
        title: 'Fan-out consistency',
        detail: 'Downstream services had inconsistent schemas; normalized responses in the gateway layer.',
        tradeoff: 'Added light transformation cost but simplified clients and enabled caching.'
      }
    ],
    results: [
      { label: 'p99 latency', value: '-24% after cache + fan-out tuning' },
      { label: 'Error budget', value: '99.8% over 30 days' },
      { label: 'Deploy cadence', value: 'Weekly canaries with auto-rollback' }
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
        alt: 'Gateway dashboard overview'
      },
      {
        src: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80',
        alt: 'Service topology diagram'
      }
    ],
    links: [
      { label: 'Docs', url: 'https://docs.example.com/gateway' },
      { label: 'Postmortem template', url: 'https://example.com/postmortem-template' }
    ],
    nextSteps: [
      'Integrate circuit breakers per route with adaptive backoff.',
      'Expose consumer-facing self-service API keys and quotas.',
      'Add gRPC transcoding for high-throughput clients.'
    ]
  },
  {
    id: 'portfolio-cms',
    title: 'Portfolio CMS',
    shortDescription: 'Content management tooling to quickly publish case studies with MDX and live previews.',
    description: 'A headless CMS experience focused on developer ergonomics and rapid iteration.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    category: 'Web',
    badge: 'Featured',
    githubUrl: 'https://github.com/example/portfolio-cms',
    demoUrl: 'https://cms.example.com',
    role: ['Full-stack'],
    duration: '2023.11 - 2024.02',
    team: 'Solo',
    problem:
      'Existing portfolio updates were slow and brittle with ad-hoc markdown. Needed live previews and safer publishing.',
    goals: [
      'Author case studies in MDX with custom components.',
      'Preview content with production styles before publishing.',
      'Deploy updates within minutes with CI guardrails.'
    ],
    contributions: [
      'Built MDX component set (callouts, metrics, timelines) with responsive defaults.',
      'Implemented preview mode using Next.js Draft Mode + edge middleware.',
      'Added GitHub Actions pipeline for lint, type-check, visual regression screenshots.'
    ],
    architecture: {
      summary:
        'Static-first Next.js site backed by Git-based content, with preview mode and on-demand ISR invalidation.',
      bullets: [
        'Content stored alongside components; authors commit via PR for review.',
        'Cloudinary handles asset optimization and responsive delivery.',
        'ISR regeneration kicked off by GitHub webhooks for predictable rollout.'
      ]
    },
    challenges: [
      {
        title: 'MDX safety',
        detail: 'Needed to prevent arbitrary script injection while keeping author flexibility.',
        tradeoff: 'Whitelisted components and sanitized inputs—slightly reduced freedom but kept previews trustworthy.'
      }
    ],
    results: [
      { label: 'Publish time', value: 'Under 5 minutes from merge to live' },
      { label: 'Preview accuracy', value: 'Matched production styles 1:1' }
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
        alt: 'Live preview experience'
      }
    ],
    links: [{ label: 'Docs', url: 'https://cms.example.com/docs' }],
    nextSteps: ['Add collaborative annotations', 'Introduce scheduled publishing windows']
  },
  {
    id: 'design-system',
    title: 'Design System Kit',
    shortDescription: 'Reusable component library with accessibility-first patterns and theme tokens.',
    description: 'Provides UI primitives, documentation, and tokens for product teams.',
    techStack: ['Storybook', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    category: 'Tooling',
    githubUrl: 'https://github.com/example/design-system',
    variant: 'modal'
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    shortDescription: 'Interactive dashboards with drill-down reports and realtime streaming data.',
    description: 'A performant dashboard layering caching strategies to keep insights fresh.',
    techStack: ['React', 'D3.js', 'WebSockets', 'Go'],
    category: 'Data',
    highlight: true,
    githubUrl: 'https://github.com/example/analytics-dashboard',
    demoUrl: 'https://demo.example.com/analytics',
    role: ['Frontend', 'Data Viz'],
    duration: '2024.01 - 2024.04',
    team: '4 people',
    problem:
      'Business stakeholders needed real-time views of funnel performance without overwhelming backend services.',
    goals: [
      'Deliver streaming charts that stay under 100ms interaction latency.',
      'Allow drill-down to user cohorts without reloading the page.',
      'Maintain freshness with client + server caches layered intelligently.'
    ],
    contributions: [
      'Built D3-based widgets with virtualized tables for large result sets.',
      'Implemented WebSocket channel with snapshot + delta hydration.',
      'Added optimistic UI for dashboard filters and bookmarkable URLs.',
      'Instrumented performance profiling and memoization around expensive selectors.'
    ],
    architecture: {
      summary:
        'Client-side state machine orchestrates websocket streams, caches, and query invalidation for drill-down reports.',
      bullets: [
        'Edge cache serves warm queries; client cache keeps recent cohorts in memory.',
        'Streaming transport reduces payloads by sending only diffs.',
        'Feature flag hooks allow safe rollout of new widgets to pilot teams.'
      ],
      diagramUrl:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80'
    },
    challenges: [
      {
        title: 'Streaming + caching balance',
        detail: 'Needed to avoid duplicate renders when snapshots and deltas arrived close together.',
        tradeoff: 'Centralized state machine added complexity but kept UI stable and predictable.'
      },
      {
        title: 'Drill-down navigation',
        detail: 'URL params needed to mirror filter state for sharing links.',
        tradeoff: 'Added serialization layer; improved collaboration and QA reproducibility.'
      }
    ],
    results: [
      { label: 'Interaction latency', value: '<90ms avg for filter changes' },
      { label: 'Widget adoption', value: '3 pilot teams shipped within 2 weeks' },
      { label: 'Cache hit rate', value: '82% after layered caching rollout' }
    ],
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
        alt: 'Live analytics chart'
      },
      {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        alt: 'Dashboard filters and tables'
      }
    ],
    links: [
      { label: 'Docs', url: 'https://docs.example.com/analytics' },
      { label: 'Release notes', url: 'https://example.com/releases/analytics' }
    ],
    nextSteps: ['Add anomaly detection alerts', 'Ship export to CSV + notebook integrations']
  },
  {
    id: 'automation-suite',
    title: 'Automation Suite',
    shortDescription: 'Workflow engine automating deployments, notifications, and audit logging.',
    description: 'Simplifies repetitive tasks with declarative pipelines and strong observability.',
    techStack: ['Python', 'FastAPI', 'Celery', 'PostgreSQL'],
    category: 'Platform',
    githubUrl: 'https://github.com/example/automation-suite'
  }
];

export default projects;
