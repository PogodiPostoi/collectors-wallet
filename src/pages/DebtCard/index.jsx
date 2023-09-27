import './debtCard.module.scss';
import DebtCardHeader from '../../components/DebtCardHeader';
import DebtCardTabs from '../../components/DebtCardTabs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDebtCardAction } from '../../saga/debtCardReducer';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';




const DebtCard = ({ debtCard, debtCardList, data }) => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchDebtCardAction());
            if (!debtCardList.id) {
                return redirect("/")
            }
    }, []); 
  
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
                debtCard={debtCard}
                debtCardList={debtCardList}
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