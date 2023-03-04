import { useEffect, useState } from "react";
import { getAllUsers } from './getAllUsers';
import { DataGrid } from '@mui/x-data-grid';
import { ROWSHELP, COLUMNSUSERS } from './../../../models/tables';
import { ROLES2 } from "../../../models/roles";
import { editUserInfo } from './editUser';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { AdminRoutes } from "../../../models/routes";
import AddIcon from '@mui/icons-material/Add';
import { UsersModel } from "../../../models/User";

function DashboardAdmin() {
  const [latestData, setlatestData] = useState([]);
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate(`/${AdminRoutes.ADMINISTRATOR}/${AdminRoutes.REGISTERUSERS}`)
  } 
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
      console.log(error);
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
          rows={latestData.length != 0 ? latestData : UsersModel}
          columns={COLUMNSUSERS}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onCellEditCommit={rowinfo => editUserInfo(rowinfo)}
          //onCellClick={algo => console.log(algo)}
          //isRowSelectable={algo2 => console.log(algo2)}
          disableSelectionOnClick={true}
          checkboxSelection
        />
      </div>
      <div className="text-end align-items-end justify-content-end">
        <Button variant="contained" size="medium" color="success" onClick={goToRegister}>
          <AddIcon/>
          Registrar Usuario
        </Button>
      </div>
    </div>
  )
}
export default DashboardAdmin;