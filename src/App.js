import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import externalRoutes from './routes/externalRoute_config';
import internalRoutes from './routes/internalRoute_config';
import InicioSesion from './pages/InicioSesion';


import Menu from './components/Menu';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InicioSesion />}></Route>
          {externalRoutes.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} />)}
          <Route element={<Menu />}>
            {internalRoutes.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />}></Route>)}
          </Route>
        </Routes>
      </BrowserRouter >
    </div >


  );
}


export default App;
