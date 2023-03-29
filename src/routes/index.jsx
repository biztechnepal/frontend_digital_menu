import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import GuestGuard from '../guards/GuestGuard';

const Loadable = (Component) => (props) => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  })
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
      children: [
        {
          path: '/',
          element: (
            <GuestGuard>
              <Home />
            </GuestGuard>
          ),
        },
      ],
    },
    // {
    //   path: 'menu',
    //   element: (
    //     <GuestGuard>
    //       <CompanyMenu />
    //     </GuestGuard>
    //   )
    // },
  ]);
}
// const CompanyMenu = Loadable(lazy(() => import('../pages/companyMenu')));
const Home = Loadable(lazy(() => import('../pages/home')));