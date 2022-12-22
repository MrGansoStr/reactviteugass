import NewImg from '../../../../../../assets/news.png';
import { Link } from 'react-router-dom';
import FrameNew from '../../News/Components/FrameNew';
import { PublicRoutes } from './../../../../../../models/routes';


function ContainerComunic() {
  return (
    <>
      <Link className="nav-link text-primary p-3 text-end fw-bold text-uppercase" to={PublicRoutes.COMUNICADOS}>Ver todos</Link>
      <div className="container-lg row">
        <div className="col-sm-3">
          <FrameNew
            image={NewImg}
            message=""
            title="Comunicado 1"
            shre={false}
            toGo={PublicRoutes.COMUNICADOS}
          />
        </div>
        <div className="col-sm-3">
            <FrameNew
              image={NewImg}
              message=""
              title="Comunicado 2"
              shre={false}
              toGo={PublicRoutes.COMUNICADOS}
            />
        </div>
        <div className="col-sm-3">
            <FrameNew
              image={NewImg}
              message=""
              title="Comunicado 3"
              shre={false}
              toGo={PublicRoutes.COMUNICADOS}
            />
        </div>
        <div className="col-sm-3">
            <FrameNew
              image={NewImg}
              message=""
              title="Comunicado 4"
              shre={false}
              toGo={PublicRoutes.COMUNICADOS}
            />
        </div>
      </div>
    </>
  );
}
export default ContainerComunic;