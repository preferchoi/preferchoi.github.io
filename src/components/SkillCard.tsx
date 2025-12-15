import type { ReactNode } from 'react';

export type SkillCardProps = {
  icon: ReactNode | string;
  name: string;
  level: string;
  description: string;
};

const SkillCard = ({ icon, name, level, description }: SkillCardProps) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      const isImage = icon.startsWith('http') || icon.startsWith('/');

      if (isImage) {
        return <img src={icon} alt={name} className="w-8 h-8 object-contain" />;
      }

      return <span className="text-sm font-semibold text-primary capitalize">{icon}</span>;
    }

    return icon;
  };

  return (
    <div className="rounded-2xl border border-primary/20 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-primary/30 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner dark:bg-primary/20">
          {renderIcon()}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{level}</p>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{name}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

export default SkillCard;
