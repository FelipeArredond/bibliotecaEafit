import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import externalRoutes from './routes/externalRoute_config';
import Inicio from './pages/Inicio';
import Libros from './pages/Libros';
import Prestamos from './pages/Prestamos';
import Student from './pages/Student';
import ProtectedRoutes from './pages/protectedRoutes';
import InicioSesion from './pages/InicioSesion';
import Prestar from './pages/Prestar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<InicioSesion />} />
        {externalRoutes.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} />)}
        <Route>
          {/* `<Route element={<ProtectedRoutes></ProtectedRoutes>}>` */}
          <Route path='/libros' element={<Libros />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/prestamos' element={<Prestamos />} />
          <Route path='/prestar' element={<Prestar/>} />
          
          <Route path='/estudiante' element={<Student />} />
        </Route>
      </Routes>
    </div >

  );
}

export default App;
