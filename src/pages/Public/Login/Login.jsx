import { Button, TextField } from "@mui/material";
import { useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createUser, resetUser } from "../../../redux/states/user";
import { useEffect } from 'react';
import { clearLocalStorage, getStore } from "../../../utilities/localStorage.utility";
import { userKey } from './../../../redux/states/user';
import { useNavigate } from "react-router-dom";
import { AdminRoutes, PrivateRoutes, PublicRoutes } from './../../../models/routes';
import { BASE_URL_API, ENPOINTS } from "../../../models/urlApi";

function Login() {
  const [codeConexion, setcodeConexion] = useState("");
  const [lastName, setlastName] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector(store => store.user);
  useEffect(() => {
    clearLocalStorage(userKey);
    navigate(`/${PublicRoutes.LOGIN}`);
  },[]);

  const redirect = async ({user_rol}) => {
    if(user_rol === 2) {
      return navigate(`/${AdminRoutes.ADMINISTRATOR}`)
    }
    else {
      return navigate(`/${PrivateRoutes.PRIVATE}`);
    }
  } 
  const login = async (e) => {
    e.preventDefault();
    try {
      let {data} = await axios.post(`${BASE_URL_API}/${ENPOINTS.LOGIN}`, {codeConexion: codeConexion, LnameP: lastName});
      dispatch(createUser(data));
      await redirect(data?.userInfo);
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrMsg('Algo anda mal');
      } else if (error.response?.status === 401) {
        setErrMsg('Codigo de conexión o Apellido paterno incorrecto');
      } else {
        setErrMsg('Inicio de sesión fallido');
      }
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <br />
          <div className="col-lg-4 m-0 m-auto border p-5 rounded-2">
            <h3 className="text-uppercase">Iniciar sesión</h3>
            <form onSubmit={login}>
              <div className="py-3">
                <TextField
                  className="form-control"
                  id="standard-basic"
                  label="Codigo de Conexión"
                  variant="standard"
                  color="primary"
                  required
                  onChange={e => setcodeConexion(e.target.value)}
                />
              </div>
              <div className="py-3">
                <TextField
                  className="form-control"
                  id="standard-basic"
                  label="Apellido Paterno"
                  variant="standard"
                  color="primary"
                  required
                  onChange={e => setlastName(e.target.value)}
                />
              </div>
              <div className="py-2 text-end align-items-end ">
                <Button
                  className="fw-bold"
                  variant="outlined"
                  type="submit"
                >Login
                </Button>
              </div>
            </form>
          </div>
        </div>
        <br/>
        <br/>
         <div>
                    <p>Credenciales de prueba</p>
          <p>Codigo de Conexion: 21213322</p>
<p> Apellido Paterno: Alcides</p>
          </div>
      </div>
    </>
  );
}
export default Login;
