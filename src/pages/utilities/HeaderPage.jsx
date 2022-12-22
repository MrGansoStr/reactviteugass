import imageWater from '../../assets/aguaBackground2.jpg';
function HeaderPage({ tittle, heights, imagePath }) {
  let styled = {
    backgroundColor: "#5681BA",
    height: `${heights}`,
    backgroundImage: `url(/images/${imagePath})`,
    //http://localhost:port/aguaBackground2.jpg
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
  return (
    <>
      <div className="border" style={styled}>
        <div className="bg-image py-5 ">
          <h2 className=" bg-image py-5 px-5 fw-bold text-uppercase text-white">{tittle}</h2>
        </div>
      </div>
    </>
  );
}
export default HeaderPage;