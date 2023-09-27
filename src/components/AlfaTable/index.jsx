import React from "react";
import { Table } from "@alfalab/core-components/table";
import { Typography } from "@alfalab/core-components/typography";
import { Amount } from "@alfalab/core-components/amount";
import { Button } from "@alfalab/core-components/button";
import { ButtonDesktop } from "@alfalab/core-components/button/desktop";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FETCH_DEBTORS } from "../../saga/debtorsReducer";
import { setDebtCardListAction } from "../../saga/debtCardListReducer";

export default function AlfaTable({ data = {}, tableType }) {
  const [perPage, setPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePageChange = (pageIndex) => setPage(pageIndex);
  const handlePerPageChange = (value) => {
    setPage(0);
    setPerPage(value);
  };

  const debtorsList = useSelector((state) => state.debtors.debtors);
  // console.log(debtorsList)
  // const AlterRows = Object.values(tableType ? data : debtorsList);

  const pagesCount = Math.ceil(
    (!tableType ? debtorsList : data).length / perPage
  );
  const currentPageData = React.useMemo(() => {
    return (!tableType ? debtorsList : data)
      .slice(page * perPage)
      .slice(0, perPage);
  }, [debtorsList, page, perPage]);

  const setDebtCardList = (id) => {
    const debtCardList = {
      id,
    };
    dispatch(setDebtCardListAction(debtCardList));
  };

  function columnsDispatcher(tableType) {
    if (tableType === "phones") {
      return (
        <Table.THead>
          <Table.THeadCell title="ID" width="20px">
            ID
          </Table.THeadCell>

          <Table.THeadCell title="Номер телефона" width={230}>
            Номер телефона
          </Table.THeadCell>

          <Table.THeadCell title="Тип" width={130}>
            Тип
          </Table.THeadCell>

          <Table.THeadCell title="Статус" width={120}>
            Статус
          </Table.THeadCell>
        </Table.THead>
      );
    }

    if (tableType === "addresses") {
      return (
        <Table.THead>
          <Table.THeadCell title="ID" width="20px">
            ID
          </Table.THeadCell>

          <Table.THeadCell title="Адрес" width={230}>
            Адрес
          </Table.THeadCell>

          <Table.THeadCell title="Тип" width={130}>
            Тип
          </Table.THeadCell>

          <Table.THeadCell title="Статус" width={120}>
            Статус
          </Table.THeadCell>
        </Table.THead>
      );
    }

    if (tableType === "emails") {
      return (
        <Table.THead>
          <Table.THeadCell title="ID" width="20px">
            ID
          </Table.THeadCell>

          <Table.THeadCell title="Email" width={230}>
            Email
          </Table.THeadCell>

          <Table.THeadCell title="Тип" width={130}>
            Тип
          </Table.THeadCell>

          <Table.THeadCell title="Статус" width={120}>
            Статус
          </Table.THeadCell>
        </Table.THead>
      );
    }

    if (tableType === "payments") {
      return (
        <Table.THead>
          <Table.THeadCell title="ID" width="20px">
            ID
          </Table.THeadCell>

          <Table.THeadCell title="Сумма платежа, руб" width={230}>
            Сумма платежа, руб
          </Table.THeadCell>

          <Table.THeadCell title="Дата платежа" width={130}>
            Дата платежа
          </Table.THeadCell>

          <Table.THeadCell title="Подтвержден" width={120}>
            Подтвержден
          </Table.THeadCell>
        </Table.THead>
      );
    }

    return (
      <Table.THead>
        <Table.THeadCell title="ID" width="20px">
          ID
        </Table.THeadCell>

        <Table.THeadCell title="Фамилия / Наименование" width={120}>
          Фамилия / Наименование
        </Table.THeadCell>

        <Table.THeadCell title="Имя" width={120}>
          Имя
        </Table.THeadCell>

        <Table.THeadCell title="Возраст" width={80}>
          Возраст
        </Table.THeadCell>

        <Table.THeadCell title="Тип должника" width={80}>
          Тип должника
        </Table.THeadCell>

        <Table.THeadCell title="Тип должника" width={120}>
          Сумма
        </Table.THeadCell>

        <Table.THeadCell title="В карточку" width={60}>
          В карточку
        </Table.THeadCell>
      </Table.THead>
    );
  }

  function rowsDispatcher(data, tableType) {
    if (tableType === "phones") {
      return (
        <Table.TBody>
          {data.map((row) => (
            <Table.TRow key={row.id}>
              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.id}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.phoneNumber}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.type}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.status}
                </Typography.Text>
              </Table.TCell>
            </Table.TRow>
          ))}
        </Table.TBody>
      );
    }

    if (tableType === "addresses") {
      return (
        <Table.TBody>
          {data.map((row) => (
            <Table.TRow key={row.id}>
              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.id}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.address}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.type}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.status}
                </Typography.Text>
              </Table.TCell>
            </Table.TRow>
          ))}
        </Table.TBody>
      );
    }

    if (tableType === "emails") {
      return (
        <Table.TBody>
          {data.map((row) => (
            <Table.TRow key={row.id}>
              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.id}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.email}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.type}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.status}
                </Typography.Text>
              </Table.TCell>
            </Table.TRow>
          ))}
        </Table.TBody>
      );
    }

    if (tableType === "payments") {
      return (
        <Table.TBody>
          {data.map((row) => (
            <Table.TRow key={row.id}>
              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.id}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Amount
                  value={row.paymentSum}
                  currency="RUR"
                  minority={100}
                  view="default"
                  bold="major"
                  transparentMinor={true}
                />
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.paymentDt}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.approved}
                </Typography.Text>
              </Table.TCell>
            </Table.TRow>
          ))}
        </Table.TBody>
      );
    }

    return !debtorsList.length ? (
      <Table.TBody>
        <Table.TRow>
        <Table.TCell></Table.TCell>
        <Table.TCell></Table.TCell>
        <Table.TCell></Table.TCell>
          <Table.TCell style={{ margin: "0 20px"}}>
            <ButtonDesktop
              style={{ margin: "20px 0" }}
              view="tertiary"
              onClick={() => dispatch({ type: FETCH_DEBTORS })}
            >
              Загрузить данные
            </ButtonDesktop>
          </Table.TCell>
        </Table.TRow>
      </Table.TBody>
    ) : (
      <Table.TBody>
        {currentPageData.map((row) => (
          <Table.TRow key={row.id}>
            <Table.TCell>
              <Typography.Text view="primary-small" tag="div">
                {row.id}
              </Typography.Text>
            </Table.TCell>

            <Table.TCell>
              <Typography.Text view="primary-small" tag="div">
                {row.lastName}
              </Typography.Text>
            </Table.TCell>

            <Table.TCell>
              <Typography.Text view="primary-small" tag="div">
                {row.firstName}
              </Typography.Text>
            </Table.TCell>

            <Table.TCell>
              <Typography.Text view="primary-small" tag="div">
                {row.age}
              </Typography.Text>
            </Table.TCell>

            <Table.TCell>
              <Typography.Text view="primary-small" tag="div">
                {row.debtorType}
              </Typography.Text>
            </Table.TCell>

            <Table.TCell>
              <Amount
                value={row.debtAmount}
                currency="RUR"
                minority={100}
                view="default"
                bold="full"
                transparentMinor={true}
              />
            </Table.TCell>

            <Table.TCell>
              <button
                className="btn btn--debt-card"
                onClick={() => {
                  setDebtCardList(row.id);
                  navigate("/debtCard");
                }}
              ></button>
            </Table.TCell>
          </Table.TRow>
        ))}
      </Table.TBody>
    );
  }

  return (
    <div style={{ margin: "12px 0 40px" }}>
      <Table
        pagination={
          <Table.Pagination
            perPage={perPage}
            possiblePerPage={[5, 25, 50]}
            currentPageIndex={page}
            pagesCount={pagesCount}
            onPageChange={handlePageChange}
            onPerPageChange={handlePerPageChange}
          />
        }
      >
        {columnsDispatcher(tableType)}
        {/* {!debtorsList.length ? (
          <div className="element--center" style={{ margin: "20px 0" }}>
            <ButtonDesktop
              view="tertiary"
              onClick={() => dispatch({ type: FETCH_DEBTORS })}
            >
              Загрузить данные
            </ButtonDesktop>
          </div>
        ) : (
          rowsDispatcher(data, tableType)
        )} */}
        {rowsDispatcher(data, tableType)}
      </Table>
    </div>
  );
}
