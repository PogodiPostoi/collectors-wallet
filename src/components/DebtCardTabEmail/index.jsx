import "./debtCardTabEmail.module.scss";

const DebtCardTabEmail = ({Modal}) => {
    return (
        <div className="debt-card-tab-email">
            <div className="debt-card-tab-email__buttons-container">
            <Modal
                className = "btn btn--add"
                type = "emailAdd"
            />
            <Modal
                className = "btn btn--edit"
                type = "emailEdit"
            />
                <button className="btn btn--delete" onClick={()=> alert("Пока не могу удалить((")}></button>
            </div>
            <div className="debt-card-tab-email__table-container">
                table emails
            </div>
        </div>
    )
}

export default DebtCardTabEmail;