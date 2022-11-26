import axios  from 'axios';
import { BASE_URL_API, ENPOINTS } from './../../../models/urlApi';

export const getDataBalance = async (userid) => {
  const {data} = await axios.post(`${BASE_URL_API}/${ENPOINTS.BALANCE}`, {
    userid: userid
  });
  return data;
}