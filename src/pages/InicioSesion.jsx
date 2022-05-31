import { useEffect, useState } from 'react';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';
import { login } from './protectedRoutes';
import './css/InicioSesion.css'

export default function InicioSesion() {
    const [name, setName] = useState('');
    const [ci, setCi] = useState('');
    const [student, setStudent] = useState([]);

    const fetchInfoStudent = async () => {
        const response = await fetch(`http://localhost:4000/estudiante/${ci}`);
        const studentData = await response.json();
        setStudent(studentData);
        console.log(student)
    }

    useEffect(() => {
        fetchInfoStudent()
    }, [])

    const handleInputChangeName = e => {
        setName(e.target.value)
    }

    const handleInputChangeCi = e => {
        setCi(e.target.value)
    }


    const credentialsValidation = () => {
        fetchInfoStudent()
        for (var i = 0; i < student.length; i++) {
            if (name === student[i].nombre && ci === student[i].ci) {
                login();
                <Navigate to={'/prestamos'}></Navigate>
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
                    <input type='text' name='name' placeholder='Nombre' onChange={handleInputChangeName} defaultValue='Luis'></input>
                </div>
                <div>
                    <input type='text' id='contraseña' name='contraseña' placeholder='Documento de identidad' onChange={handleInputChangeCi} defaultValue='CC-156'></input>
                </div>
                <button className='btn_ingresar' type='submit' onClick={credentialsValidation}>{<Link to={'/prestamos'} state={{username:name, id_lector:student[[0].id_lector]}} >Enviar</Link>}</button>
                <div className='down'>
                    <NavLink to='/registrarse' className='go_registrarse'><span>¿No tienes cuenta? Registrate</span></NavLink>
                    <Link to='#' className=''><span>Recuperar contraseña</span></Link>
                </div>
            </form>

        </div>
    )
}