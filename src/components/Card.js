/* Компонент карточки - блок категории одежды */

import decorImage from '../images/Decor.svg';
import'../styles/Card.css';

export default function Card(props) {
  return(
    <li class="cards__item" id={props.index}>
      <h3 class="cards__title margin-zero">{props.card.title}</h3>
    <p class="cards__text">{props.card.text}</p>
    <button class="cards__button">
      <img src={decorImage} alt='Декоративное изображение' class="cards__button-image rotate" />Заказать
    </button>
  </li>
  )
}
