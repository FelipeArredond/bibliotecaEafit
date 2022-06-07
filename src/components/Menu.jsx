import { Link, Outlet } from "react-router-dom";
import logo from './img/logo1.png'
import './css/Menu.css'


export default function Menu() {
    return (
        <div class="bckg-navbar">
            <div class="cont-navbar">
            <nav className="navbar-bckg navbar navbar-expand-lg navbar-light">
                <img className="logo" src={logo} alt="Logo" />
                <Link to="/inicio" className="textLogo navbar-brand">LIBRARY</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/inicio">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/libros">Libros</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/prestamos">Préstamos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/prestar">Prestar</Link>
                            </li>
                            <li className="sesion_close nav-item">
                                <Link to="/">Cerrar sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='container'>
                <Outlet />
            </div>
            </div>
        </div>
    )
}
