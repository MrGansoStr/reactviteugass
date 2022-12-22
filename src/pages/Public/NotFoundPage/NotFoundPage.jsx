import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { AdminRoutes, PrivateRoutes } from './../../../models/routes';


function NotFoundPage({ authenticated, admin }) {
  const navigate = useNavigate();
  let styledNotFound = {
    backgroundColor: "#ccc",
    height: "1224px",
    backgroundImage: `url(/images/notFoundPageNew.jpg)`,
    //http://localhost:port/notFoundPageNew.jpg
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  const goToHome = (e) => {
    e.preventDefault();
    if (authenticated) {
      if (admin) {
        navigate(`/${AdminRoutes.ADMINISTRATOR}`);
      }
      else {
        navigate(`/${PrivateRoutes.PRIVATE}`);
      }
    }
    else {
      navigate('/');
    }
  }

  return (
    <div className="bg-image" style={styledNotFound}>
      <div className="container m-0 m-auto align-items-center justify-content-center text-center">
        <div className="bg-image py-5 ">
          <h1 className="bg-image py-5 px-5 fw-bold text-uppercase text-white" style={{ fontSize: "15rem" }}>404</h1>
          <h2 className="bg-image py-5 px-5 fw-bold text-uppercase text-white">Página No Encontrada</h2>
          <h4 className="bg-image py-5 px-5 fw-bold text-white">No lo rompiste, solo necesitas ir al inicio</h4>
        </div>
        <Button type="button" variant="contained" size="large" onClick={goToHome}>Ir al Inicio</Button>
      </div>
    </div>
  );
}
export default NotFoundPage;