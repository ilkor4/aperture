/* Компонент хэдер - шапка сайта */

import headerLogo from '../images/Aperture.svg';
import '../styles/Header.css';

export default function Header(props) {
  function handleOpenPopup() {
    props.handleOpenPopup(true)
  }

  return(
    <div className="header">
        <img src={headerLogo} alt="Логотип фотостудии" className="logo" />
        <nav className="header__menu">
          <ul className="menu">
            <li className="menu__link" onClick={handleOpenPopup}>Футболка</li>
            <li className="menu__link" onClick={handleOpenPopup}>Шорты</li>
            <li className="menu__link" onClick={handleOpenPopup}>Кофта</li>
            <li className="menu__link" onClick={handleOpenPopup}>Штаны</li>
            <li><button className="menu__button">Связаться</button>
            </li>
          </ul>
        </nav>
    </div>
  )
}
