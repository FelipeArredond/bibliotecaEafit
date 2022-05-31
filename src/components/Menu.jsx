import { Link, Outlet } from "react-router-dom";
import './css/Menu.css'
import logo from './img/logo.png'


export default function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="logo" src={logo} alt="Logo" />
                <Link to="/inicio" className="textLogo navbar-brand">EAFIT LIBRARY</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/inicio" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/libros" className="nav-link">Libros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prestamos" className="nav-link">Prestamos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prestar" className="nav-link">Prestar</Link>
                        </li>
                        <li className="sesion_close nav-item">
                            <Link to="/" className="nav-link">Cerrar sesion</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='container'>
                <Outlet />
            </div>

        </div>
    )
}
