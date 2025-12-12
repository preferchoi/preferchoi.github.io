import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between text-sm text-slate-600">
        <p>© 2025 preferchoi</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/preferchoi"
            className="hover:text-slate-900 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://preferchoi.github.io"
            className="hover:text-slate-900 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <Link to="/contact" className="hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
