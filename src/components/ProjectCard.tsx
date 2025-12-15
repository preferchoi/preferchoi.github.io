import { Link } from 'react-router-dom';
import Tag from './Tag';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardBackground = project.highlight
    ? 'border-primary/30 bg-primary/5 shadow-md shadow-primary/5 dark:border-primary/40 dark:bg-primary/10'
    : 'border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900';

  return (
    <article
      className={`relative rounded-2xl border transition duration-200 hover:-translate-y-1 hover:shadow-lg ${cardBackground}`}
    >
      {project.badge && (
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm dark:bg-secondary/60">
          {project.badge}
        </span>
      )}
      <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary/20 via-white to-secondary/20 dark:via-slate-900">
        {project.thumbnailUrl ? (
          <img
            src={project.thumbnailUrl}
            alt={`${project.title} thumbnail`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="sr-only">{`${project.title} thumbnail`}</span>
        )}
      </div>
      <div className="space-y-3 p-5">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{project.title}</h3>
          <p className="text-sm text-slate-600 line-clamp-2 dark:text-slate-300">{project.shortDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
        >
          View Detail →
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
