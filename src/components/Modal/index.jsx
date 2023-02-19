import Popup from "reactjs-popup";

import modalFormContent from "../../utilities/modalFormContent.json"

const Modal = ({type, className}) => {

  const modalContentFind = () => {
    return modalFormContent.find(el => el.type === type)
  }
  const modalContent = modalContentFind()

  const fields = modalContent.fields.map((item, i) => {
    return (
      <div className="modal__field" key={i}>
        <label htmlFor={item.htmlFor}> {item.label} </label>
        <input type={item.inputType} id={item.id}/>
      </div>
    )
  })
  return (
    <>
      <Popup 
        trigger={<button className={className}></button>} 
        modal 
        nested
      >
        {(close) => (
          <div className="modal">
            <div className="modal__title-block">
              <h3 className="modal__title"> {modalContent.title} </h3>
              <button className="btn btn--close-modal modal__btn-close" onClick={close}></button>
            </div>
            <div className="modal__fields-container">
              {fields}
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
