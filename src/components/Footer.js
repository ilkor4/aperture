/* Подвал сайта - блок, отвечающий за конечную информацию */

import decorImage from '../images/Decor.svg';
import '../styles/Footer.css';

export default function Footer() {
  return(
    <section className="footer">
      <h2 className="footer__title">Остались вопросы?</h2>
      <p className="footer__subtitle">Свяжитесь с нами!</p>
      <button className="footer__button">
        <img src={decorImage} alt="Decor" className="footer__button-image rotate" />Заказать звонок
      </button>
      <hr className="footer__string" />
      <p className="footer__copyright">© Aperture Studio, Inc. All rights reserved. Licensing.</p>
    </section>
  )
}
