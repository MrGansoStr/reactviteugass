import { useState } from "react";
import { Alert, AlertTitle, Modal } from '@mui/material';


function MsgSuccess() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  )
}
export default MsgSuccess;