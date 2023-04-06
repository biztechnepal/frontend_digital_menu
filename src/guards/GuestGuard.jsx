import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../routes/path';

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default function GuestGuard({ children }) {
  const  isAuthenticated  = false;

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}
