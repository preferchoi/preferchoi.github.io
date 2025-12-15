import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Settings', to: '/settings' }
];

const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          preferchoi
        </NavLink>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
