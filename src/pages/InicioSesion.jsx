import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { login } from './protectedRoutes';
import './css/InicioSesion.css'
import { AuthContext } from '../context/AuthContext';

export default function InicioSesion() {
    const [name, setName] = useState('');
    const [ci, setCi] = useState('');
    const [student, setStudent] = useState({
        carrera: 0,
        ci: 0,
        direccion: '',
        edad: 0,
        id_lector: 0,
        nombre: ''
    });

    const navigate = useNavigate()
    const {userData, setUserData} = useContext(AuthContext)


    const fetchInfoStudent = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:4000/estudiante/${ci}`);
        const studentData = await response.json();
        setStudent({
            carrera: studentData[0].carrera,
            ci: studentData[0].ci,
            direccion: studentData[0].direccion,
            edad: studentData[0].edad,
            id_lector: studentData[0].id_lector,
            nombre: studentData[0].nombre
        });
        setUserData({
            name: studentData[0].nombre,
            id_lector: studentData[0].id_lector
        })
        login();
        navigate('/prestar')
    }

    const handleInputChangeName = e => {
        setName(e.target.value)
    }

    const handleInputChangeCi = e => {
        setCi(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className='body'>
            <form className='form_sesion' onSubmit={handleSubmit}>
                <h3>Inicio de sesion</h3>
                <div>
                    <input type='text' name='name' placeholder='Nombre' onChange={handleInputChangeName} defaultValue='Luis'></input>
                </div>
                <div>
                    <input type='text' id='contraseña' name='contraseña' placeholder='Documento de identidad' onChange={handleInputChangeCi} defaultValue='CC-156'></input>
                </div>
                <button className='btn_ingresar' type='submit' onClick={fetchInfoStudent}>Enviar</button>
                <div className='down'>
                    <NavLink to='/registrarse' className='go_registrarse'><span>¿No tienes cuenta? Registrate</span></NavLink>
                    <Link to='#' className=''><span>Recuperar contraseña</span></Link>
                </div>
            </form>

        </div>
    )
}