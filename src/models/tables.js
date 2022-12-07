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
    width:200
  }
];

export const COLUMNSUSERS = [
  {
    field: 'id_user',
    headerName: 'ID',
    width: 70
  },
  {
    field: 'user_rol',
    headerName: 'Rol',
    width: 70
  },
  {
    field: 'Fname',
    headerName: 'Nombre Completo',
    width: 110
  },
  {
    field: 'LnameP',
    headerName: 'Apellido Paterno',
    width: 110,
  },
  {
    field: 'LnameM',
    headerName: 'Apellido Materno',
    width: 110,
  },
  {
    field: 'dni',
    headerName: 'DNI',
    width: 90,
  },
  {
    field: 'email',
    headerName: 'Email',
    width:200,
  },
  {
    field: 'phone',
    headerName: 'Celular',
    width: 110,
  },
  {
    field: 'address',
    headerName: 'Dirección',
    width: 130,
  },{
    field: 'type',
    headerName: 'Tipo',
    width: 180,
  }
];

export const ROWSHELP = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const DATABARHELP = [
  ["Mes", "Gastos", { role: "style" }],
  ["Enero", 8.94, "#b87333"], 
  ["Febrero", 10.49, "silver"], 
  ["Marzo", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], 
];