import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Btn from '../components/Btn';
import './css/InicioSesion.css'


export default function InicioSesion() {

    const [selectedUser, setSelecteUser] = useState([])

    const [stateIngreso, setStateIngreso] = useState(false)

    const loadUser = async (valores) => {
        const respuesta = await fetch(`http://localhost:3032/usuario/${valores.id}`)
        const data = await respuesta.json()

        setSelecteUser(data)
        console.log(selectedUser)

        if (valores.email === data.email) {
            if (valores.contraseña === data.contrasena) {
                setStateIngreso(true)
            }
        } else {
            console.log('No funciona')
        }

    }

    return (
        <div className='body'>
            <Formik initialValues={{
                //Por ahora let is work wich id harcodeado para a unique user
                id: 1001,
                email: 'emailDefault@eafit.edu.co',
                contraseña: 'undefined'
            }}
                onSubmit={valores => {
                    console.log(valores)
                    loadUser(valores)

                }}


            >
                <div className='body'>
                    <Form className='form_sesion'>
                        <h3>Inicio de sesion</h3>
                        <div>
                            <Field name='email' type='text' placeholder='email' />
                        </div>
                        <div>
                            <Field name='contraseña' type='text' placeholder='contraseña' />
                        </div>
                        <div className='down'>
                            {
                                stateIngreso ? <NavLink to='/inicio' className='btn btn-primary'>Ingresar</NavLink> :
                                    <Btn className='btn btn-primary' type='submit' any='Comprobar' />
                            }
                            <br />

                            {/* <Btn className='btn btn-primary' type='submit' any='Comprobar' >
                                <NavLink to='/inicio' className='btn btn-primary'>Ingresar</NavLink>
                            </Btn> */}

                            <NavLink to='/registrarse' className='go_registrarse'><span>¿No tienes cuenta? Registrate</span></NavLink>
                            <Link to='#' className=''><span>Recuperar contraseña</span></Link>
                        </div>
                    </Form>
                </div>
            </Formik>




        </div>
    )
}
