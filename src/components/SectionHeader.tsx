interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold text-foreground dark:text-foreground-dark">{title}</h2>
      {subtitle && <p className="text-muted-foreground dark:text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
