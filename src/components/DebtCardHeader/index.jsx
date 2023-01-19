import './debtCardHeader.module.scss';

const DebtCardHeader = () => {
    return (
        <div className="bg-block">
            <div className="bg-block__container debt-card-header__flex">
                <div className="debt-card-header__other-debts">
                    <div className="debt-card-header__other-debt-container">
                        <p className="debt-card-header__other-debt-title">
                            Иванов Иван Иванович - 1111111,00 руб.
                        </p>
                        <button className="btn btn--close"></button>
                    </div>
                </div>
                <div className="debt-card-header__debt-info">
                    <div className="fields__field-container" style={{width: 100}}>
                        <label className="fields__label" htmlFor="debtId">ID</label>
                        <input className="fields__input" type="number" id="debtId" name="debtId" disabled/>
                    </div>
                    <div className="fields__field-container" style={{width: 250}}>
                        <label className="fields__label" htmlFor="FIO">ФИО</label>
                        <input className="fields__input" type="text" id="FIO" name="FIO"/>
                    </div>
                    <div className="fields__field-container" style={{width: 100}}>
                        <label className="fields__label" htmlFor="personType">Тип</label>
                        <input className="fields__input" type="text" id="personType" name="personType"/> {/*TODO: Переделать на выпадающий список  */}
                    </div>
                    <div className="fields__field-container" style={{width: 250}}>
                        <label className="fields__label" htmlFor="user">Ответственный</label>
                        <input className="fields__input" type="text" id="user" name="user"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DebtCardHeader;