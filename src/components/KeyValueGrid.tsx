interface KeyValueItem {
  label: string;
  value: string;
}

interface KeyValueGridProps {
  items: KeyValueItem[];
}

const KeyValueGrid = ({ items }: KeyValueGridProps) => {
  if (!items.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.label}</p>
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyValueGrid;
