import type { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ContentSection = ({ title, subtitle, children }: ContentSectionProps) => {
  return (
    <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{title}</h2>
        {subtitle && <p className="text-slate-600 dark:text-slate-300">{subtitle}</p>}
      </div>
      <div className="space-y-3 text-slate-700 dark:text-slate-200">{children}</div>
    </section>
  );
};

export default ContentSection;
