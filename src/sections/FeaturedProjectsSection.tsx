import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const FeaturedProjectsSection = () => {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of work that highlights my focus on performance, developer experience, and polished UI."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
