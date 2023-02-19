import React from "react";

import "./debtCardTabPhone.module.scss";

const DebtCardTabPhone = ({Modal}) => {
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
      <div className="debt-card-tab-phone__table-container">table phones</div>
    </div>
  );
};

export default DebtCardTabPhone;
