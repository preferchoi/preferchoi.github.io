import SkillCard, { type SkillCardProps } from './SkillCard';

interface SkillCategoryProps {
  title: string;
  skills: SkillCardProps[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20">
          {skills.length} skills
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
