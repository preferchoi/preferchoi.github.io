import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between text-sm text-slate-600">
        <p>© 2025 YourName</p>
        <div className="flex items-center gap-4">
          <Link to="#" className="hover:text-slate-900 transition-colors">
            GitHub
          </Link>
          <Link to="#" className="hover:text-slate-900 transition-colors">
            Blog
          </Link>
          <Link to="#" className="hover:text-slate-900 transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
