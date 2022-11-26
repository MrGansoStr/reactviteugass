
import  axios  from 'axios';
import { BASE_URL_API, ENPOINTS } from './../../../models/urlApi';
export const  getDataDashboard = async (userid) => {
  const {data} = await axios.post(`${BASE_URL_API}/${ENPOINTS.RECEIPTS}`, {
    userid: userid
  })
  return data;
} 