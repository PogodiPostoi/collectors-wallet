import "./debtCardTabDebt.module.scss";

const DebtCardTabDebt = ({ debtData }) => {
    return (
        <div className="debt-card-tab-debt">
            <div className="debt-card-tab-debt__fields-container">
                <div className="fields__field-container" style={{width: 100}}>
                    <label className="fields__label" htmlFor="debtId">ID</label>
                    <input className="fields__input" defaultValue={debtData.id} type="number" id="debtId" name="debtId" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 200}}>
                    <label className="fields__label" htmlFor="contract">Номер договора</label>
                    <input className="fields__input" defaultValue={debtData.contract} type="text" id="contract" name="contract" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 150}}>
                    <label className="fields__label" htmlFor="status">Статус</label>
                    <input className="fields__input" defaultValue={debtData.status} type="text" id="status" name="status" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 80}}>
                    <label className="fields__label" htmlFor="delay">Просрочка</label>
                    <input className="fields__input" defaultValue={debtData.delay} type="text" id="delay" name="delay" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 300}}>
                    <label className="fields__label" htmlFor="creditType">Тип кредита</label>
                    <input className="fields__input" defaultValue={debtData.creditType} type="text" id="creditType" name="creditType" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 120}}>
                    <label className="fields__label" htmlFor="percentRate">Процентная ставка</label>
                    <input className="fields__input" defaultValue={debtData.percentRate} type="text" id="percentRate" name="percentRate" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 80}}>
                    <label className="fields__label" htmlFor="currency">Валюта</label>
                    <input className="fields__input" defaultValue={debtData.currency} type="text" id="currency" name="currency" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 180}}>
                    <label className="fields__label" htmlFor="loanAmount">Сумма кредита</label>
                    <input className="fields__input" defaultValue={debtData.loanAmount} type="text" id="loanAmount" name="loanAmount" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 180}}>
                    <label className="fields__label" htmlFor="debtAmount">Задолженность</label>
                    <input className="fields__input" defaultValue={debtData.debtAmount} type="text" id="debtAmount" name="debtAmount" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 180}}>
                    <label className="fields__label" htmlFor="overdueAmount">Просроченная сумма</label>
                    <input className="fields__input" defaultValue={debtData.overdueAmount} type="text" id="overdueAmount" name="overdueAmount" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 100}}>
                    <label className="fields__label" htmlFor="loadTerm">Срок кредита</label>
                    <input className="fields__input" defaultValue={debtData.loadTerm} type="text" id="loadTerm" name="loadTerm" readOnly="readonly"/>
                </div>
                <div className="fields__field-container" style={{width: 120}}>
                    <label className="fields__label" htmlFor="contractDt">Дата договора</label>
                    <input className="fields__input" defaultValue={debtData.contractDt} type="text" id="contractDt" name="contractDt" readOnly="readonly"/>
                </div>
            </div>
        </div>
    )
}

export default DebtCardTabDebt;