import './debtCard.module.scss';
import DebtCardHeader from '../../components/DebtCardHeader';
import DebtCardTabs from '../../components/DebtCardTabs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDebtCardAction } from '../../saga/debtCardReducer';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';




const DebtCard = () => {
    const dispatch = useDispatch();

    const debtCard = useSelector((state) => state.debtCard.debtCard);
    const debtCardList = useSelector((state) => state.debtCardList.debtCardList);
    const data = debtCard.find(obj => obj.personId === Number(debtCardList.id))

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