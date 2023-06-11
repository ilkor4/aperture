/* Компонент одежда - блок, который хранит ассортиент карточек */

import { cardsArray } from "../utils/constants";
import Card from "./Card";
import '../styles/Clothes.css';

export default function Clothes () {
  return (
    <section class="clothes">
      <h2 class="clothes__title">Что мы делаем?</h2>
      <p class="clothes__subtitle">Наша студия специализируется на базовых элементах.</p>
      <ul class="cards">
      {cardsArray.map((item, index) => {
          return(
           <Card card={item} index={index}/>
          );
      })
      }
      </ul>
    </section>
  )
}
