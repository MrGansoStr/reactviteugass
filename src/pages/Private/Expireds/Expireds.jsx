
import { useSelector } from 'react-redux';
import { getDataExpireds } from './getDataExpireds';
import { useState, useEffect } from 'react';
import ButtonBack from './../ButtonBack/ButtonBack';
import { COLUMNSRECEIPT, ROWSHELP } from './../../../models/tables';
import { DataGrid } from '@mui/x-data-grid';


function Expireds() {
  const userState = useSelector(store => store.user);
  const [userid, setuserid] = useState(0);
  const [fulldata, setfulldata] = useState([]);
  useEffect(() => {
    try {
      getDataExpireds(userState.userInfo?.id_user)
        .then(result => {
          setfulldata(result);
        })
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="container-xl">
      <div>
        <ButtonBack />
      </div>
      <h3 className="text-uppercase fw-bold">Recibos</h3>
      <div className="w-100" style={{ height: 500 }}>
        <DataGrid
          getRowId={row => row["id_receipt"] || row["id"]}
          rows={fulldata || ROWSHELP} // para que no se rompa la tabla si no hay datos
          columns={COLUMNSRECEIPT}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  )
}
export default Expireds;