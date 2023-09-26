import { Link } from 'react-router-dom';
import { resetDebtCard } from '../../saga/debtCardReducer';
import './debtCardHeader.module.scss';
import { useSelector } from 'react-redux';

const DebtCardHeader = ({personData, debtData, debtCard, debtCardList}) => {

    const debtsList = `${personData.FIO} - ${debtData.debtAmount} руб.` 

    // const sth = useSelector((state) => state.debtCard.debtCard)

    return (
      <div className="bg-block">
        <div className="bg-block__container debt-card-header__flex">
          <div className="debt-card-header__other-debts">
            <div className="debt-card-header__other-debt-container">
              <p className="debt-card-header__other-debt-title">
                  {debtsList}                            
              </p>
              <Link to="/" className="btn btn--close-tiny" onClick={() => {
                resetDebtCard()
                }}/>
            </div>
          </div>
          <div className="debt-card-header__debt-info">
            <div className="fields__field-container" style={{ width: 100 }}>
              <label className="fields__label" htmlFor="debtId">
                ID
              </label>
              <input
                className="fields__input"
                defaultValue={debtData.id}
                type="number"
                id="debtId"
                name="debtId"
                readOnly="readonly"
              />
            </div>
            <div className="fields__field-container" style={{ width: 250 }}>
              <label className="fields__label" htmlFor="FIO">
                ФИО
              </label>
              <input
                className="fields__input"
                defaultValue={personData.FIO}
                type="text"
                id="FIO"
                name="FIO"
                readOnly="readonly"
              />
            </div>
            <div className="fields__field-container" style={{ width: 100 }}>
              <label className="fields__label" htmlFor="personType">
                Тип
              </label>
              <input
                className="fields__input"
                defaultValue={personData.personType}
                type="text"
                id="personType"
                name="personType"
                readOnly="readonly"
              />
            </div>
            <div className="fields__field-container" style={{ width: 250 }}>
              <label className="fields__label" htmlFor="user">
                Ответственный
              </label>
              <input
                className="fields__input"
                defaultValue={personData.user}
                type="text"
                id="user"
                name="user"
                readOnly="readonly"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default DebtCardHeader;