/* Компонент хэдер - шапка сайта */

import headerLogo from '../images/Aperture.svg';
import { clothesList } from '../utils/constants';
import '../styles/Header.css';



export default function Header(props) {
  function handleOpenPopup(index) {
    props.handleOpenPopup(true)
    props.setType(index)
  }

  const handleOpenContact = () => props.onClickContact((prevState) => !prevState)

  return(
    <div className="header">
        <img src={headerLogo} alt="Логотип фотостудии" className="logo" />
        <nav className="header__menu">
          <ul className="menu">
            {clothesList.map((item, index) => <li key={item} className="menu__link" onClick={() => handleOpenPopup(index)}>{item}</li>)}
            <li>
              <button className="menu__button" onClick={handleOpenContact}>Связаться</button>
            </li>
          </ul>
        </nav>
    </div>
  )
}
