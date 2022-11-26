import axios from "axios";
import { getLocalStorage } from "../utilities/localStorage.utility";

export const axiosInterceptor = () =>  {
  const updateHeaders = (request) => {
    const token = getLocalStorage("accessToken");
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
    return error;
  })

};