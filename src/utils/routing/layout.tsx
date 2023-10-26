import { Outlet } from 'react-router';

const Layout: React.FC = () => {
  return (
    <div className="flex-1 px-40 py-20 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <Outlet />
    </div>
  );
};

export default Layout;
