import { Link } from 'react-router-dom';
import Tag from './Tag';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary/20 via-white to-secondary/20 dark:via-slate-900" />
      <div className="p-5 space-y-3">
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
