import axios from "axios";
import { BASE_URL_API, ENPOINTS } from "../../../models/urlApi";

export const editUserInfo = async(newdata) => {
  try {
    const { data } = await axios.put(`${BASE_URL_API}/${ENPOINTS.UPDATEUSER}`, {
      newemail : newdata?.value,
      userid: newdata?.id
    });
    return data;
  } catch (error) {
    console.error(error);
  }
  return;
} 