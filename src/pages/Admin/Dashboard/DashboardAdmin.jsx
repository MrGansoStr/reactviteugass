import { useEffect, useState } from "react";
import { getAllUsers } from './getAllUsers';
import { DataGrid } from '@mui/x-data-grid';
import { ROWSHELP, COLUMNSUSERS } from './../../../models/tables';
import { ROLES2 } from "../../../models/roles";

function DashboardAdmin() {
  const [latestData, setlatestData] = useState([]);

  useEffect(() => {
    try {
      getAllUsers()
        .then(response => {
          response.map(element => {
            if (element.user_rol == 2) {
              element.user_rol = ROLES2[1];
            }
            else {
              element.user_rol = ROLES2[0];
            }
          })
          setlatestData(response);
        })
    } catch (error) {
      console.log(error)
    }
  }, []);
  return (
    <div className="container-xl py-5">
      <div className="text-center">
        <h3 className="text-uppercase">Administrador</h3>
      </div>
      <div className="W-100 m-0 m-auto py-3" style={{ height: 500 }}>
        <DataGrid
          getRowId={row => row["id_user"] || row["id"]}
          rows={latestData || ROWSHELP}
          columns={COLUMNSUSERS}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}
export default DashboardAdmin;