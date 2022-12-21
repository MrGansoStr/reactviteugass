import axios from "axios";
import { BASE_URL_API, ENPOINTS } from '../../../models/urlApi';

export const deleteUser = async(newdata) => {
  if(newdata === 1 || newdata === 2 || newdata === 3) {
    return {message: "Cannot Delete These Users"};
  }
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