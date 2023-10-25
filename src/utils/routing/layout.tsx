import { Outlet } from 'react-router';

const Layout: React.FC = () => {
  return (
    <div className="flex-1 px-40 py-20">
      <Outlet />
    </div>
  );
};

export default Layout;
