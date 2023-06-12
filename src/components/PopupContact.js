import closePath from "../images/Close-Icon.svg";

export default function PopupContact(props) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.closePopup();
  }

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className={`popup__container popup__container_type_contact`}>
          <button className="popup__button-close" type="button">
            <img className="popup__close-image" src={closePath} alt="Закрыть" onClick={props.closePopup} />
          </button>
          <h2 className="popup__heading">Заказать звонок</h2>
          <form action="submit" className="popup__form" onSubmit={handleSubmit}>
            <fieldset className="popup__fieldset popup__fieldset_type_contact">
              <input type="text" className="popup__input popup__input_type_contact" required placeholder="Введите ваш номер телефона" /*value={name || ''} onChange={handleChangeName}*//>
              <button className="popup__submit popup__submit_type_contact" type="submit">Оставить свой телефон</button>
            </fieldset>
          </form>
        </div>
      </section>
  )
}
