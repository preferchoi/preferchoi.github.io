import { FiMoon, FiSun } from '../icons/FeatherIcons';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-primary"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? <FiSun className="h-4 w-4" aria-hidden /> : <FiMoon className="h-4 w-4" aria-hidden />}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
    </button>
  );
};

export default ThemeToggle;
