import axios from 'axios';

export const getPendings = async (userid) => {
  const { data } = await axios.post('http://localhost:4000/pendings', {
    userid: userid
  });
  return data;
}

export const makeTransaction = async ( credentials ) => {
  const { data } = await axios.post('http://localhost:4000/generatetransaction', {
    idreceipt: credentials.idreceipt,
    iduser: credentials.iduser,
    idtransaction: credentials.idtransaction,
    time: credentials.time
  });
  return data;
}