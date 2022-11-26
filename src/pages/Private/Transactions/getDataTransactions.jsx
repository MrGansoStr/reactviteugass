import axios from 'axios';
import { BASE_URL_API, ENPOINTS } from './../../../models/urlApi';

export const getDataTransactions = async (userid) => {
  const {data} = await axios.post(`${BASE_URL_API}/${ENPOINTS.TRANSACTIONS}`, {
    userid: userid
  })
  return data;
} 