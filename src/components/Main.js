/* Компонент main - содержит в себе все содержимое страницы */

import Lead from './Lead';
import Clothes from './Clothes';
import '../styles/Main.css';

export default function Main() {
  return(
    <main className="content">
           <>
        <Lead />
        <Clothes />
      </>
    </main>

  )
}
