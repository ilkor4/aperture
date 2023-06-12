/* Секция вступления - первый блок, который знакомит посетителя с компанией */

import '../styles/Lead.css';

export default function Lead() {
  return(
      <section className="lead" aria-label="Секция вступления">
       <div className="description">
          <p className="description__subtitle">Пошив одежды</p>
          <h1 className="description__title">Aperture Studio</h1>
          <p className="description__text">В ателье Aperture вы можете заказать пошив женской и мужской одежды на заказ. Мы предлагаем различные варианты создания одежды, которую можно повторить точь-в-точь или с изменениями, а также воплощаем ваши пожелания по индивидуальному пошиву. В обоих случаях вы получаете изделие, сделанное по вашим меркам. Никаких таблиц размеров и неточного кроя, только отличная посадка и комфорт!</p>
        </div>
      </section>
  )
}
