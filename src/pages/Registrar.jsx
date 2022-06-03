import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react'

import './css/regitro.css'

export default function () {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    const addStudent = async (valores) => {
        const res = await fetch('http://localhost:4000/estudiante', {
            method: "POST",
            body: JSON.stringify(valores), //Convierte el objeto tarea en un string
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        console.log(data)
    }


    return (
        <div className='body'>
            <h1 className='register_title'>Registrarse</h1>

            <Formik
                initialValues={{
                    id_lector: 1919,
                    nombre: '',
                    edad: '',
                    ci: '',
                    carrera: '',
                    direccion: '',

                }}
                validate={(valores) => {
                    let errores = {}
                    if (valores.nombre === '') {
                        errores.nombre = 'Ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    if (valores.edad === '') {
                        errores.edad = 'Ingresa una edad'
                    } else if (!/^[0-9.]{1,2}$/.test(valores.edad)) {
                        errores.edad = 'Edad incorrecta'
                    }

                    if (valores.ci === '') {
                        errores.ci = 'Ingresa un documento'
                    } else if (!/^[0-9.]{7,20}$/.test(valores.ci)) {
                        errores.ci = 'undefined'
                    }

                    if (valores.carrera === '') {
                        errores.carrera = 'Ingresa una carrera'
                    } else if (!/^[0-9.]{1,2}$/.test(valores.carrera)) {
                        errores.carrera = 'La carrera solo puede contener numeros'
                    }

                    if (valores.direccion === '') {
                        errores.direccion = 'Ingresa un direccion'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{8,99}/.test(valores.direccion)) {
                        errores.direccion = 'Direccion indefinida'
                    }

                    return errores

                }
                }

                onSubmit={(valores, { resetForm }) => { //Extrear reser form {reserForm}

                    resetForm() //Limpiar el formulario despues de darle a btn enviar
                    cambiarFormularioEnviado(true)
                    setTimeout(() => cambiarFormularioEnviado(false), 3000) //cambiar a flse despues de 3seg para que mms desaparezca 

                    console.log(valores)
                    addStudent(valores)
                }}
            >
                {
                    ({ errors }) => (
                        <Form className='form_register'>
                            <div>
                                <label>Identificador    </label>
                                <Field type='text' name='id_lector' placeholder='id_lector'></Field>
                                <ErrorMessage name='id_lector' component={() => (<div className='error'>{errors.id_lector}</div>)}></ErrorMessage>
                            </div>

                            <div>
                                <label>Nombres</label>
                                <Field type='text' name='nombre' placeholder='Primer nombre'></Field>
                                <ErrorMessage name='nombre' component={() => (<div className='error'>{errors.nombre}</div>)}></ErrorMessage>
                            </div>

                            <div>
                                <label>Edad</label>
                                <Field type='text' name='edad' placeholder='Edad'></Field>
                                <ErrorMessage name='edad' component={() => (<div className='error'>{errors.edad}</div>)}></ErrorMessage>
                            </div>

                            <div>
                                <label>Documento</label>
                                <Field
                                    type='text' name='ci' placeholder='Example: CC-1234567789.'></Field>
                                <ErrorMessage name='ci' component={() => (
                                    <div className='error'>{errors.ci}</div>
                                )}></ErrorMessage>
                            </div>

                            <div>
                                <label>Carrera</label>
                                <Field
                                    type='text' name='carrera' placeholder='Example: Ingenieria de sistemas'></Field>
                                <ErrorMessage name='carrera' component={() => (
                                    <div className='error'>{errors.carrera}</div>
                                )}></ErrorMessage>
                            </div>

                            <div>
                                <label>Direccion</label>
                                <Field
                                    type='text' id='direccion' name='direccion' placeholder='Direccion'></Field>
                                <ErrorMessage name='direccion' component={() => (
                                    <div className='error'>{errors.direccion}</div>
                                )}></ErrorMessage>
                            </div>

                            <button className='btn_enviar' type='submit'>Enviar</button>

                            {/** Si formularioEnviado es verdadero */}
                            {formularioEnviado && <p className='exito'>Datos enviados correctamente</p>}

                        </Form>
                    )}

            </Formik>

        </div >
    )
}