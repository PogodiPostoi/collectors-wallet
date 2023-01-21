import "./debtCardTabPayment.module.scss";

const DebtCardTabPayment = () => {
    return (
        <div className="debt-card-tab-payment">
            <div className="debt-card-tab-payment__buttons-container">
                <button className="btn btn--add"></button>
                <button className="btn btn--edit"></button>
                <button className="btn btn--delete"></button>
            </div>
            <div className="debt-card-tab-payment__table-container">
                table payments
            </div>
        </div>
    )
}

export default DebtCardTabPayment;