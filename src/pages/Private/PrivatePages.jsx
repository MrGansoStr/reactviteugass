import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import Logout from "../../components/Logout";
import { PrivateRoutes } from "../../models/Routes";
import RoutesNotFound from "../../utilities/RoutesNotFound.utility";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));

function PrivatePages() {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesNotFound>
  );
}
export default PrivatePages;