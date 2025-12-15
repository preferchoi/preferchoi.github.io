import { useMemo, useState } from 'react';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import projects, { type Project } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = useMemo(
    () => [
      'All',
      ...Array.from(
        new Set(
          projects
            .map((project) => project.category)
            .filter((category): category is NonNullable<Project['category']> => Boolean(category))
        )
      )
    ],
    []
  );

  const filteredProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader title="Projects" subtitle="All of my work in one place" />

        <div className="flex flex-wrap gap-3" aria-label="Project filters">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'primary' : 'ghost'}
              onClick={() => setFilter(category)}
              className={filter === category ? '' : 'text-slate-700 dark:text-slate-200'}
            >
              {category}
            </Button>
          ))}
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3" aria-label="Project list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="list-none">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
