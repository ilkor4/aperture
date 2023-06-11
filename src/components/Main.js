/* Компонент main - содержит в себе все содержимое страницы */

import Lead from './Lead';
import Clothes from './Clothes';
import About from './About';
import Clients from './Clients';
import '../styles/Main.css';

export default function Main(props) {
  return(
    <main className="content">
           <>
        <Lead />
        <Clothes  handleOpenPopup={props.handleOpenPopup}/>
        <About />
        <Clients />
      </>
    </main>

  )
}
