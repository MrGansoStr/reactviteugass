import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminRoutes, PrivateRoutes, PublicRoutes } from '../models/routes';

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const RolGuard = ({ rol }) => {
  const userState = useSelector(store => store.user);
  return userState.userInfo?.user_rol === 2 ? (
    PrivateValidationFragment
    ) : (
    PublicValidationFragment
  );
}
