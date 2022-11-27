import { Navigate, Route } from "react-router-dom";
import RoutesNotFound from "../../utilities/RoutesNotFound.utility";
import { AdminRoutes } from './../../models/routes';
import { lazy } from 'react';
const DashboardAdmin = lazy(() => import("./Dashboard/DashboardAdmin"));

function AdminPages() {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={AdminRoutes.DASHBOARD} />} />
      <Route path={AdminRoutes.DASHBOARD} element={<DashboardAdmin />} />
    </RoutesNotFound>
  );
}
export default AdminPages;