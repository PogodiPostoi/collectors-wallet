import "./debtCardTabClient.module.scss";

const DebtCardTabClient = ({personData}) => {

    //TODO: Сделать контролируемые инпуты через функцию onChangeInput, где буду в стейт закидывать значения из поля. Либо собирать все значения в 1 стейт и по кнопке "Сохранить" отправлять в стейт и на сервер.

    return (
        <div className="debt-card-tab-client">
            <div className="debt-card-tab-client__fields-container">
                <div className="fields__field-container" style={{width: 100}}>
                    <label className="fields__label" htmlFor="clientId">ID</label>
                    <input className="fields__input" value={personData.personId} type="number" id="clientId" name="clientId" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 120}}>
                    <label className="fields__label" htmlFor="birthDt">Дата рождения</label>
                    <input className="fields__input" value={personData.birthDt} type="text" id="birthDt" name="birthDt" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 80}}>
                    <label className="fields__label" htmlFor="age">Возраст</label>
                    <input className="fields__input" value={personData.age} type="text" id="age" name="age" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 100}}>
                    <label className="fields__label" htmlFor="gender">Пол</label>
                    <input className="fields__input" value={personData.gender} type="text" id="gender" name="gender" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 150}}>
                    <label className="fields__label" htmlFor="identityDoc">Документ удост. личн.</label>
                    <input className="fields__input" value={personData.identityDoc} type="text" id="identityDoc" name="identityDoc" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 210}}>
                    <label className="fields__label" htmlFor="identityDocNumber">Серия и номер документа уд. личн.</label>
                    <input className="fields__input" value={personData.identityDocNumber} type="text" id="identityDocNumber" name="identityDocNumber" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 250}}>
                    <label className="fields__label" htmlFor="birthPlace">Место рождения</label>
                    <input className="fields__input" value={personData.birthPlace} type="text" id="birthPlace" name="birthPlace" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 150}}>
                    <label className="fields__label" htmlFor="INN">ИНН</label>
                    <input className="fields__input" value={personData.INN} type="text" id="INN" name="INN" readOnly="readonly"/>
                </div>
            </div>
        </div>
    )
}

export default DebtCardTabClient;