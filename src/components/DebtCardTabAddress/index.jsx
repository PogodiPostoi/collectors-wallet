import AlfaTable from "../AlfaTable";
// import DataTable from "../DataTable";
import "./debtCardTabAddress.module.scss";

const DebtCardTabAddress = ({Modal, addressesData}) => {
    return (
        <div className="debt-card-tab-address">
            <div className="debt-card-tab-address__buttons-container">
            <Modal
                className = "btn btn--add"
                type = "addressAdd"
            />
            <Modal
                className = "btn btn--edit"
                type = "addressEdit"
            />
                <button className="btn btn--delete" onClick={()=> alert("Пока не могу удалить((")}></button>
            </div>
            <div className="debt-card-tab-address__table-container">
            <AlfaTable
                data = {addressesData}
                tableType = {"addresses"}
            />
            </div>
        </div>
    )
}

export default DebtCardTabAddress;