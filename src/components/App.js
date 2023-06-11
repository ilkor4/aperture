import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
