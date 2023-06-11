/* Компонент описание - блок, содержащий информацию о нашей компании */

import '../styles/About.css';

export default function About() {
  return(
    <section className="tools">
    <ul className="two-columns">
      <li className="first-column">
        <div className="first-column__desk">
          <p className="first-column__subtitle">Интернет-заказ</p>
          <h2 className="first-column__title">Воспользуйтесь онлайн-сервисом</h2>
          <p className="first-column__text">Наше фирменное ателье находится по адрессу г. Москва, Дзержинского 34. Но для того, чтобы оформить заказ, не обязательно туда ехать. Вы можете, выбрать подходящую категорию одежды,  указать нужные параметры и дождаться, пока наш курьер привезёт ваш заказ.</p>
        </div>
      </li>
      <li className="second-column"></li>
    </ul>
  </section>
  )
}
