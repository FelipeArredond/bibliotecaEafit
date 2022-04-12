import { Link, NavLink } from 'react-router-dom';

import './css/InicioSesion.css'

export default function InicioSesion() {
    return (
        <div className='body'>
            <form className='form_sesion'>
                <h3>Inicio de sesion</h3>
                <div>
                    <input type='text' name='correo' placeholder='Example@eafit.edu.co'></input>
                </div>
                <div>
                    <input type='text' id='contraseña' name='contraseña' placeholder='contraseña'></input>
                </div>
                <button className='btn_ingresar' type='submit'>Enviar</button>
                <div className='down'>
                    <NavLink to='#' className='go_registrarse'><span>¿No tienes cuenta? Registrate</span></NavLink>
                    <Link to='#' className=''><span>Recuperar contraseña</span></Link>
                </div>
            </form>

        </div>
    )
}