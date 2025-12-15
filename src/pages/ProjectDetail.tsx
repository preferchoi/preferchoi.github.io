import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import ContentSection from '../components/ContentSection';
import KeyValueGrid from '../components/KeyValueGrid';
import Modal from '../components/Modal';
import StatPill from '../components/StatPill';
import Tag from '../components/Tag';
import projects from '../data/projects';

const MIN_DETAIL_SECTIONS = 3;

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="mx-auto max-w-2xl space-y-3 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">Project not found</h1>
            <p className="text-slate-600 dark:text-slate-300">
              The project you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Button to="/projects">Back to projects</Button>
          </div>
        </div>
      </section>
    );
  }

  const detailCount = [
    project.problem,
    project.goals?.length,
    project.contributions?.length,
    project.architecture,
    project.challenges?.length,
    project.results?.length,
    project.screenshots?.length,
    project.nextSteps?.length
  ].filter(Boolean).length;

  const actionLinks = [
    project.githubUrl && { label: 'GitHub', url: project.githubUrl },
    project.demoUrl && { label: 'Demo', url: project.demoUrl },
    ...(project.links ?? [])
  ].filter(Boolean) as { label: string; url: string }[];

  const isMinimal = project.variant === 'modal' || detailCount < MIN_DETAIL_SECTIONS;

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const ActionButton = ({ label, url }: { label: string; url: string }) => (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-primary/40 dark:bg-primary/20 dark:text-slate-900"
    >
      {label}
    </a>
  );

  if (isMinimal) {
    return (
      <Modal isOpen onClose={() => navigate('/projects')} title={project.title}>
        <p className="text-slate-600 dark:text-slate-300">{project.shortDescription}</p>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        {actionLinks.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {actionLinks.map((link) => (
              <ActionButton key={link.label} label={link.label} url={link.url} />
            ))}
          </div>
        )}
        <div className="flex justify-end">
          <Button variant="ghost" onClick={() => navigate('/projects')}>
            Back to projects
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex items-center gap-3 text-sm text-primary">
          <Link to="/projects" className="flex items-center gap-2 hover:underline">
            ← Back to projects
          </Link>
          <span className="text-slate-400 dark:text-slate-500">/</span>
          <span className="text-slate-600 dark:text-slate-300">{project.title}</span>
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">{project.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">{project.shortDescription}</p>
            <p className="text-slate-700 dark:text-slate-200">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.category && <StatPill label="Category" value={project.category} />}
            {project.role && <StatPill label="Role" value={project.role.join(', ')} />}
            {project.duration && <StatPill label="Duration" value={project.duration} />}
            {project.team && <StatPill label="Team" value={project.team} />}
            {project.badge && <StatPill label="Badge" value={project.badge} />}
          </div>

          {actionLinks.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {actionLinks.map((link) => (
                <ActionButton key={link.label} label={link.label} url={link.url} />
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-6">
          {project.problem && (
            <ContentSection title="Problem / Background">
              <p>{project.problem}</p>
            </ContentSection>
          )}

          {project.goals && project.goals.length > 0 && (
            <ContentSection title="Goals">
              <ul className="list-disc space-y-2 pl-5">
                {project.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </ContentSection>
          )}

          {project.contributions && project.contributions.length > 0 && (
            <ContentSection title="What I did">
              <ul className="list-disc space-y-2 pl-5">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ContentSection>
          )}

          {project.architecture && (
            <ContentSection title="Architecture" subtitle="How the system fits together">
              <p>{project.architecture.summary}</p>
              {project.architecture.bullets && (
                <ul className="list-disc space-y-2 pl-5">
                  {project.architecture.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {project.architecture.diagramUrl && (
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
                  <img
                    src={project.architecture.diagramUrl}
                    alt={`${project.title} architecture diagram`}
                    className="w-full object-cover"
                  />
                </div>
              )}
            </ContentSection>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <ContentSection title="Challenges & trade-offs">
              <div className="grid gap-4 md:grid-cols-2">
                {project.challenges.map((challenge) => (
                  <article
                    key={challenge.title}
                    className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{challenge.title}</h3>
                    <p>{challenge.detail}</p>
                    {challenge.tradeoff && (
                      <p className="text-sm text-slate-600 dark:text-slate-300">Trade-off: {challenge.tradeoff}</p>
                    )}
                  </article>
                ))}
              </div>
            </ContentSection>
          )}

          {project.results && project.results.length > 0 && (
            <ContentSection title="Results" subtitle="Impact in numbers">
              <KeyValueGrid items={project.results} />
            </ContentSection>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <ContentSection title="Gallery" subtitle="Snapshots from the build">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((shot) => (
                  <figure
                    key={shot.src}
                    className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800"
                  >
                    <img src={shot.src} alt={shot.alt} className="h-full w-full object-cover" />
                    <figcaption className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{shot.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </ContentSection>
          )}

          {project.nextSteps && project.nextSteps.length > 0 && (
            <ContentSection title="Next steps">
              <ul className="list-disc space-y-2 pl-5">
                {project.nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </ContentSection>
          )}
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {previousProject ? (
            <Link to={`/projects/${previousProject.id}`} className="text-primary hover:underline">
              ← {previousProject.title}
            </Link>
          ) : (
            <span className="text-slate-400">Start</span>
          )}
          {nextProject ? (
            <Link to={`/projects/${nextProject.id}`} className="text-primary hover:underline">
              {nextProject.title} →
            </Link>
          ) : (
            <span className="text-slate-400">End</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
