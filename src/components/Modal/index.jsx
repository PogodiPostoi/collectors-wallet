import Popup from "reactjs-popup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import modalFormContent from "../../utilities/modalFormContent.json";

const Modal = ({ type, className }) => {

  // Тут ищу формулу для валидации, в зависимости от пришедшего типа формы
  const validateFormula = () => {
    if (type === "phoneAdd" || type === "phoneEdit") {
      return /^((\+7|7|8)+([0-9]){10})$/
    } else if (type === "emailAdd" || type === "emailEdit") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    } else {
      return /\S+/
    }
  }

  const errorMessage = () => {
    if (type === "phoneAdd" || type === "phoneEdit") {
      return "Заполните корректный номер телефона"
    } else if (type === "emailAdd" || type === "emailEdit") {
      return "Заполните корректный email-адрес" 
    } else {
      return "Заполните хоть что-то"
    }
  }

  // Тут искал из json'a поля для формы
  const modalContentFind = () => {
    return modalFormContent.find(el => el.type === type)
  }
  const modalContent = modalContentFind()



  // Для контроля состояний input'ов Formik из формик, делаем к каждой форме свои начальные значения: 
  const InitialFields = {}
  modalContent.fields.forEach(field => {
    InitialFields[field.id] = "";
  });
  
  // Для валидации находим 1 ключ, чтобы его использовать для проверки
  const firstKey = Object.keys(InitialFields)[0]

  const fields = modalContent.fields.map((item, i) => {
    return (
      <div className="modal__field" key={i}>
        <label htmlFor={item.htmlFor} className={item.id === firstKey && "required"}> {item.label} </label>
        <Field type={item.inputType} name={item.id} id={item.id} />
      </div>
    )
  })

  return (
    <>
      <Popup trigger={<button className={className}></button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="modal__title-block">
              <h3 className="modal__title"> {modalContent.title} </h3>
              <button
                className="btn btn--close-modal modal__btn-close"
                onClick={close}
              ></button>
            </div>
              <Formik
                initialValues={ InitialFields }
                validate={values => {
                  const errors = {};
                  if (!values[firstKey]) {
                    errors[firstKey] = `${errorMessage()}`;
                  } else if (
                    !validateFormula().test(values[firstKey])
                  ) {
                    errors[firstKey] = `${errorMessage()}`;
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="modal__fields-container">
                    {fields}
                    <ErrorMessage className="msg--error" name={firstKey} component="div" />
                    <div className="modal__btns">
                      <button className="btn btn--submit" type="submit" disabled={isSubmitting} onClick={()=> alert("Извините, действие ещё в разработке")}>
                        Сохранить
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
          </div>
        )}
      </Popup>
    </>
  );
};

export default Modal;