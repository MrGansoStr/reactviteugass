
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getData } from './getFullData';
import { DataGrid } from '@mui/x-data-grid';
import ButtonBack from '../ButtonBack/ButtonBack';
import { COLUMNSRECEIPT } from './../../../models/tables';


function Receipts() {
  const userState = useSelector(store => store.user);
  const [fulldata, setfulldata] = useState([]);
  useEffect(() => {
    try {
      getData(userState.userInfo?.id_user)
        .then(response => {
          setfulldata(response);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container-xl p-3">
      <div>
        <ButtonBack />
      </div>
      <h3 className="text-uppercase fw-bold">Recibos</h3>
      <div className="w-100" style={{ height: 500 }}>
        <DataGrid
          getRowId={row => row["id_receipt"]}
          rows={fulldata}
          columns={COLUMNSRECEIPT}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  )
}
export default Receipts;