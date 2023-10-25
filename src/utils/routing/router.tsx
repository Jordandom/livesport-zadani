import { Route, RouteProps, Routes } from 'react-router-dom';

import Layout from '@utils/routing/layout';
import { RoutePaths } from '@utils/routing/route-paths';
import Results from '@pages/results/results';

const routes: RouteProps[] = [
  { path: '/', element: <Results /> },
  { path: RoutePaths.Results, element: <Results /> },
  // TODO:FIXME: Change this to a ResultsDetail component
  { path: RoutePaths.ResultsDetail, element: <Results /> },
];

const Router: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route path={route.path} key={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
