import News from "./Components/News/News";
import HeaderPage from './../../utilities/HeaderPage';
import Communiques from "./Components/Communiques/Communiques";

function Landing() {
  return (
    <div className="">
      <HeaderPage
        tittle="Portada"
        heights="300px"
      />
      <News />
      <Communiques />
    </div>
  );
}
export default Landing;