import './debtCard.module.scss';
import DebtCardHeader from '../../components/DebtCardHeader';
import DebtCardTabs from '../../components/DebtCardTabs';

const DebtCard = () => {
    return (
        <div className="debt-card">
            <DebtCardHeader/>
            <DebtCardTabs/>
        </div>
    )
}

export default DebtCard;