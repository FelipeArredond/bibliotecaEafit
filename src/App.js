import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import internalRoutes from './routes/internalRoute_config';

import './App.css';
import externalRoutes from './routes/externalRoute_config';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            {internalRoutes.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />}></Route>)}
          </Route>
        </Routes>

        <Routes>
          {externalRoutes.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} />)}
        </Routes>
      </BrowserRouter >
    </div >

  );
}

export default App;
