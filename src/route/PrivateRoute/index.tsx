import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const PrivateRoute = () => {
  const {userAuth} = useAppSelector(store => store.features);
  return userAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
