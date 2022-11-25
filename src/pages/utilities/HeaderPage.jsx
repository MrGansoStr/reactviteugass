function HeaderPage({tittle, heights}) {
  return (
    <>
      <div className="border" style={{ backgroundColor: "#5681BA", height: `${heights}  `}}>
        <div className="py-5">
          <h2 className="py-5 px-5 fw-bold text-uppercase text-white">{tittle}</h2>
        </div>
      </div>
    </>
  );
}
export default HeaderPage;