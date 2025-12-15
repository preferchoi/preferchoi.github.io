interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">{title}</h2>
      {subtitle && <p className="text-slate-600 dark:text-slate-300 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
