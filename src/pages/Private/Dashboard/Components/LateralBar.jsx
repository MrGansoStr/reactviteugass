import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import ReceiptIcon from '@mui/icons-material/Receipt';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from "../../../../models/routes";
function LateralBar() {
  const navigate = useNavigate();
  const getReceipts = (e) => {
    e.preventDefault();
    navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.RECEIPTS}`);
  }
  const getExpireds = (e) => {
    e.preventDefault();
    navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.EXPIREDS}`);
  }
  const getBalance = (e) => {
    e.preventDefault();
    navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BALANCE}`)
  }
  const getTransactions = (e) => {
    e.preventDefault();
    navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.TRANSACTIONS}`);
  }
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={getReceipts}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Recibos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={getExpireds}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Recibos Vencidos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={getBalance}>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Balance" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={getTransactions}>
            <ListItemIcon>
              <ReceiptLongIcon />
            </ListItemIcon>
            <ListItemText primary="Transacciones" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  ); s
}
export default LateralBar;