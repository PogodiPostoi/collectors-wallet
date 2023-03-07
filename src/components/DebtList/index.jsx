import './debtList.module.scss';

import DataTable from '../MuiTable/muiTable';



const DebtList = () => {
  
    return (
        <div className="bg-block">
            <div className="bg-block__title">
                Список долгов
            </div>
            <div className="bg-block__container">
                <p>table</p>

                <DataTable/>
                
            </div>
        </div>
    )
}



export default DebtList;