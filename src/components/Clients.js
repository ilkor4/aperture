/* Секция клиенты - блок, демонстрирующий партнеров компании. */

import hillImage  from '../images/clients/hill.png';
import riksgransenImage from '../images/clients/riksgransen.png';
import studioImage from '../images/clients/studio.png';
import chillImage from '../images/clients/chill.png';
import stockholmImage from '../images/clients/stockholm.png';
import '../styles/Clients.css';

export default function Clients() {
  return(
    <section class="clients">
      <h2 class="clients__title">Наши клиенты</h2>
      <p class="clients__subtitle">Мы работаем со многими популярными компаниями</p>
      <ul class="logo-content">
        <li class="logo-content__logo">
          <img src={hillImage} alt="hill" />
        </li>
        <li class="logo-content__logo">
          <img src={riksgransenImage} alt="riksgransen" />
        </li>
        <li class="logo-content__logo">
          <img src={studioImage} alt="studio" />
        </li>
        <li class="logo-content__logo">
          <img src={chillImage} alt="chill" />
        </li>
        <li class="logo-content__logo">
          <img src={stockholmImage} alt="stockholm" />
        </li>
    </ul>
  </section>
  )
}
