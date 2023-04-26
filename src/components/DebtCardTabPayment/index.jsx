import DataTable from "../DataTable";
import "./debtCardTabPayment.module.scss";

const DebtCardTabPayment = ({Modal, paymentsData}) => {
    return (
        <div className="debt-card-tab-payment">
            <div className="debt-card-tab-payment__buttons-container">
                <Modal
                    className = "btn btn--add"
                    type = "paymentAdd"
                />
                <Modal
                    className = "btn btn--edit"
                    type = "paymentEdit"
                />
                <button className="btn btn--delete" onClick={()=> alert("Пока не могу удалить((")}></button>
            </div>
            <div className="debt-card-tab-payment__table-container">
            <DataTable
                data = {paymentsData}
                tableType = {"payments"}
            />
            </div>
        </div>
    )
}

export default DebtCardTabPayment;