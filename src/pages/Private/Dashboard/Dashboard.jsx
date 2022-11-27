
import { Chart } from "react-google-charts";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LateralBar from "./Components/LateralBar";
import { getDataDashboard } from "./getDataDashboard";
import { DATABARHELP } from "../../../models/tables";


const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
function Dashboard() {
  const [latestData, setlatestData] = useState([["Element", "Gastos"]]);
  const [fulldata, setfulldata] = useState([]);
  const userState = useSelector(store => store.user);

  useEffect(() => {
    try {
      getDataDashboard(userState.userInfo?.id_user)
        .then(response => {
          setfulldata(response);
          return response;
        })
        .then((e) => {
          e?.map(element => {
            setlatestData(latestData => [...latestData, [months[element.monthFactured - 1], element.mount]]);
            latestData.splice(e.length - 2, e.length);;
          })
        })
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-2">
          <LateralBar />
        </div>
        <div className="col-sm-10 m-0 m-auto py-3 px-0" style={{ width: "83%" }}>
          <div >
            <h3 className="text-uppercase m-0 m-auto text-center">Dashboard</h3>
          </div>
          <div className="w-100 m-0 m-auto py-4">
            <Chart
              chartType="ColumnChart"
              data={latestData.length == 1 ? DATABARHELP: latestData}
              width="100%"
              height="400px"
              legendToggle
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;