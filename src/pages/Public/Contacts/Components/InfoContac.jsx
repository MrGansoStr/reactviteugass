import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

function InfoContac() {
  return (
    <>
      <div className="px-4 col-md-5">
        <h3 className="fw-bold">Nuestros Datos para contactarnos</h3>
        <p>Llámenos o visítenos en cualquier momento, nos esforzamos por responder todas las consultas dentro de las 24 horas en días hábiles. Estaremos encantados de responder a sus preguntas.</p>
        <div className="container">
          <div className="shadow-container p-3 mb-2 bg-body rounded row">
            <div className="col-md-1 px-1">
              <HomeIcon />
            </div>
            <div className="col">
              <h5>Dirección:</h5>
              <p className="px-3">Jr. Independencia N° 2321</p>
            </div>
          </div>
          <div className="shadow-container p-3 mb-2 bg-body rounded row">
            <div className="col-1 px-1">
              <EmailIcon />
            </div>
            <div className="col">
              <h5>Nuestro Email</h5>
              <p className="px-3">Gmail1@gmail.com</p>
            </div>
          </div>
          <div className="shadow-container p-3 mb-2 bg-body rounded row">
            <div className="col-1 px-1">
              <PhoneIcon />
            </div>
            <div className="col">
              <h5>Teléfonos</h5>
              <p className="px-3">(051)552022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InfoContac;