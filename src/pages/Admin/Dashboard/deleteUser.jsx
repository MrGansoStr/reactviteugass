import axios from "axios";
import { BASE_URL_API, ENPOINTS } from '../../../models/urlApi';

export const deleteUser = async(newdata) => {
  try {
    const { data } = await axios.delete(`${BASE_URL_API}/${ENPOINTS.DELETEUSER}`, {data: 
      {
        userid: newdata
      }
    });
    return data;
  } catch (error) {
    console.error(error);
  }
  return;
} 