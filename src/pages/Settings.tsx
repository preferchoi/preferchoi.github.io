import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const presetColors = ['#7c3aed', '#2563eb', '#0ea5e9', '#f97316', '#10b981', '#e11d48'];

const Settings = () => {
  const { accent, setAccentColor } = useTheme();

  return (
    <section className="py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Personalize</p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">Appearance Settings</h1>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">
            Switch between light and dark themes and choose an accent color that reflects your style. Your preferences are saved
            to your device for a consistent experience across visits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Theme</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">Toggle between light and dark modes.</p>
              </div>
              <ThemeToggle />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Accent color</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Pick a highlight color for buttons and links.</p>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="accent-picker" className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Custom
                  </label>
                  <input
                    id="accent-picker"
                    type="color"
                    value={accent}
                    onChange={(event) => setAccentColor(event.target.value)}
                    className="h-10 w-16 cursor-pointer rounded border border-slate-200 bg-transparent p-1 dark:border-slate-700"
                    aria-label="Choose a custom accent color"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {presetColors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setAccentColor(color)}
                    style={{ backgroundColor: color }}
                    className={`h-10 w-10 rounded-full border-2 ${accent === color ? 'border-primary ring-2 ring-primary/40' : 'border-transparent'} shadow-inner`}
                    aria-label={`Select ${color} as accent color`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 text-sm text-slate-700 dark:text-slate-200 dark:border-primary/30 dark:bg-primary/10">
          Note: Some older components may still use legacy palette tokens. Update their classes to text-primary, bg-primary, or
          border-primary as you refine the design system.
        </div>
      </div>
    </section>
  );
};

export default Settings;
