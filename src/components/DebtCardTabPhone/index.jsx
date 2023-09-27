import React from "react";

import "./debtCardTabPhone.module.scss";
import AlfaTable from "../AlfaTable";
// import DataTable from "../DataTable";

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
        <button className="btn btn--delete" onClick={()=> alert("Извините, действие ещё в разработке")}></button>
      </div>
      <div className="debt-card-tab-phone__table-container">
        <AlfaTable
          data = {phonesData}
          tableType = {"phones"}
        />
      </div>
      
    </div>
  );
};

export default DebtCardTabPhone;
