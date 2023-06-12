/* Компонент попапа формы - блок, отвечающий за конструктор заказа */

import React from "react";

import vectorPath from "../images/Vector.svg";
import closePath from "../images/Close-Icon.svg";
import "../styles/PopupWithForm.css";

const orderFetch = (url, options) => {
  return fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
}

const typeList = ['Футболка', 'Шорты', 'Кофта', 'Штаны'];
const fabricList = ['Мех', 'Картон', 'Хлопок', 'Лён'];

export default function PopupWithForm(props) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [color, setColor] = React.useState("");
  const [bust, setBust] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [sleeve, setSleeve] = React.useState(0);
  const [waist, setWaist] = React.useState(0);
  const [trousersLength, setTrousersLength] = React.useState(0);
  const [booty, setBooty] = React.useState(0);

  const [isOpenTypeList, setOpenTypeList] = React.useState(false);
  const onClickType = () => setOpenTypeList((prevState) => !prevState);

  const onClickTypeItem = (index) => {
    props.setType(index);
    setOpenTypeList((prevState) => !prevState);
  }

  const [fabric, setFabric] = React.useState(0);
  const [isOpenFabricList, setOpenFabricList] = React.useState(false);
  const onClickFabric = () => setOpenFabricList((prevState) => !prevState);

  const onClickFabricItem = (index) => {
    setFabric(index);
    setOpenFabricList((prevState) => !prevState);
  }

  const handleChangeName = evt => setName(evt.target.value);
  const handleChangePhone = evt => setPhone(evt.target.value);
  const handleChangeColor = evt => setColor(evt.target.value);
  const handleChangeBust = evt => setBust(evt.target.value);
  const handleChangeHeight = evt => setHeight(evt.target.value);
  const handleChangeSleeve = evt => setSleeve(evt.target.value);
  const handleChangeWaist = evt => setWaist(evt.target.value);
  const handleChangesTrousers = evt => setTrousersLength(evt.target.value);
  const handleChangeBooty = evt => setBooty(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    orderFetch('http://localhost:3000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        phoneNumber: phone,
        type: typeList[props.type],
        fabrics: fabricList[fabric],
        color: color,
        height: height,
        bust: bust,
        waist: waist,
        sleeve: sleeve,
        trousersLength: trousersLength,
        booty: booty
      })
    });

    props.closePopup();
  }

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className={`popup__container`}>
          <button className="popup__button-close" type="button">
            <img className="popup__close-image" src={closePath} alt="Закрыть" onClick={props.closePopup} />
          </button>
          <h2 className="popup__heading">Оформление заказа</h2>
          <form action="submit" className="popup__form" onSubmit={handleSubmit}>
            <fieldset className="popup__fieldset">
              <input type="text" className="popup__input" required placeholder="Имя заказчика" value={name || ''} onChange={handleChangeName}/>
              <input type="text" className="popup__input" required placeholder="Номер телефона" value={phone || ''} onChange={handleChangePhone}/>
              <div className="popup__input-container">
                <input type="text" className="popup__input" required readOnly={true}value={typeList[props.type]}/>
                <img className="popup__vector" src={vectorPath} alt="Вектор" onClick={onClickType}/>
                {isOpenTypeList && (
                  <div className="popup__sort">
                    <ul className="popup__sort-list">
                      {typeList.map((item, index) => <li key={index} onClick={() => onClickTypeItem(index)} className={`popup__sort-item ${props.type === index ? "active" : ""}`}> {item} </li>)}
                    </ul>
                  </div>
                )}
              </div>
              <div className="popup__input-container">
                <input type="text" className="popup__input" required placeholder="Занятие" readOnly={true} value={fabricList[fabric]}/>
                <img className="popup__vector" src={vectorPath} alt="Вектор" onClick={onClickFabric}/>
                {isOpenFabricList && (
                  <div className="popup__sort">
                    <ul className="popup__sort-list">
                      {fabricList.map((item, index) => <li key={item} onClick={() => onClickFabricItem(index)} className={`popup__sort-item ${fabric === index ? "active" : ""}`}>{item}</li>)}
                    </ul>
                  </div>
                )}
              </div>
              <input type="text" className="popup__input" required placeholder="Цвет" value={color || ''} onChange={handleChangeColor}/>
              <input type="number" className="popup__input" required placeholder="Рост" value={bust || ''} onChange={handleChangeBust}/>
              {props.type === 0 || props.type === 2 ?
                <>
                  <input type="number" className="popup__input" required placeholder="Обхват груди" value={height || ''} onChange={handleChangeHeight}/>
                  <input type="number" className="popup__input" required placeholder="Длина Рукавов" value={sleeve || ''} onChange={handleChangeSleeve}/>
                </> :
                <>
                  <input type="number" className="popup__input" required placeholder="Талия" value={waist || ''} onChange={handleChangeWaist}/>
                  <input type="number" className="popup__input" required placeholder="Длина штанов" value={trousersLength || ''} onChange={handleChangesTrousers}/>
                  <input type="number"className="popup__input" required placeholder="Обхват ягодиц" value={booty || ''} onChange={handleChangeBooty}/>
                </>
              }
              <button className="popup__submit popup__submit_type_edit" type="submit">Заказать</button>
            </fieldset>
          </form>
        </div>
      </section>
  )
}
