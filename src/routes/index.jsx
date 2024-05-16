import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

const Loadable = (Component) => (props) => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  return (
    // <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/menu')} />}>
    <Suspense fallback={isLoading}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    // {
    //   path: 'cart',
    //   element: (
    //       <Cart />
    //   ),
    // },
    // {
    //   path: 'cart',
    //   children: [
    //     { element: <Cart />, index: true },
    //     { path: 'detail', element: <CartDetails /> },
    //   ]
    // },
    // Main Routes
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]);
}
const Home = Loadable(lazy(() => import('../pages/home')));
const ErrorPage = Loadable(lazy(() => import('../pages/errorpage')));
