import Menu from './components/Menu'
import internalRoutes from './routes/internalRoute_config'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function InternalApp() {
    return (
        <div>
            <BrowserRouter>
                {internalRoutes.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />}></Route>)}
            </BrowserRouter>
        </div>
    )
}
