
import { Chart } from "react-google-charts";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from './../../../models/routes';
import LateralBar from "./Components/LateralBar";

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


function Dashboard() {
  const [iduser, setiduser] = useState(0);
  const [latestData, setlatestData] = useState([["Element", "Gastos"]]);
  const [fulldata, setfulldata] = useState({});
  const navigate = useNavigate()
  //setiduser(userState.userInfo?.id_user);
  const userState = useSelector(store => store.user);
  const getReceipts = async () => {
    try {
      setiduser(userState.userInfo.id_user)
      const { data } = await axios.post("https://api-rest-mysql-psi.vercel.app/receipts", { userid: iduser });
      setfulldata(data);
      await updateArrayInfo(data);
      if ((data.name).includes("TokenExpiredError")) {
        return navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
      }
    } catch (error) {
    }
  }
  const updateArrayInfo = (arrfull) => {
    arrfull.map(element => {
      setlatestData(latestData => [...latestData, [months[element.monthFactured - 1], element.mount]]);
      latestData.splice(fulldata.length - 2, fulldata.length);
      //arrempty.push([months[element.monthFactured], element.mount]);
    });
  }
  useEffect(() => {
    getReceipts();
  }, [iduser])
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-2">
          <LateralBar />
        </div>
        <div className="col-sm-10 m-0 m-auto py-3 px-0"  style={{width: "83%"}}>
          <div >
            <h3 className="text-uppercase m-0 m-auto text-center">Dashboard</h3>
          </div>
          <div className="w-100 m-0 m-auto py-4">
            <Chart
              chartType="ColumnChart"
              data={latestData}
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