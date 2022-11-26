import axios from "axios";

export const getData = async (userid) => {
  const { data } = await axios.post("https://api-rest-mysql-psi.vercel.app/receipts", {
    userid: userid
  });
  return data;
}
