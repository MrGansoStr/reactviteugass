import { Button } from "@mui/material";
import { deleteUser } from "../pages/Admin/Dashboard/deleteUser";

export const COLUMNSRECEIPT = [
  { field: 'id_receipt', headerName: 'ID', width: 60 },
  { field: 'LnameP', headerName: 'Apellido Paterno', width: 130 },
  { field: 'Fname', headerName: 'Nombres', width: 130 },
  {
    field: 'code_conexion',
    headerName: 'Codigo de conexión',
    width: 170
  },
  {
    field: 'expiresDay',
    headerName: 'Dia de Vencimiento',
    type: 'number',
    width: 80
  },
  {
    field: 'expiresMonth',
    headerName: 'Mes de Vencimiento',
    type: 'number',
    width: 140
  },
  {
    field: 'mount',
    headerName: "Monto",
    type: 'number',
    width: 60
  },
  {
    field: 'issueDay',
    headerName: 'Día de Emisión',
    width: 150
  },
  {
    field: 'number_receipt',
    headerName: 'Numero del recibo',
    width: 150
  }
];

export const COLUMNSTRANSACTIONS = [
  {
    field: 'id_transaction',
    headerName: 'ID',
    width: 60
  },
  {
    field: 'dni',
    headerName: 'DNI',
    width: 130
  },
  {
    field: 'id_transaction_encoded',
    headerName: 'ID Transaction',
    width: 300
  },
  {
    field: 'payedWith',
    headerName: 'Tipo de pago',
    type: 'number',
    width: 70
  },
  {
    field: 'status',
    headerName: 'Estado',
    type: 'number',
    width: 70
  },
  {
    field: 'time',
    headerName: 'Fecha',
    width: 200
  }
];

export const COLUMNSUSERS = [
  {
    field: 'id_user',
    headerName: 'ID',
    width: 70,
    editable: false
  },
  {
    field: 'user_rol',
    headerName: 'Rol',
    width: 70,
    editable: false
  },
  {
    field: 'Fname',
    headerName: 'Nombre Completo',
    width: 110,
    editable: false
  },
  {
    field: 'LnameP',
    headerName: 'Apellido Paterno',
    width: 110,
    editable: false
  },
  {
    field: 'LnameM',
    headerName: 'Apellido Materno',
    width: 110,
    editable: false
  },
  {
    field: 'dni',
    headerName: 'DNI',
    width: 90,
    editable: false
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true
  },
  {
    field: 'phone',
    headerName: 'Celular',
    width: 110,
    editable: false
  },
  {
    field: 'address',
    headerName: 'Dirección',
    width: 130,
    editable: false
  }, {
    field: 'type',
    headerName: 'Tipo',
    width: 100,
    editable: false,
    sortable: false,
    selectable: false
  }, {
    field: 'colDelete',
    headerName: 'Accion',
    width: 100,
    sortable: false,
    renderCell: (some) => {
      return (
        <Button
          variant="outlined"
          type="button"
          color="error"
          onClick={algo => deleteUser(some.id)}
        >Eliminar
        </Button>
      );
    }
  }
];

export const ROWSHELP = [
  { field: 'id_receipt', headerName: 'ID', width: 60 },
  { field: 'LnameP', headerName: 'Apellido Paterno', width: 130 },
  { field: 'Fname', headerName: 'Nombres', width: 130 },
  {
    field: 'code_conexion',
    headerName: 'Codigo de conexión',
    width: 170
  },
  {
    field: 'expiresDay',
    headerName: 'Dia de Vencimiento',
    type: 'number',
    width: 80
  },
  {
    field: 'expiresMonth',
    headerName: 'Mes de Vencimiento',
    type: 'number',
    width: 140
  },
  {
    field: 'mount',
    headerName: "Monto",
    type: 'number',
    width: 60
  },
  {
    field: 'issueDay',
    headerName: 'Día de Emisión',
    width: 150
  },
  {
    field: 'number_receipt',
    headerName: 'Numero del recibo',
    width: 150
  }
];

export const DATABARHELP = [
  ["Mes", "Gastos", { role: "style" }],
  ["Enero", 8.94, "#b87333"],
  ["Febrero", 10.49, "silver"],
  ["Marzo", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"],
];