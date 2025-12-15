import SectionHeader from '../components/SectionHeader';
import { skillCategories } from '../data/skills';
import AboutIntroSection from '../sections/AboutIntroSection';
import ExperienceTimelineSection from '../sections/ExperienceTimelineSection';
import SkillsSection from '../sections/SkillsSection';

const About = () => {
  return (
    <>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="About Me" subtitle="Who I am & what I do" />
        </div>
      </section>
      <AboutIntroSection />
      <SkillsSection categories={skillCategories} />
      <ExperienceTimelineSection />
    </>
  );
};

export default About;
