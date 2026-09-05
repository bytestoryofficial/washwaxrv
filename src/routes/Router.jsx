import { useRoutes } from 'react-router';
import * as Routes from './path';

import { HomePage } from 'pages';

const routes = [
  {
    path: Routes.HOME_ROUTE,
    element: <HomePage />,
  },
];

const RouterProvider = () => {
  const pages = useRoutes(routes);
  return pages;
};

export default RouterProvider;
