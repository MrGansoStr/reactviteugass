import { Alert, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Modal } from "@mui/material";
import { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from './addUser';
const CredentialsForLogin = lazy(() => import('./CredentialsForLogin'))
import { AdminRoutes } from './../../../models/routes';

function RegisterUser() {
  const [role, setRole] = useState(1);
  const [fname, setFname] = useState('');
  const [pname, setPname] = useState('');
  const [mname, setMname] = useState('');
  const [dni, setdni] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [messageData, setMessageData] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleReturn = (e) => {
    e.preventDefault();
    navigate(`/${AdminRoutes.ADMINISTRATOR}`);
  }

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (!role || !fname || !pname || !mname || !dni || !email || !phone || !address) {
      //console.log("some");
      setMessageData(true);
      setOpen(false);
    }
    else {
      setMessageData(false);
      setOpen(true);
      /*
      console.log("button clicked");
      console.log(role);
      console.log(fname);
      console.log(pname);
      console.log(mname);
      console.log(dni);
      console.log(email);
      console.log(phone);
      console.log(address);
      */
      addUser(role, fname, pname, mname, dni, email, phone, address);
    }
  }

  return (
    <div className="container-lg border">
      <Button type="button" variant="outlined" onClick={handleReturn}>Regresar</Button>
      <h1 className="text-center py-4">Registrar Usuario</h1>
      <div className="w-100 m-0 ">
        <div className="m-0 m-auto container" >
          <Box
            component="form"
            className="p-2 m-0 m-auto"
            onSubmit={registerUser}
            style={{ minWidth: "300px", maxWidth: "70rem" }}
            noValidate
            autoComplete="off"
          >
            <FormControl required variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-label">Rol</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ maxWidth: "200px" }}
                value={role}
                defaultValue={role}
                label="Rol"
                onChange={handleChange}
              >
                <MenuItem value={1}>Usuario</MenuItem>
                <MenuItem value={2}>Admin</MenuItem>
              </Select>
            </FormControl>
            <FormControl required fullWidth sx={{ m: 1, maxWidth: "70%" }}>
              <TextField onChange={e => setFname(e.target.value)} id="standard-basic" label="Nombre Completo" variant="standard" required />
            </FormControl>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={2}
            >
              <FormControl required sx={{ m: 1, width: '50ch' }}>
                <TextField onChange={e => setPname(e.target.value)} id="standard-basic" label="Apellido Paterno" variant="standard" required />
              </FormControl>
              <FormControl required sx={{ m: 1, width: '50ch' }} >
                <TextField onChange={e => setMname(e.target.value)} id="standard-basic" label="Apellido Materno" variant="standard" required />
              </FormControl>
            </Stack>
            <FormControl required sx={{ m: 1, width: '30ch' }}>
              <TextField onChange={e => setdni(e.target.value)} id="standard-basic" label="DNI" variant="standard" required/>
            </FormControl>
            <FormControl required fullWidth sx={{ m: 1, maxWidth: "50%" }}>
              <TextField onChange={e => setEmail(e.target.value)} type="email" id="standard-basic" label="Email" variant="standard" required />
            </FormControl>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={1}
            >
              <FormControl sx={{ m: 1, width: '9ch' }} disabled variant="standard">
                <InputLabel id="label">+51</InputLabel>
                <Select defaultValue="51" labelId="label" id="select" sx={{ width: "80px" }}>
                  <MenuItem value="51">+51</MenuItem>
                </Select>
              </FormControl>
              <FormControl required variant="standard">
                <TextField onChange={e => setPhone(e.target.value)} sx={{ maxWidth: "75%", minWidth: "35%" }} type="tel" id="standard-basic" label="Celular" variant="standard" required />
              </FormControl>
            </Stack>
            <Stack>
              <FormControl required fullWidth sx={{ m: 1, maxWidth: "50%" }}>
                <TextField onChange={e => setAddress(e.target.value)} id="standard-basic" label="Dirección" variant="standard" required />
                <div className="invalid-feedback">
                  Por favor, rellene este campo.
                </div>
              </FormControl>
            </Stack>
            <Stack>
              {messageData ? <Alert severity="error">Falta Algún dato en el Formulario</Alert> : <></>}
            </Stack>
            <Stack
              className="py-4"
              sx={{ maxWidth: "75%", minWidth: "50%", margin: "0 auto" }}
            >
              <Button type="submit" variant="outlined" color="success">Registrar</Button>
            </Stack>
          </Box>
          <Modal
          disableEnforceFocus
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >

          <Box id="modal-title" className="w-75 m-0 m-auto container-md text-center align-middle justify-content-center overflow-auto rounded-2" style={{ height: "75%"}} sx={{transform: "translate(0%, 15%)",bgcolor: 'background.paper', border: '0px ', divShadow: 24, p: 3}}>
          {
            open ? <CredentialsForLogin dni={dni}/> : null
          }
          </Box>
        </Modal>
        </div>
      </div>
    </div>
  )
}
export default RegisterUser;