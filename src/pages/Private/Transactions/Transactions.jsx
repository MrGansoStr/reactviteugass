
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ButtonBack from '../ButtonBack/ButtonBack';
import { DataGrid } from '@mui/x-data-grid';
import { getDataTransactions } from './getDataTransactions';
import { COLUMNSTRANSACTIONS } from '../../../models/tables';
import { ROWSHELP } from './../../../models/tables';


function Transactions() {
  const userState = useSelector(store => store.user);
  const [fulldata, setfulldata] = useState([]);
  useEffect(() => {
    try {
      getDataTransactions(userState.userInfo?.id_user)
        .then(response => {
          setfulldata(response);
        })
    } catch (error) {
      console.log(error);
    }
    return () => {}
  }, []);
  return (
    <div className="">
      <div className="container-lg p-4">
        <ButtonBack />
        <h3 className="text-center text-uppercase fw-bold">Transacciones</h3>
      </div>
      <div className="container-xl">
        <div className="w-100" style={{ height: 500 }}>
          <DataGrid
            getRowId={row => row["id_transaction"] || row["id"]}
            rows={fulldata || ROWSHELP}
            columns={COLUMNSTRANSACTIONS}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  )
}
export default Transactions;