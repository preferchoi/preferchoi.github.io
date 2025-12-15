import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import projects, { type Project } from '../data/projects';

const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('All');

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
    () => (currentFilter === 'All' ? projects : projects.filter((project) => project.category === currentFilter)),
    [currentFilter]
  );

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader title="Projects" subtitle="All of my work in one place" />

        <div className="flex flex-wrap gap-3" aria-label="Project filters">
          {categories.map((category) => {
            const isActive = currentFilter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setCurrentFilter(category)}
                className={`px-4 py-2 rounded-full border border-primary/20 text-sm transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground dark:bg-primary-dark'
                    : 'text-muted-foreground hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary'
                }`}
              >
                {category}
              </button>
            );
          })}
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
