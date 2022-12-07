import { useEffect, useState } from "react";
import { Alert, AlertTitle, Modal } from '@mui/material';
import { getPendings, makeTransaction } from './GetPendings';
import { useSelector } from 'react-redux';
import { md5 } from 'md5js';

function MsgSuccess() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [receiptsPendings, setreceiptsPendings] = useState([]);
  const userState = useSelector(store => store.user);

  useEffect(() => {
    var today = new Date();
    var now = today.toISOString().replace("T", " ").replace("Z", "");
    //console.log(now);
    let minidata = userState.userInfo?.code_conexion + now;
    try {
      getPendings(userState.userInfo?.id_user)
        .then(response => {
          //console.log(response);
          let credentialsforPay = {
            idreceipt: response[0].id_receipt,
            iduser: userState.userInfo?.id_user,
            idtransaction: md5(minidata,32),
            time: now
          }
          return credentialsforPay;
        })
        .then(data => {
          makeTransaction(data);
        })
    } catch (error) {
      console.log(error);
    }
  }, [open]);
  return (
    <div>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Successfull Pay — <strong>check it out!</strong>
        </Alert>
      </Modal>
    </div>
  );
}
export default MsgSuccess;