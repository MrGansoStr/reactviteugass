import { Navigate, Route } from "react-router-dom";
import RoutesNotFound from "../../utilities/RoutesNotFound.utility";
import { AdminRoutes } from './../../models/routes';
import { lazy } from 'react';
import RegisterUser from "./RegisterUser/RegisterUser";
const DashboardAdmin = lazy(() => import("./Dashboard/DashboardAdmin"));

function AdminPages() {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={AdminRoutes.DASHBOARD} />} />
      <Route path={AdminRoutes.DASHBOARD} element={<DashboardAdmin />} />
      <Route path={AdminRoutes.REGISTERUSERS} element={<RegisterUser/>} />
    </RoutesNotFound>
  );
}
export default AdminPages;