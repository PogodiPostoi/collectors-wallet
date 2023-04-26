import React from "react";

import "./debtCardTabPhone.module.scss";
import DataTable from "../DataTable";

const DebtCardTabPhone = ({Modal, phonesData}) => {
  return (
    <div className="debt-card-tab-phone">
      <div className="debt-card-tab-phone__buttons-container">
        <Modal
          className = "btn btn--add"
          type = "phoneAdd"
        />
        <Modal
          className = "btn btn--edit"
          type = "phoneEdit"
        />
        <button className="btn btn--delete" onClick={()=> alert("Пока не могу удалить((")}></button>
      </div>
      <DataTable
        data = {phonesData}
        tableType = {"phones"}
      />
    </div>
  );
};

export default DebtCardTabPhone;
