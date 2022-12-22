import News from "./Components/News/News";
import HeaderPage from './../../utilities/HeaderPage';
import Communiques from "./Components/Communiques/Communiques";

function Landing() {
  return (
    <div>
      <HeaderPage
        tittle="Inicio"
        heights="400px"
        imagePath="aguaBackground4.jpg"
      />
      <News />
      <Communiques />
    </div>
  );
}
export default Landing;