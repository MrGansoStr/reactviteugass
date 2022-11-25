
import { Chart } from "react-google-charts";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const labels = [100, 200, 300, 400, 500, 600, 700];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const data = [
  ["Element", "Density"],
  ["Copper", 8.94], // RGB value
  ["Silver", 10.49], // English color name
  ["Gold", 19.3],
  ["Platinum", 21.45], // CSS-style declaration
];

function Dashboard() {
  const [iduser, setiduser] = useState(0);
  const [arrayColumns, setarrayColumns] = useState([]);
  const [latestData, setlatestData] = useState([["Element", "Gastos"]]);
  const [fulldata, setfulldata] = useState({});
  //setiduser(userState.userInfo?.id_user);
  const userState = useSelector(store => store.user);
  const getReceipts = async () => {
    try {
      setiduser(userState.userInfo.id_user)
      const { data } = await axios.post("https://api-rest-mysql-psi.vercel.app/receipts", { userid: iduser }, {
        headers: {
          Authorization: `Bearer ${userState.accessToken}`,
        }
      });
      setfulldata(data);
      await updateArrayInfo(data);
      latestData.splice(fulldata.length - 1, fulldata.length);
    } catch (error) {
      console.log(error.response);
    }
  }
  const updateArrayInfo = (arrfull) => {
    arrfull.map(element => {
      setlatestData(latestData => [...latestData, [months[element.monthFactured - 1], element.mount]]);
      //arrempty.push([months[element.monthFactured], element.mount]);
    });
  }
  useEffect(() => {
    getReceipts();
  }, [iduser])
  return (
    <div className="container-lg">
      <div>
        Dashboard
      </div>
      <div className="w-75 m-0 m-auto overflow">
      </div>
      <div className="w-75 m-0 m-auto">
        <Chart
          chartType="ColumnChart"
          data={latestData}
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
    </div>
  );
};

export default Dashboard;