import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-semibold text-slate-900">
          YourName
        </NavLink>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-indigo-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
