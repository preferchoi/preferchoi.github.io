import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Tag from '../components/Tag';

const HeroSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Tag>Backend & Web Developer</Tag>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900 dark:text-slate-50">
              Crafting scalable web experiences and resilient backend systems.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              I design and build modern applications with a focus on maintainable code, intuitive interfaces, and smooth user
              journeys.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              as={Link}
              to="/projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary-dark dark:text-primary-foreground"
            >
              View Projects
            </Button>
            <Button to="/about" variant="ghost">
              About Me
            </Button>
          </div>
        </div>
        <div className="lg:justify-self-end w-full">
          <div className="w-full aspect-square max-w-md lg:max-w-full lg:aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 via-white to-secondary/20 border border-slate-200 shadow-inner dark:border-slate-800 dark:via-slate-900" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
