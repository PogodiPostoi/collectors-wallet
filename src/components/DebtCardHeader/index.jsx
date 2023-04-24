import './debtCardHeader.module.scss';

const DebtCardHeader = ({personData, debtData}) => {

    const debtsList = `${personData.FIO} - ${debtData.debtAmount} руб.`

    return (
        <div className="bg-block">
            <div className="bg-block__container debt-card-header__flex">
                <div className="debt-card-header__other-debts">
                    <div className="debt-card-header__other-debt-container">
                        <p className="debt-card-header__other-debt-title">
                            {debtsList}                            
                        </p>
                        <button className="btn btn--close-tiny"></button>
                    </div>
                </div>
                <div className="debt-card-header__debt-info">
                    <div className="fields__field-container" style={{width: 100}}>
                        <label className="fields__label" htmlFor="debtId">ID</label>
                        <input className="fields__input" value={debtData.id} type="number" id="debtId" name="debtId" readOnly="readonly"/>
                    </div>
                    <div className="fields__field-container" style={{width: 250}}>
                        <label className="fields__label" htmlFor="FIO">ФИО</label>
                        <input className="fields__input" value={personData.FIO} type="text" id="FIO" name="FIO" readOnly="readonly"/>
                    </div>
                    <div className="fields__field-container" style={{width: 100}}>
                        <label className="fields__label" htmlFor="personType">Тип</label>
                        <input className="fields__input" value={personData.personType} type="text" id="personType" name="personType" readOnly="readonly"/> 
                    </div>
                    <div className="fields__field-container" style={{width: 250}}>
                        <label className="fields__label" htmlFor="user">Ответственный</label>
                        <input className="fields__input" value={personData.user} type="text" id="user" name="user" readOnly="readonly"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DebtCardHeader;