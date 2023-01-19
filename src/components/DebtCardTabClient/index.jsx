import "./debtCardTabClient.module.scss";

const DebtCardTabClient = () => {
    return (
        <div className="debt-card-tab-client">
            <div className="debt-card-tab-client__fields-container">
                <div className="fields__field-container" style={{width: 100}}>
                    <label className="fields__label" htmlFor="clientId">ID</label>
                    <input className="fields__input" type="number" id="clientId" name="clientId" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 120}}>
                    <label className="fields__label" htmlFor="birthDt">Дата рождения</label>
                    <input className="fields__input" type="text" id="birthDt" name="birthDt"/>
                </div>
                <div className="fields__field-container" style={{width: 80}}>
                    <label className="fields__label" htmlFor="age">Возраст</label>
                    <input className="fields__input" type="text" id="age" name="age"/>
                </div>
                <div className="fields__field-container" style={{width: 100}}>
                    <label className="fields__label" htmlFor="gender">Пол</label>
                    <input className="fields__input" type="text" id="gender" name="gender"/>
                </div>
                <div className="fields__field-container" style={{width: 150}}>
                    <label className="fields__label" htmlFor="identityDoc">Документ удост. личн.</label>
                    <input className="fields__input" type="text" id="identityDoc" name="identityDoc"/>
                </div>
                <div className="fields__field-container" style={{width: 210}}>
                    <label className="fields__label" htmlFor="identityDocNumber">Серия и номер документа уд. личн.</label>
                    <input className="fields__input" type="text" id="identityDocNumber" name="identityDocNumber"/>
                </div>
                <div className="fields__field-container" style={{width: 250}}>
                    <label className="fields__label" htmlFor="birthPlace">Место рождения</label>
                    <input className="fields__input" type="text" id="birthPlace" name="birthPlace"/>
                </div>
                <div className="fields__field-container" style={{width: 150}}>
                    <label className="fields__label" htmlFor="INN">ИНН</label>
                    <input className="fields__input" type="text" id="INN" name="INN"/>
                </div>
            </div>
        </div>
    )
}

export default DebtCardTabClient;