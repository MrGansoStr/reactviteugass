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
    field: 'id_user',
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
    width:200
  }
];