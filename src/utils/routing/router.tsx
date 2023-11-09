import { Route, RouteProps, Routes } from 'react-router-dom';

import Layout from '@utils/routing/layout';
import { RoutePaths } from '@utils/routing/route-paths';
import Results from '@pages/results/results';
import ResultsDetail from '@pages/results/results-detail';

const routes: RouteProps[] = [
  { path: RoutePaths.Results, element: <Results /> },
  { path: RoutePaths.ResultsDetail, element: <ResultsDetail /> },
];

const Router: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
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
