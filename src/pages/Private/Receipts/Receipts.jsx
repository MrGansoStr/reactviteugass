
import { useSelector } from 'react-redux';
import { lazy, useEffect, useState } from "react";
import { getData } from './getFullData';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import ButtonBack from '../ButtonBack/ButtonBack';
import { COLUMNSRECEIPT, ROWSHELP } from './../../../models/tables';
import { Button, Container, Modal, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ReceiptsModel } from '../../../models/Receipts';
const MainPay = lazy(() => import('./components/MainPay'));

const styleModal = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -10%)',
  width: "70%",
  bgcolor: 'background.paper',
  border: '0px',
  boxShadow: 24,
  p: 4,
};

function Receipts() {

  const userState = useSelector(store => store.user);
  const [fulldata, setfulldata] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <div className="container-lg p-3">
      <Button
          variant="contained"
          color="success"
          onClick={handleOpen}
        >
          Pagar Recibos
        </Button>
        <Modal
          disableEnforceFocus
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >

          <Box id="modal-title" className="w-75 m-0 m-auto container-md text-center align-middle justify-content-center overflow-auto rounded-2" style={{ height: "75%"}} sx={{transform: "translate(0%, 15%)",bgcolor: 'background.paper', border: '0px ', divShadow: 24, p: 3}}>
          {
            open ? <MainPay /> :null
          }
          </Box>
        </Modal>
        
      </div>
      <div className="w-100" style={{ height: 500 }}>
        <DataGrid
          getRowId={row => row["id_receipt"] || row["id"]}
          rows={fulldata.length != 0 ? fulldata : ReceiptsModel}
          columns={COLUMNSRECEIPT}
          pageSize={5}
          rowsPerPageOptions={[5]}
          components={{
            Toolbar: GridToolbar
          }}
        />
        
      </div>
    </div>
  )
}
export default Receipts;