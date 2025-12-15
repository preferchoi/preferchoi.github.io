interface StatPillProps {
  label: string;
  value: string;
}

const StatPill = ({ label, value }: StatPillProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
      <span className="font-medium text-slate-900 dark:text-slate-50">{label}:</span>
      <span>{value}</span>
    </div>
  );
};

export default StatPill;
