import './debtList.module.scss';

import DataTable from '../DataTable';

const DebtList = () => {
  
    return (
        <div className="bg-block">
            <div className="bg-block__title">
                Список долгов
            </div>
            <div className="bg-block__container">
                <p className="tip tip--table">&#9432; <b>Подсказка:</b> При нажатии на кнопку в записи - открывается карточка должника</p>

                <DataTable/>
                
            </div>
        </div>
    )
}



export default DebtList;