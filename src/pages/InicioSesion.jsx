import { useEffect, useState } from 'react';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';
import ProtectedRoutes, { login } from './protectedRoutes';

import './css/InicioSesion.css'

export default function InicioSesion() {

    const [students , setStudents] = useState([]);
    const [name, setName] = useState('');
    const [ci, setCi] = useState('');

    const fetchInfoStudents =  async () => {
        const response = await fetch('http://localhost:4000/estudiante');
        const studentsData = await response.json();
        setStudents(studentsData); 
    }

    useEffect(() => {
        fetchInfoStudents();
    },[])

    const handleInputChangeName = e => {
        setName(e.target.value)
    }

    const handleInputChangeCi = e => {
        setCi(e.target.value)
    }

    const credentialsValidation = () =>{
        for(var i = 0; i < students.length; i++){
            if(name === students[i].nombre && ci === students[i].ci){
                login();
            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
    }
 
    return (
        <div className='body'>
            <form className='form_sesion' onSubmit={handleSubmit}>
                <h3>Inicio de sesion</h3>
                <div>
                    <input type='text' name='name' placeholder='Nombre' onChange={handleInputChangeName}></input>
                </div>
                <div>
                    <input type='text' id='contraseña' name='contraseña' placeholder='Documento de identidad' onChange={handleInputChangeCi}></input>
                </div>
                <button className='btn_ingresar' type='submit' onClick={credentialsValidation} ><Link to={'/libros'}>Enviar</Link></button>
                <div className='down'>
                    <NavLink to='#' className='go_registrarse'><span>¿No tienes cuenta? Registrate</span></NavLink>
                    <Link to='#' className=''><span>Recuperar contraseña</span></Link>
                </div>
            </form>

        </div>
    )
}