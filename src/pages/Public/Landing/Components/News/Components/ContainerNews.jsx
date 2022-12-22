import { Link } from 'react-router-dom';
import FrameNew from './FrameNew';
import NewImg from '../../../../../../assets/news.png';
import { PublicRoutes } from './../../../../../../models/routes';

function ContainerNews() {
  return (
    <>
      <Link className="nav-link text-primary p-3 text-end fw-bold text-uppercase" to={PublicRoutes.NOTICIAS}>Ver todos</Link>
      <div className="container-lg row">
        <div className="col-sm-3">
          <FrameNew
            image={NewImg}
            message="Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica"
            title="Noticia 1"
            shre={true}
            toGo={PublicRoutes.NOTICIAS}
          />
          <Link className="nav-link" to="/">
          </Link>
        </div>
        <div className="col-sm-3">
          <FrameNew
            image={NewImg}
            message="Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica"
            title="Noticia 2"
            shre={true}
            toGo={PublicRoutes.NOTICIAS}
          />
        </div>
        <div className="col-sm-3">
          <FrameNew
            image={NewImg}
            message="Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica"
            title="Noticia 3"
            shre={true}
            toGo={PublicRoutes.NOTICIAS}
          />
        </div>
        <div className="col-sm-3">
          <FrameNew
            image={NewImg}
            message="Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica"
            title="Noticia 4"
            shre={true}
            toGo={PublicRoutes.NOTICIAS}
          />
        </div>
      </div>
    </>
  );
}
export default ContainerNews;