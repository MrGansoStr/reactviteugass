import axios from 'axios';

export const getDataTransactions = async (userid) => {
  const {data} = await axios.post("https://api-rest-mysql-psi.vercel.app/transactions", {
    userid: userid
  })
  return data;
} 