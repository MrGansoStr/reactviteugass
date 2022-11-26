import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../utilities/localStorage.utility';
import { resetUser, userKey } from './../redux/states/user';
import { PublicRoutes } from './../models/routes';
import { storageKeys } from './../models/StorageKeys';
import { useDispatch } from 'react-redux';

function Logout() {
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatcher(resetUser());
    clearLocalStorage(userKey);
    clearLocalStorage(storageKeys.ACCESSTOKEN);
    navigate(`/${PublicRoutes.LOGIN}`);
    window.location.reload();
  } 

  return (
    <>
      <Button
        className="fw-bold"
        variant="outlined"
        type="submit"
        onClick={logout}
      >Logout
      </Button>
    </>
  );
}
export default Logout;