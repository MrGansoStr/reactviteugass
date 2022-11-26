import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../models/routes';


function ButtonBack() {
  const navigate = useNavigate();
  const getBack = (e) => {
    e.preventDefault();
    navigate(`/${PrivateRoutes.PRIVATE}`);
  }
  return (
    <Button
      className="fw-bold"
      variant="outlined"
      type="submit"
      onClick={getBack}
    >Atrás
    </Button>
  )
}
export default ButtonBack;