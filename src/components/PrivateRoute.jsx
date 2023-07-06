import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoading  = useSelector(state => state.auth.isLoading);
  const shouldRedirect = !isLoggedIn && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
