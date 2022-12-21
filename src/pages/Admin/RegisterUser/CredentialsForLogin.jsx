import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCredentials } from "./addUser";
import { AdminRoutes } from './../../../models/routes';

function CredentialsForLogin({ dni }) {

  const navigate = useNavigate();
  const [fdata, setFdata] = useState({});
  useEffect(() => {
    setTimeout(() => {
      getCredentials(dni).then(response => setFdata(response));
    }, 5000);
    return () => {
      navigate(`/${AdminRoutes.ADMINISTRATOR}`);
    }
  }, []);
  return (
    <div className="container">
      <h3 className="text-center">Datos para el inicio de sesión</h3>
      <hr />
      <h5 className="text-center">Apellido Paterno</h5>
      <p>{fdata?.userInfo?.LnameP}</p>
      <hr />
      <h5>Codigo de conexión</h5>
      <p>{fdata?.userInfo?.code_conexion}</p>
      <hr />
    </div>
  );
}
export default CredentialsForLogin;