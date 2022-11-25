import { Button, TextField } from "@mui/material";
import { useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createUser, resetUser } from "../../../redux/states/user";
import { useEffect } from 'react';
import { clearLocalStorage, getStore } from "../../../utilities/localStorage.utility";
import { userKey } from './../../../redux/states/user';
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from './../../../models/routes';

function Login() {
  const [codeConexion, setcodeConexion] = useState("");
  const [lastName, setlastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    clearLocalStorage(userKey);
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true});
  },[]);

  const login = async (e) => {
    e.preventDefault();
    try {
      let {data} = await axios.post("https://api-rest-mysql-psi.vercel.app/login", {codeConexion: codeConexion, LnameP: lastName});
      dispatch(createUser(data))
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
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
      </div>
    </>
  );
}
export default Login;