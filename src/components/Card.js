/* Компонент карточки - блок категории одежды */

import decorImage from '../images/Decor.svg';
import'../styles/Card.css';

export default function Card(props) {
  function handleOpenPopup() {
    props.handleOpenPopup(true)
  }

  return(
    <li className="cards__item">
      <h3 className="cards__title margin-zero">{props.card.title}</h3>
    <p className="cards__text">{props.card.text}</p>
    <button className="cards__button" onClick={handleOpenPopup}>
      <img src={decorImage} alt='Декоративное изображение' className="cards__button-image rotate" />Заказать
    </button>
  </li>
  )
}
