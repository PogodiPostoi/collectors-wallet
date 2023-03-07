import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя', width: 130 },
  { field: 'lastName', headerName: 'Фамилия', width: 130 },
  {
    field: 'age',
    headerName: 'Возраст',
    width: 120,
  },
  { field: 'debtorType', headerName: 'Тип должника', width: 140 },
  {
    field: 'fullName',
    headerName: 'Полное имя',
    description: 'Это собирательное поле, которое не подлежит сортировке',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, debtorType: 'ФЛ' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, debtorType: 'ФЛ' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, debtorType: 'ФЛ' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, type: 'ФЛ' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, debtorType: 'ЮЛ' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, debtorType: 'ЮЛ' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, debtorType: 'ФЛ' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, debtorType: 'ЮЛ' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, debtorType: 'ФЛ' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}