import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_DEBTORS } from "../../saga/debtorsReducer";
import { setDebtCardListAction } from "../../saga/debtCardListReducer";
import { useNavigate } from "react-router-dom";

export default function DataTable({ data, tableType }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setDebtCardList = (id) => {
    const debtCardList = {
      id,
    };
    dispatch(setDebtCardListAction(debtCardList));
  };

  const renderDebtCardButton = (params) => {
    return <button className="btn btn--debt-card" onClick={() => {setDebtCardList(params.row.id)
      navigate('/debtCard')}}></button>;
  };

  // Колоночки устанавливаем
  let columns = [];

  switch (tableType) {
    case "phones":
      columns = [
        { field: "id", headerName: "ID", width: 60 },
        { field: "phoneNumber", headerName: "Номер телефона", width: 230 },
        { field: "type", headerName: "Тип", width: 130 },
        { field: "status", headerName: "Статус ", width: 120 },
      ];
      break;
    case "addresses":
      columns = [
        { field: "id", headerName: "ID", width: 60 },
        { field: "address", headerName: "Адрес", width: 330 },
        { field: "type", headerName: "Тип", width: 130 },
        { field: "status", headerName: "Статус ", width: 120 },
      ];
      break;
    case "emails":
      columns = [
        { field: "id", headerName: "ID", width: 60 },
        { field: "email", headerName: "Email", width: 230 },
        { field: "type", headerName: "Тип", width: 130 },
        { field: "status", headerName: "Статус ", width: 120 },
      ];
      break;
    case "payments":
      columns = [
        { field: "id", headerName: "ID", width: 60 },
        { field: "paymentSum", headerName: "Сумма платежа, руб", width: 210 },
        { field: "paymentDt", headerName: "Дата платежа", width: 130 },
        { field: "approved", headerName: "Подтвержден", width: 140 },
      ];
      break;

    default:
      columns = [
        { field: "id", headerName: "ID", width: 60 },
        { field: "lastName", headerName: "Фамилия / Наименование", width: 230 },
        { field: "firstName", headerName: "Имя", width: 130 },
        { field: "age", headerName: "Возраст", width: 120 },
        { field: "debtorType", headerName: "Тип должника", width: 140 },
        {
          field: "debtAmount",
          headerName: "Сумма задолженности",
          sortable: false,
          width: 200,
        },
        {
          field: "debtCard",
          headerName: "В карточку",
          width: 100,
          renderCell: renderDebtCardButton,
          align: "center"
        },
      ];
      break;
  }

  // Данные подтягиваем и расставляем
  const debtorsList = useSelector((state) => state.debtors.debtors);

  const rows = Object.values(tableType ? data : debtorsList);

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 
        1 условие для грида списка долгов
        2 условие для грида внутри карточки долга
      */}
      {tableType === null || tableType === undefined || tableType === "" ? (
        rows.length > 0 ? (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        ) : (
          <button
            className="btn--download"
            onClick={() => dispatch({ type: FETCH_DEBTORS })}
          >
            Загрузить данные
          </button>
        )
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      )}
    </div>
  );
}
