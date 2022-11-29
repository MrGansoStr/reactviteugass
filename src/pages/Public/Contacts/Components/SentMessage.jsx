import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function SentMessage() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [message, setmessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(name, email, message);
  }
  return (
    <>
      <div className="col-md-5 p-4 border rounded-2">
        <h3>Envie su mensaje para poder ayudarlo</h3>
        <p>Su dirección correo electrónico no será publicado.</p>
        <form action="https://formsubmit.co/eb82c991d4ca94c126233be78ee24cf7" method="POST">
          <TextField
            className="form-control"
            id="standard-basic"
            label="Tu nombre"
            name="Nombre"
            variant="standard"
            color="primary"
            required
            onChange={e => setname(e.target.value)}
          />
          <TextField
            className="form-control"
            id="standard-basic"
            label="Email"
            name="Email" 
            variant="standard"
            color="primary"
            required
            onChange={e => setemail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            className="form-control"
            id="outlined-multiline-static"
            label="Mensaje"
            name="Mensaje"
            multiline
            rows={4}
            color="primary"
            required
            onChange={e => setmessage(e.target.value)}
          />
          <br />
          <br />
          <Button
            variant="outlined"
            type="submit"
          >Enviar Mensaje
          </Button>
        </form>
      </div>
    </>
  );
}
export default SentMessage;