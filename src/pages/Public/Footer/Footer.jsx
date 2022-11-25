import Logo from '../../../assets/waterdrop.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-dark">
      <div className="px-4 py-5">
        <div className="row" style={{ height: "300px" }}>
          <div className="h-50 w-25 m-0 m-auto col-sm-3 text-center">
            <img className="h-100 img-fluid" src={Logo} alt="Logo" />
          </div>
          <div className="col-md row text-white m-0 m-auto text-center h-50" style={{ height: "200px" }}>
            <div className="container-md col-4 h-50 m-0 m-auto">
              <p>Jr. Independencia N° 2321</p>
              <p className="text-primary">Ilave N° 2321</p>
            </div>
            <div className="container-sm col-4 h-50 m-0 m-auto">
              <p>Gmail1@gmail.com</p>
              <p className="text-primary">Email</p>
            </div>
            <div className="container-sm col-4 h-75 m-0 m-auto">
              <p>(051)552022</p>
              <p>(051)552022</p>
              <p>(051)552022</p>
              <p className="text-primary">Teléfono</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container text-white p-3 text-center">
          <p>Copyright © 2022 ugassVite Test Todos los derechos reservados</p>
          <Link className="nav-item" to="/">
            <FacebookIcon />
          </Link>
          <Link className="nav-item" to="/">
            <WhatsAppIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;