import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models/routes";

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }) => {
  const userState = useSelector((store) => store.user);
  //const userState = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")): "";
  return userState.accessToken.length > 0 ?(
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate to={PublicRoutes.LOGIN} />
  );
};

