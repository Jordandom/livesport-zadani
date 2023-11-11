import { Outlet } from 'react-router';

const Layout: React.FC = () => {
  return (
    <div className="flex-1 bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] px-40 py-20 dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <Outlet />
    </div>
  );
};

export default Layout;
