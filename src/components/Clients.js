/* Секция клиенты - блок, демонстрирующий партнеров компании. */

import hillImage  from '../images/clients/hill.png';
import riksgransenImage from '../images/clients/riksgransen.png';
import studioImage from '../images/clients/studio.png';
import chillImage from '../images/clients/chill.png';
import stockholmImage from '../images/clients/stockholm.png';
import '../styles/Clients.css';

export default function Clients() {
  return(
    <section className="clients">
      <h2 className="clients__title">Наши клиенты</h2>
      <p className="clients__subtitle">Мы работаем со многими популярными компаниями</p>
      <ul className="logo-content">
        <li className="logo-content__logo">
          <img src={hillImage} alt="hill" />
        </li>
        <li className="logo-content__logo">
          <img src={riksgransenImage} alt="riksgransen" />
        </li>
        <li className="logo-content__logo">
          <img src={studioImage} alt="studio" />
        </li>
        <li className="logo-content__logo">
          <img src={chillImage} alt="chill" />
        </li>
        <li className="logo-content__logo">
          <img src={stockholmImage} alt="stockholm" />
        </li>
    </ul>
  </section>
  )
}
