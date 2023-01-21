import "./debtCardTabPhone.module.scss";

const DebtCardTabPhone = () => {
    return (
        <div className="debt-card-tab-phone">
            <div className="debt-card-tab-phone__buttons-container">
                <button className="btn btn--add"></button>
                <button className="btn btn--edit"></button>
                <button className="btn btn--delete"></button>
            </div>
            <div className="debt-card-tab-phone__table-container">
                table phones
            </div>
        </div>
    )
}

export default DebtCardTabPhone;