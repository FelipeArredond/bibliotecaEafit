import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react'

import './css/registro.css'

export default function Registro() {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    return (
        <div className='body'>
            <h1 className='register_title'>Modele su perfil</h1>

            <Formik
                initialValues={{
                    names: '',
                    surnames: '',
                    email: '',
                    document: '',
                    password: '',
                    confirm_password: ''
                }}
                /**@Propiedad_validate me permite validar el formulario (que todo este correcto de acuerdo a requerimientos)  */
                validate={(valores) => {
                    let errores = {}
                    if (valores.names === '') {
                        errores.names = 'Ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.names)) {
                        errores.names = 'El nombre solo puede contener letras y espacios'
                    }

                    if (valores.surnames === '') {
                        errores.surnames = 'Ingresa tu(s) surnames'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surnames)) {
                        errores.surnames = 'Solo puede contener letras y espacios'
                    }

                    if (valores.email === '') {
                        errores.email = 'Ingresa un email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errores.email = 'undefined'
                    }

                    if (valores.document === '') {
                        errores.document = 'Ingresa un document'
                    } else if (!/^[0-9.]{7,20}$/.test(valores.document)) {
                        errores.document = 'undefined'
                    }

                    if (valores.password === '') {
                        errores.password = 'Ingresa un password'
                    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/.test(valores.password)) {
                        errores.password = 'Minimo: 1 caracter MAYUS. 4 caracteres MINUS. 4 cracteres enteros. 1 caracter especial'
                    }

                    if (valores.password !== valores.confirm_password) {
                        errores.confirm_password = 'Confirma tu password'
                    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/.test(valores.confirm_password)) {
                        errores.confirm_password = 'Las passwords no coinciden'
                    }


                    return errores

                }
                }

                /**@Propiedad_Onsubmit me permite acceder a los valores despues de precionar en btn enviar */
                onSubmit={(valores, { resetForm }) => { //Extrear reser form {reserForm}

                    resetForm() //Limpiar el formulario despues de darle a btn enviar
                    cambiarFormularioEnviado(true)
                    setTimeout(() => cambiarFormularioEnviado(false), 3000) //cambiar a flse despues de 3seg para que mms desaparezca 

                    console.log(valores)
                    //Hacer llamada a API para enviar valores a bd
                }}
            >
                {
                    ({ errors }) => (
                        /**@param atribbute 'Quiero que me ejecutes: in this case: handleSubmit' */
                        <Form className='form_register'>
                            <div className='left_name'>
                                <label>Nombres</label>
                                <Field type='text' id='names' name='names' placeholder='Primer nombre'></Field>
                                <ErrorMessage name='names' component={() => (<div className='error'>{errors.names}</div>)}></ErrorMessage>
                            </div>
                            <div>
                                <label>surnames</label>
                                <Field type='text' id='surnames' name='surnames' placeholder='surnames'></Field>
                                <ErrorMessage name='surnames' component={() => (
                                    <div className='error'>{errors.surnames}</div>
                                )}></ErrorMessage>
                            </div>

                            <div>
                                <label>Email</label>
                                <Field type='text' id='email ' name='email' placeholder='Correo Electronico'></Field>
                                <ErrorMessage name='email' component={() => (
                                    <div className='error'>{errors.email}</div>
                                )}></ErrorMessage>
                            </div>

                            <div className='rigth_numberType'>
                                <label>document</label>
                                <Field
                                    type='text' id='document' name='document' placeholder='Example: TI-1234567789.'></Field>
                                <ErrorMessage name='document' component={() => (
                                    <div className='error'>{errors.document}</div>
                                )}></ErrorMessage>
                            </div>

                            <div>
                                <label>password</label>
                                <Field type='password' id='password' name='password' placeholder='password' ></Field>
                                <ErrorMessage name='password' component={() => (
                                    <div className='error'>{errors.password}</div>
                                )}></ErrorMessage>
                            </div>

                            <div>
                                <label>Confirmar password</label>
                                <Field type='password' id='confirm_password' name='confirm_password' placeholder='Confirmar password' ></Field>
                                <ErrorMessage name='confirm_password' component={() => (
                                    <div className='error'>{errors.confirm_password}</div>
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