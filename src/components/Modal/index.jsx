import Popup from "reactjs-popup";

const Modal = () => {
  return (
    <>
      <Popup trigger={<button className="btn btn--add"></button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="modal__title-block">
              <h3 className="modal__title"> Добавление телефона </h3>
              <button className="btn btn--close-modal modal__btn-close" onClick={close}></button>
            </div>
            <div className="modal__fields-container">
              <div className="modal__field">
                <label htmlFor="phoneNumber">Номер телефона</label>
                <input type="tel" id="phoneNumber"/>
              </div>
              <div className="modal__field">
                <label htmlFor="phoneType">Тип телефона</label>
                <input type="text" id="phoneType"/>
              </div>
              <div className="modal__field">
                <label htmlFor="status">Статус</label>
                <input type="text" id="status"/>
              </div>
            </div>
            <div className="modal__btns">
              <button className="btn btn--submit">
                Сохранить
              </button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default Modal;
