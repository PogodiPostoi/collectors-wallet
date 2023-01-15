import './debtList.module.scss';

const DebtList = () => {
    return (
        <div className="bg-block">
            <div className="bg-block__title">
                Список долгов
            </div>
            <div className="bg-block__container">
                <p>table</p>
                {/*TODO: Добавить либу react-table (вроде так)*/}
            </div>
        </div>
    )
}

export default DebtList;