import './multifilters.module.scss';

const Multifilters = () => {
    return (
        <div className="multifilters">
            <h3 className="multifilters__title">
                Быстрая фильтрация
            </h3>
            <div className="multifilters__container">
                <div className="multifilters__filters-container">
                    <div className="multifilters__filter-block">
                        <span className="multifilters__filter-name">Тип должника</span>
                        <input className="multifilters__input" type="text" name="" id="" />
                    </div>
                    <div className="multifilters__filter-block">
                        <span className="multifilters__filter-name">Номер договора</span>
                        <input className="multifilters__input" type="text" name="" id="" />
                    </div>
                    <div className="multifilters__filter-block">
                        <span className="multifilters__filter-name">Статус</span>
                        <input className="multifilters__input" type="text" name="" id="" />
                    </div>
                </div>
                <div className="multifilters__buttons-container">
                    <button className="btn btn--reset"></button>
                </div>
            </div>
        </div>
    )
}

export default Multifilters;