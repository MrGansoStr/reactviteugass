import axios from "axios";
import { BASE_URL_API, ENPOINTS } from "../../../models/urlApi";

export const getAllUsers = async() => {
  const { data } = await axios.get(`${BASE_URL_API}/${ENPOINTS.USERS}`);
  return data; 
} 