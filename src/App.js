import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { Routes,Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Factura from './pages/user/ComprobantePagos/Factura';
import Boleta from './pages/user/ComprobantePagos/Boleta';

function App() {
  return (
    <div>
      <Sidebar/>
      <div>
        <main>
          <div className='md:ml-64 bg-gray-200'>
            <Routes>
              <Route path='/' element={<Inicio/>} />
              <Route path='/factura' element={<Factura/>} /> 
              <Route path='/boleta' element={<Boleta/>}/> 
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
