
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ButtonBack from '../ButtonBack/ButtonBack';
import { getDataBalance } from './getDataBalance';
function Balance() {
  const userState = useSelector(store => store.user);
  const [fulldata, setfulldata] = useState([]);
  useEffect(() => {
    try {
      getDataBalance(userState.userInfo?.id_user)
        .then(response => {
          setfulldata(response);
        });
    } catch (error) {
      console.log(error)
    }
  }, [userState]);
  return (
    <div className="container-xl">
    <ButtonBack/>
      <div className="container">
        <h3 className="text-center text-uppercase fw-bold">Balance</h3>
      </div>
      <div className="container-lg">
        {
          JSON.stringify(fulldata)
        }
      </div>
    </div>
  )
}
export default Balance;