import './debtCard.module.scss';
import DebtCardHeader from '../../components/DebtCardHeader';
import DebtCardTabs from '../../components/DebtCardTabs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDebtCardAction } from '../../saga/debtCardReducer';
import { useEffect } from 'react';

// valid data 
// [
//  {
//     "id": "1",
//     "FIO": "ФИО",
//     "personType": "ФЛ",
//     "user": "Ответственный",
//     "birthDt": 1681491862,
//     "age": 41,
//     "gender": "gender 1",
//     "identityDoc": "identityDoc 1",
//     "identityDocNumber": 74,
//     "birthPlace": "birthPlace 1",
//     "INN": 71,
//     "debt": {
//      "id": 1,
//      "contract": 1,
//      "status": "Новый",
//      "delay": 1,
//      "creditType": "Потребительский",
//      "percentRate": "12,7%",
//      "currency": "RUR",
//      "loanAmount": 3,
//      "debtAmount": 1,
//      "overdueAmount": 1,
//      "loadTerm": 12,
//      "contractDt": 1681491862
//     },
//     "phones": [
//      {
//       "id": 1,
//       "phoneNumber": "+79991112233",
//       "type": "Мобильный",
//       "status": "Активен"
//      }
//     ],
//     "emails": [
//      {
//       "id": 1,
//       "email": "email@email.ru",
//       "type": "Личный",
//       "status": "Активен"
//      }
//     ],
//     "addresses": [
//      {
//       "id": 1,
//       "address": "Красная площадь, 3, Москва, 109012",
//       "type": "Рабочий",
//       "status": "Актуален"
//      }
//     ],
//     "payments": [
//      {
//       "id": 1,
//       "paymentSum": 123,
//       "paymentDt": 1681491862,
//       "approved": 1
//      }
//     ]
//    },
//    {
//     "id": "2",
//     "birthDt": 1681491802,
//     "age": 93,
//     "gender": "gender 2",
//     "identityDoc": "identityDoc 2",
//     "identityDocNumber": 66,
//     "birthPlace": "birthPlace 2",
//     "INN": 23,
//     "debt": {
//      "id": 1,
//      "contract": 1,
//      "status": "Новый",
//      "delay": 1,
//      "creditType": "Потребительский",
//      "percentRate": "12,7%",
//      "currency": "RUR",
//      "loanAmount": 3,
//      "debtAmount": 1,
//      "overdueAmount": 1,
//      "loadTerm": 12,
//      "contractDt": 1681491862
//     },
//     "phones": [
//      {
//       "id": 2,
//       "phoneNumber": "+79991112233",
//       "type": "Мобильный",
//       "status": "Активен"
//      }
//     ],
//     "emails": [
//      {
//       "id": 2,
//       "email": "email@email.ru",
//       "type": "Личный",
//       "status": "Активен"
//      }
//     ],
//     "addresses": [
//      {
//       "id": 2,
//       "address": "Красная площадь, 3, Москва, 109012",
//       "type": "Рабочий",
//       "status": "Актуален"
//      }
//     ],
//     "payments": [
//      {
//       "id": 2,
//       "paymentSum": 123,
//       "paymentDt": 1681491862,
//       "approved": 1
//      }
//     ]
//    }
//   ] 

const DebtCard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchDebtCardAction());
    }, []); 
    
    const debtCard = useSelector((state) => state.debtCard.debtCard);
    const data = debtCard.find(obj => obj.personId === 1)

    console.log({data}) //! Удалить после отладки

    const personData = data ? data : {}
    const debtData = data && data.debt ? data.debt : {}
    const addressesData = data && data.addresses ? data.addresses : {}
    const phonesData = data && data.phones ? data.phones : {}
    const emailsData = data && data.emails ? data.emails : {}
    const paymentsData = data && data.payments ? data.payments : {}
    
    return (
        
        <div className="debt-card">
            <DebtCardHeader
                personData={personData}
                debtData={debtData}
            />
            <DebtCardTabs
                personData={personData}
                debtData={debtData}
                addressesData={addressesData}
                phonesData={phonesData}
                emailsData={emailsData}
                paymentsData={paymentsData}
            />
        </div>
    )
}

export default DebtCard;