import SectionHeader from '../components/SectionHeader';
import SkillCategory from '../components/SkillCategory';
import type { SkillCategory as SkillCategoryType } from '../data/skills';

interface SkillsSectionProps {
  categories: SkillCategoryType[];
}

const SkillsSection = ({ categories }: SkillsSectionProps) => {
  return (
    <section className="py-24 bg-surface dark:bg-surface-dark transition-colors">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <SectionHeader title="Skills" subtitle="Tools and technologies I enjoy using to build meaningful products." />
        <div className="space-y-8">
          {categories.map((category) => (
            <SkillCategory key={category.title} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
