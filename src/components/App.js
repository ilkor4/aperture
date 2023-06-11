/* Основной компонент приложения - исходная страница */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import '../styles/App.css';

function App() {
  const [openPopup, setOpenPopup] = React.useState(false);

  const closePopup = () => {
    setOpenPopup(false);
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header handleOpenPopup={setOpenPopup}/>
            <Main handleOpenPopup={setOpenPopup}/>
            <Footer />
            <PopupWithForm isOpen={openPopup} closePopup={closePopup}/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
