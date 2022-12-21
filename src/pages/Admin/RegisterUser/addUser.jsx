import axios from 'axios';
import { BASE_URL_API, ENPOINTS } from './../../../models/urlApi';

export const addUser = async (role, fname, pname, mname, dni, email, phone, address) => {
  try {
    let { data } = await axios.post(`${BASE_URL_API}/${ENPOINTS.ADDUSER}`, {
      userRol: role,
      fname: fname,
      pname: pname,
      mname: mname,
      dni: dni,
      email: email,
      phone: phone,
      address: address
    });
    return data;
  } catch (error) {
    return console.error(error);
  }
}

export const getCredentials = async (dni) => {
  try {
    let { data } = await axios.post(`${BASE_URL_API}/${ENPOINTS.GETCREDENTIALS}`, {
      dni: dni
    });
    return data;
  } catch (error) {
    return console.error(error);
  }
}