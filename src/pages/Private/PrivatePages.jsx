import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import RoutesNotFound from "../../utilities/RoutesNotFound.utility";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));
const Receipts = lazy(() => import("./Receipts/Receipts"));
const Expireds = lazy(() => import("./Expireds/Expireds"));
const Transactions = lazy(() => import("./Transactions/Transactions"));
const Balance = lazy(() => import("./Balance/Balance"));

function PrivatePages() {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.RECEIPTS} element={<Receipts />} />
      <Route path={PrivateRoutes.EXPIREDS} element={<Expireds />} />
      <Route path={PrivateRoutes.TRANSACTIONS} element={<Transactions />} />
      <Route path={PrivateRoutes.BALANCE} element={<Balance />} />
    </RoutesNotFound>
  );
}
export default PrivatePages;