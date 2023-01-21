import "./debtCardTabAddress.module.scss";

const DebtCardTabAddress = () => {
    return (
        <div className="debt-card-tab-address">
            <div className="debt-card-tab-address__buttons-container">
                <button className="btn btn--add"></button>
                <button className="btn btn--edit"></button>
                <button className="btn btn--delete"></button>
            </div>
            <div className="debt-card-tab-address__table-container">
                table addresses
            </div>
        </div>
    )
}

export default DebtCardTabAddress;