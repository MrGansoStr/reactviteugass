import { Link } from "react-router-dom";
import Logo from '../../../assets/waterdrop.svg';
import { lazy, useEffect, useState } from 'react';
const Logout = lazy(() => import('./../../../components/Logout'));
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { PublicRoutes } from './../../../models/routes';

const Navbar = () => {
  const userState = useSelector(store => store?.user);
  const [isauthenticated, setisauthenticated] = useState(false);
  useEffect(() => {
    if (userState.accessToken.length != 0) {
      setisauthenticated(true);
    }
    else {
      setisauthenticated(false);
    }
  }, [userState]);
  return (
    <header className="border-bottom">
      <div className="container-xl">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Logo ugass" style={{ width: "40px" }} />
              UGASS
            </Link>
            <IconButton
              className="navbar-toggler without-shadow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active shadow-link rounded-1" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active shadow-link rounded-1" to={PublicRoutes.NOTICIAS}>Noticias</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active shadow-link rounded-1" to={PublicRoutes.COMUNICADOS}>Comunicados</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active shadow-link rounded-1" to={PublicRoutes.CONTACTOS}>Contactos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/">Tramites</Link>
                </li>
                <li className="nav-item"></li>
                <li className="nav-item">
                  {
                    isauthenticated ? <Logout /> : <Link className="nav-link active shadow-link rounded-1" to="/login" >Login</Link>
                  }
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
