import axios from 'axios';
import { BASE_URL_API, ENPOINTS } from '../../../../models/urlApi';

export const getPendings = async (userid) => {
  const { data } = await axios.post(`${BASE_URL_API}/${ENPOINTS.PENDINGS}`, {
    userid: userid
  });
  return data;
}

export const makeTransaction = async ( credentials ) => {
  const { data } = await axios.post(`${BASE_URL_API}/${ENPOINTS.GENERATETRANSACTION}`, {
    idreceipt: credentials.idreceipt,
    iduser: credentials.iduser,
    idtransaction: credentials.idtransaction,
    time: credentials.time
  });
  return data;
}