import axios from 'axios';
import { BASE_URL_API, ENPOINTS } from './../../../models/urlApi';

export const getDataExpireds = async (userid) => {
  const { data } = await axios.post(`${BASE_URL_API}/${ENPOINTS.EXPIREDS}`, {
    userid: userid
  });
  return data;
}