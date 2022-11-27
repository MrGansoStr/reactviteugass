
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ButtonBack from '../ButtonBack/ButtonBack';
import { getDataBalance } from './getDataBalance';
import Avatar from '@mui/material/Avatar';
function Balance() {
  const userState = useSelector(store => store.user);
  const [fulldata, setfulldata] = useState([]);
  useEffect(() => {
    try {
      getDataBalance(userState.userInfo?.id_user)
      .then(response => {
        setfulldata(response);
      });
    } catch (error) {
      console.log(error)
    }
  }, [userState]);
  return (
    <div className="container-xl">
      <ButtonBack />
      <div className="container">
        <h3 className="text-center text-uppercase fw-bold">Balance</h3>
      </div>
      <div className="container-lg border">
        <div className="">
          <Avatar
            className="m-0 m-auto"
            alt={userState.userInfo?.Fname}
            sx={{ width: 90, height: 90 }}
          >{userState.userInfo?.Fname.substring(0, 1)}
          </Avatar>
        </div>
        <div>
          <h5 className="text-uppercase fw-bold">Información del usuario y saldo pendiente</h5>
          <p>Nombre Completo: <b>{userState.userInfo?.Fname} {userState.userInfo?.LnameP} {userState.userInfo?.LnameM}</b> </p>
          <p>Email: <b>{userState.userInfo?.email}</b></p>
          <p>Codigo de Conexion: <b>{userState.userInfo?.code_conexion}</b></p>
          <div>DNI: <b>DNI</b></div>
          <div className="text-uppercase">Balance: <b>BALANCE</b> </div>
        </div>
      </div>
    </div>
  )
}
export default Balance;