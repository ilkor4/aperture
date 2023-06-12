/* Основной компонент приложения - исходная страница */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupContact from './PopupContact';
import '../styles/App.css';

function App() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [type, setType] = React.useState(0);
  const [openPopupContact, setOpenPopupContact] = React.useState(false);

  const closePopup = () => {
    setOpenPopup(false);
    setOpenPopupContact(false);
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header handleOpenPopup={setOpenPopup} setType={setType} onClickContact={setOpenPopupContact} />
            <Main handleOpenPopup={setOpenPopup} setType={setType} />
            <Footer onClickContact={setOpenPopupContact} />
            <PopupWithForm isOpen={openPopup} closePopup={closePopup} setType={setType} type={type} />
            <PopupContact isOpen={openPopupContact} closePopup={closePopup} />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
