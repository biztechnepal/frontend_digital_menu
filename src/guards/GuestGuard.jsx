import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../routes/path';
// hooks
// import useAuth from '../hooks/useAuth';
// routes

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default function GuestGuard({ children }) {
  // const { isAuthenticated } = useAuth();
  const  isAuthenticated  = false;

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}
