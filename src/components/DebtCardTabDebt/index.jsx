import "./debtCardTabDebt.module.scss";

const DebtCardTabDebt = () => {
    return (
        <div className="debt-card-tab-debt">
            <div className="debt-card-tab-debt__fields-container">
                <div className="fields__field-container" style={{width: 100}}>
                    <label className="fields__label" htmlFor="debtId">ID</label>
                    <input className="fields__input" type="number" id="debtId" name="debtId" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 200}}>
                    <label className="fields__label" htmlFor="contract">Номер договора</label>
                    <input className="fields__input" type="text" id="contract" name="contract" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 150}}>
                    <label className="fields__label" htmlFor="status">Статус</label>
                    <input className="fields__input" type="text" id="status" name="status" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 80}}>
                    <label className="fields__label" htmlFor="delay">Просрочка</label>
                    <input className="fields__input" type="text" id="delay" name="delay" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 300}}>
                    <label className="fields__label" htmlFor="creditType">Тип кредита</label>
                    <input className="fields__input" type="text" id="creditType" name="creditType" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 120}}>
                    <label className="fields__label" htmlFor="percentRate">Процентная ставка</label>
                    <input className="fields__input" type="text" id="percentRate" name="percentRate" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 80}}>
                    <label className="fields__label" htmlFor="currency">Валюта</label>
                    <input className="fields__input" type="text" id="currency" name="currency" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 180}}>
                    <label className="fields__label" htmlFor="loanAmount">Сумма кредита</label>
                    <input className="fields__input" type="text" id="loanAmount" name="loanAmount" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 180}}>
                    <label className="fields__label" htmlFor="debtAmount">Задолженность</label>
                    <input className="fields__input" type="text" id="debtAmount" name="debtAmount" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 180}}>
                    <label className="fields__label" htmlFor="overdueAmount">Просроченная сумма</label>
                    <input className="fields__input" type="text" id="overdueAmount" name="overdueAmount" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 100}}>
                    <label className="fields__label" htmlFor="loadTerm">Срок кредита</label>
                    <input className="fields__input" type="text" id="loadTerm" name="loadTerm" disabled/>
                </div>
                <div className="fields__field-container" style={{width: 120}}>
                    <label className="fields__label" htmlFor="contractDt">Дата договора</label>
                    <input className="fields__input" type="text" id="contractDt" name="contractDt" disabled/>
                </div>
            </div>
        </div>
    )
}

export default DebtCardTabDebt;