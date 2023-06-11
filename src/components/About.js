/* Компонент описание - блок, содержащий информацию о нашей компании */

import '../styles/About.css';

export default function About() {
  return(
    <section class="tools">
    <ul class="two-columns">
      <li class="first-column">
        <div class="first-column__desk">
          <p class="first-column__subtitle">Интернет-заказ</p>
          <h2 class="first-column__title">Воспользуйтесь онлайн-сервисом</h2>
          <p class="first-column__text">Наше фирменное ателье находится по адрессу г. Москва, Дзержинского 34. Но для того, чтобы оформить заказ, не обязательно туда ехать. Вы можете, выбрать подходящую категорию одежды,  указать нужные параметры и дождаться, пока наш курьер привезёт ваш заказ.</p>
        </div>
      </li>
      <li class="second-column"></li>
    </ul>
  </section>
  )
}
