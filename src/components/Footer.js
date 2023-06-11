/* Подвал сайта - блок, отвечающий за конечную информацию */

import decorImage from '../images/Decor.svg';
import '../styles/Footer.css';

export default function Footer() {
  return(
    <section class="footer">
      <h2 class="footer__title">Остались вопросы?</h2>
      <p class="footer__subtitle">Свяжитесь с нами!</p>
      <button class="footer__button">
        <img src={decorImage} alt="Decor" class="footer__button-image rotate" />Заказать звонок
      </button>
      <hr class="footer__string" />
      <p class="footer__copyright">© Aperture Studio, Inc. All rights reserved. Licensing.</p>
    </section>
  )
}
