import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../utilities/localStorage.utility';
import { userKey } from './../redux/states/user';
import { PublicRoutes } from './../models/routes';

function Logout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    clearLocalStorage(userKey);
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true});
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