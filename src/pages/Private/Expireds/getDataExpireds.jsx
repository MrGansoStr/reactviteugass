import axios from 'axios';

export const getDataExpireds = async (userid) => {
  const { data } = await axios.post("https://api-rest-mysql-psi.vercel.app/expireds", {
    userid: userid
  });
  return data;
}