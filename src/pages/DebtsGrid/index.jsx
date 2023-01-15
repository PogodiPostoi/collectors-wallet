import './debtsGrid.module.scss';

import Multifilters from '../../components/Multifilters'
import DebtList from '../../components/DebtList'

const DebtsGrid = () => {
    return (
        <div className="debts-grid">
            <div className="debts-grid__user-block">
                <span className="debts-grid__user-greetings">Привет, Артем!</span>
                <span className="debts-grid__datetime">26 ноября 2022</span>
            </div>
            <Multifilters/>
            <DebtList/>
        </div>
    )
}

export default DebtsGrid;
