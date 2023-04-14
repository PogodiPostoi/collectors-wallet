import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { store } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { rootWatcher } from "../../saga";
import { FETCH_DEBTORS, fetchDebtorsAction } from "../../saga/debtorsReducer";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "lastName", headerName: "Фамилия / Наименование", width: 230 },
  { field: "firstName", headerName: "Имя", width: 130 },
  {
    field: "age",
    headerName: "Возраст",
    width: 120,
  },
  { field: "debtorType", headerName: "Тип должника", width: 140 },
  {
    field: "debtAmount",
    headerName: "Сумма задолженности",
    sortable: false,
    width: 200,
  },
];




//   {
//     id: 1,
//     lastName: "Иванов",
//     firstName: "Алексей",
//     age: 35,
//     debtorType: "ФЛ",
//     debtAmount: 100000,
//   },
//   {
//     id: 2,
//     lastName: "Петрова",
//     firstName: "Екатерина",
//     age: 42,
//     debtorType: "ФЛ",
//     debtAmount: 1000,
//   },
//   {
//     id: 3,
//     lastName: "Кузнецов",
//     firstName: "Иван",
//     age: 45,
//     debtorType: "ФЛ",
//     debtAmount: 20390,
//   },
//   {
//     id: 4,
//     lastName: "Новиков",
//     firstName: "Егор",
//     age: 16,
//     type: "ФЛ",
//     debtAmount: 7839,
//   },
//   {
//     id: 5,
//     lastName: "ООО Кирилл и Мефодий",
//     firstName: null,
//     age: null,
//     debtorType: "ЮЛ",
//     debtAmount: 56235,
//   },
//   {
//     id: 6,
//     lastName: "ООО Километр кураги",
//     firstName: null,
//     age: null,
//     debtorType: "ЮЛ",
//     debtAmount: 98120,
//   },
//   {
//     id: 7,
//     lastName: "Морозов",
//     firstName: "Сергей",
//     age: 44,
//     debtorType: "ФЛ",
//     debtAmount: 7839,
//   },
//   {
//     id: 8,
//     lastName: "ООО Изюм Петрович",
//     firstName: null,
//     age: null,
//     debtorType: "ЮЛ",
//     debtAmount: 81291,
//   },
//   {
//     id: 9,
//     lastName: "Смирнова",
//     firstName: "Ольга",
//     age: 65,
//     debtorType: "ФЛ",
//     debtAmount: 4587,
//   },
// ];

export default function DataTable() {
  const debtorsList = useSelector((state) => state.debtors.debtors);

  const dispatch = useDispatch()
  
  const rows = debtorsList

  return (
    <div style={{ height: 400, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {rows.length > 0 ? (  
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowDoubleClick={(event) => console.log(event)} // Сюда добавить переход в карточку должника
        />
      ) : (
        <button 
          className="btn--download"
          onClick={() => dispatch({ type: FETCH_DEBTORS })}
        >
          Загрузить данные
        </button>
      )}
    </div>
  );
}
