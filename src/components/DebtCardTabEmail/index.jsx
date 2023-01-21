import "./debtCardTabEmail.module.scss";

const DebtCardTabEmail = () => {
    return (
        <div className="debt-card-tab-email">
            <div className="debt-card-tab-email__buttons-container">
                <button className="btn btn--add"></button>
                <button className="btn btn--edit"></button>
                <button className="btn btn--delete"></button>
            </div>
            <div className="debt-card-tab-email__table-container">
                table emails
            </div>
        </div>
    )
}

export default DebtCardTabEmail;