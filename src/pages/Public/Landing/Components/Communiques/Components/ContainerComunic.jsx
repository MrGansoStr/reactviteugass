import NewImg from '../../../../../../assets/news.png';
import { Link } from 'react-router-dom';
import FrameNew from '../../News/Components/FrameNew';


function ContainerComunic() {
  return (
    <>
      <Link className="nav-link text-primary p-3 text-end fw-bold text-uppercase" to="/noticias">Ver todos</Link>
        <div className="container-lg row">
          <div className="col-sm-3">
            <Link className="nav-link" to="/contactos">
              <FrameNew
                image={NewImg}
                message=""
                title="Comunicado 1"
                shre={false}
              />
            </Link>
          </div>
          <div className="col-sm-3">
            <Link className="nav-link" to="/">
              <FrameNew
                image={NewImg}
                message=""
                title="Comunicado 2"
                shre={false}
              />
            </Link>
          </div>
          <div className="col-sm-3">
            <Link className="nav-link" to="/">
              <FrameNew
                image={NewImg}
                message=""
                title="Comunicado 3"
                shre={false}
              />
            </Link>
          </div>
          <div className="col-sm-3">
            <Link className="nav-link" to="/">
              <FrameNew
                image={NewImg}
                message=""
                title="Comunicado 4"
                shre={false}
              />
            </Link>
          </div>
        </div>
    </>
  );
}
export default ContainerComunic;