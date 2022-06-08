import { useContext, useEffect, useState, useRef } from 'react';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';
import { login } from './protectedRoutes';
import './css/InicioSesion.css'
import { authContext } from '../context/authContext';

export default function InicioSesion() {
    const [name, setName] = useState('');
    const [ci, setCi] = useState('');
    const [student, setStudent] = useState([]);

    const {setUserData} = useContext(authContext)

    const fetchInfoStudent = async () => {
        const response = await fetch(`http://localhost:4000/estudiante/${ci}`);
        const studentData = await response.json();
        setStudent(studentData);
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
                setUserData({
                    userName: student[i].nombre,
                    id: student[i].id_lector,
                    admin: false
                })
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
                    <input type='text' name='name' placeholder='Nombre' onChange={handleInputChangeName}></input>
                </div>
                <div class="adjust-style">
                    <input type='text' id='contraseña' name='contraseña' placeholder='Documento de identidad' onChange={handleInputChangeCi}></input>
                </div>
                <Link to='#' className='recover-password'><span>Recuperar contraseña</span></Link>
                <div className='down'>
                {<Link to={'/prestamos'} state={{username:name, id_lector:student[[0].id_lector]}} ><button className='btn_ingresar' type='submit' onClick={credentialsValidation}>Enviar</button></Link>}
                    <p>¿No tienes cuenta? <NavLink to='/registrarse' className='go_registrarse'><span> Registrate</span></NavLink></p>
                </div>
            </form>

        </div>
    )
}