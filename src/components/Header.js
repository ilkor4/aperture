/* Компонент хэдер - шапка сайта */

import headerLogo from '../images/Aperture.svg';
import '../styles/Header.css';

export default function Header() {
  return(
    <div className="header">
        <img src={headerLogo} alt="Логотип фотостудии" class="logo" />
        <nav class="header__menu">
          <ul class="menu">
            <li class="menu__link">Футболка</li>
            <li class="menu__link">Шорты</li>
            <li class="menu__link">Кофта</li>
            <li class="menu__link">Штаны</li>
            <li><button class="menu__button">Связаться</button>
            </li>
          </ul>
        </nav>
    </div>
  )
}
