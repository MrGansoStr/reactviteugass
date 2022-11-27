import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthGuard } from "./guards/AuthGuard.jsx";
import Contacts from "./pages/Public/Contacts/Contacts.jsx";
import Footer from "./pages/Public/Footer/Footer.jsx";
import Landing from "./pages/Public/Landing/Landing.jsx";
import Navbar from "./pages/Public/Navbar/Navbar.jsx";
import store from './redux/store';
import RoutesNotFound from "./utilities/RoutesNotFound.utility.jsx";
const Login = lazy(() => import("./pages/Public/Login/Login.jsx"));
const PrivatePages = lazy(() => import("./pages/Private/PrivatePages.jsx"));
import { PrivateRoutes, PublicRoutes, AdminRoutes } from './models/routes';
import Logout from './components/Logout';
import { RolGuard } from "./guards/RolGuard.jsx";
import { roles } from './models/roles';
import AdminPages from "./pages/Admin/AdminPages.jsx";

const App = () => {
  return (
    <>
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <RoutesNotFound>
              <Route index element={<Landing />} />
              <Route path={PublicRoutes.CONTACTOS} element={<Contacts />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivatePages />} />
              </Route>
              <Route element={<RolGuard rol={roles.ADMIN} />}>
                <Route path={`${AdminRoutes.ADMINISTRATOR}/*`} element={<AdminPages />} />
              </Route>
            </RoutesNotFound>
            {<Logout />}
            <Footer />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;

