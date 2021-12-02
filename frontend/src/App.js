// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EncomendaStorage } from './api/context';
import Encomendas from './components/screens/encomendas'

function App() {
  return (
    <>
      <BrowserRouter>
        <EncomendaStorage>
          <Routes>
            <Route path="/" element={<Encomendas />} />
          </Routes>
        </EncomendaStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
