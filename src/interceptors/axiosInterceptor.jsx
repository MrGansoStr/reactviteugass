import axios from "axios";
import { clearLocalStorage, getLocalStorage } from "../utilities/localStorage.utility";
import { storageKeys } from './../models/StorageKeys';
import { userKey } from './../redux/states/user';

export const axiosInterceptor = () =>  {
  const updateHeaders = (request) => {
    const token = getLocalStorage(storageKeys.ACCESSTOKEN);
    const newHeaders = {
      Authorization: `Bearer ${token}`
    }
    request.headers = newHeaders;
    return request;
  }
  axios.interceptors.request.use(request => {
    if (!request.url?.includes("private")) return updateHeaders(request);
    if (request.url?.includes("assests")) return request;
    return updateHeaders(request);
  });
  axios.interceptors.response.use(response => {
    console.log("Success (200)");
    return response;

  }, (error) => {
    console.log(error.response?.data);
    if(error.response?.data?.name?.includes("TokenExpiredError")) {
      clearLocalStorage(userKey);
      clearLocalStorage(storageKeys.ACCESSTOKEN);
    }
    return error;
  })

};