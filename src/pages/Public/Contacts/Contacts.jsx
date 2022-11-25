import HeaderPage from "../../utilities/HeaderPage";
import InfoContac from "./Components/InfoContac";
import SentMessage from "./Components/SentMessage";

function Contacts() {
  return (
    <div className="">
      <HeaderPage tittle="Contactos" heights="250px" />
      <div className="container-lg">
        <br />
        <div className="py-5 row">
          <InfoContac />
          <div className='col-2'></div>
          <SentMessage />
        </div>
      </div>
    </div>
  );
}
export default Contacts;