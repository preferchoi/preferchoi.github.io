import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-slate-900 transition-colors dark:bg-gray-950 dark:text-slate-100">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
