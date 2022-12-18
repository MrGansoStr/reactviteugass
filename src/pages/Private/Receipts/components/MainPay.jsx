import { Box } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect, lazy } from "react";
//import MsgSuccess from "./MsgSuccess";
import { getPendings } from "./GetPendings";

const MsgSuccess = lazy(() => import('./MsgSuccess'));

function MainPay() {
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  
  useEffect(() => {
    return () => {
      console.log("pop-up first closed")
    }
  },[success]);
  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  return (
    <div className="">
      <PayPalScriptProvider
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        deferLoading={false}
        options={{
          "client-id": "test",
          currency: "USD",
          intent: "capture",
        }}>
        <PayPalButtons className="w-100 m-0 m-auto p-0 d-inline-block align-middle justify-content-center align-items-center" style={{ layout: "vertical" }}
          createOrder={createOrder}
          onApprove={onApprove}
        />
      </PayPalScriptProvider>
      <Box className="w-75 m-0 m-auto container-md text-center align-middle justify-content-center overflow-auto rounded-2" style={{ height: "75%"}} sx={{transform: "translate(0%, 15%)",bgcolor: 'background.paper', border: '0px ', divShadow: 24, p: 3}}>
        {
          success ? <MsgSuccess /> : <p>{ErrorMessage}</p>
        }
      </Box>
    </div>
  )
}
export default MainPay;