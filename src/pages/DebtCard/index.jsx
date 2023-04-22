import './debtCard.module.scss';
import DebtCardHeader from '../../components/DebtCardHeader';
import DebtCardTabs from '../../components/DebtCardTabs';

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

    return (
        <div className="debt-card">
            <DebtCardHeader
                // data={1} 
            />
            <DebtCardTabs/>
        </div>
    )
}

export default DebtCard;