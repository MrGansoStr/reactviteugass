import axios  from 'axios';

export const getDataBalance = async (userid) => {
  const {data} = await axios.post("https://api-rest-mysql-psi.vercel.app/balance", {
    userid: userid
  });
  return data;
}