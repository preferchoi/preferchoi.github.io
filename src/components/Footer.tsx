import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
        <p>© 2025 preferchoi</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/preferchoi"
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://preferchoi.github.io"
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <Link to="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
