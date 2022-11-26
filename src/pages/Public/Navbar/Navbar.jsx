import { Link } from "react-router-dom";
import Logo from '../../../assets/waterdrop.svg';
import { lazy, useEffect, useState } from 'react';
const Logout = lazy(() => import('./../../../components/Logout'));
import { storageKeys } from './../../../models/StorageKeys';
import { getLocalStorage } from "../../../utilities/localStorage.utility";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const userState = useSelector(store => store.user);
  const [isauthenticated, setisauthenticated] = useState(false);
  useEffect(() => {
    if(userState.accessToken.length != 0) {
      setisauthenticated(true);
    }
    else {
      setisauthenticated(false);
    }
  },[userState]);
  return (
    <header className="border-bottom">
      <div className="container-xl">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Logo ugass" style={{ width: "40px" }} />
              UGASS
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Landing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contactos">Contactos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/example">Tramites</Link>
                </li>
                <li className="nav-item">
                  {
                    isauthenticated ? <Logout /> : <Link className="nav-link active" to="/login" >Login</Link>
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
