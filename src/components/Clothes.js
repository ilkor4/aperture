/* Компонент одежда - блок, который хранит ассортиент карточек */

import { cardsArray } from "../utils/constants";
import Card from "./Card";
import '../styles/Clothes.css';

export default function Clothes (props) {
  const handleOpenPopup = (index) => {
    props.handleOpenPopup(true);
    props.setType(index);
  }

  return (
    <section className="clothes">
      <h2 className="clothes__title">Что мы делаем?</h2>
      <p className="clothes__subtitle">Наша студия специализируется на базовых элементах.</p>
      <ul className="cards">
      {cardsArray.map((item, index) => {
          return(
           <Card card={item} handleOpenPopup={() => handleOpenPopup(index)} key={index}/>
          );
      })
      }
      </ul>
    </section>
  )
}
