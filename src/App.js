import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import internalRoutes from './routes/internalRoute_config';

import './App.css';
import externalRoutes from './routes/externalRoute_config';
import Inicio from './pages/Inicio';
import Libros from './pages/Libros';
import Prestamos from './pages/Prestamos';
import Student from './pages/Student';
import ProtectedRoutes from './pages/protectedRoutes';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/log' element={<Inicio/>}/>
        <Route element={<ProtectedRoutes></ProtectedRoutes>}>
          <Route path='/libros' element={<Libros></Libros>}/>
          <Route path='/prestamos' element={<Prestamos/>} />
          <Route path='/estudiante' element={<Student/>} />
        </Route>
      </Routes>
    </div >

  );
}

export default App;
