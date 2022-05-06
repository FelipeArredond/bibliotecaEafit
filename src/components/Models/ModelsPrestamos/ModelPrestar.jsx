import Btn from '../../Btn';
import GlobalModal from "../GlobalModal";
import { Form, Formik, Field } from "formik"
import { useState, useEffect } from 'react';

import './css/modelPrestar.css'

//import { Typeahead } from 'react-bootstrap-typeahead'
//import TypeAheadPrestamos from './TypeAheadPrestamos';
//import async from 'react-bootstrap-typeahead/lib/behaviors/async';

export default function ModelPrestar(props) {

    const [mostrarModalAggPre, setMostrarModalAggPre] = useState(false)

    const [mostrarInBuscador, setMostrarInBuscador] = useState([])

    const [selectedStudent, setSelectedStudent] = useState([])


    const addPrestamo = async (valores) => {
        const respuesta = await fetch('http://localhost:3032/prestamo', {
            method: "POST",
            body: JSON.stringify(valores),
            headers: { "Content-Type": "application/json" },

        })
        const data = await respuesta.json()
        console.log(data)

        const newLibAgg = [...props.existingPrestamos, valores]
        props.onChange(newLibAgg)

    }

    useEffect(() => {
        addPrestamo()
    }, [])

    const loadInfStudent = async () => {
        const respuesta = await fetch('http://localhost:3032/infStudent')
        const data = await respuesta.json()
        setMostrarInBuscador(data)
        console.log(data)


    }

    // useEffect(() => {
    //     loadInfStudent()
    // }, [])

    const loadInfStudentTwo = async (ci) => {
        console.log(ci)
        const respuesta = await fetch(`http://localhost:3032/tasks/${ci.id_lector}`)
        const data = await respuesta.json()

        setSelectedStudent(data)


    }


    return (
        <div>
            <Btn className='btn btn-success' any='Prestar' onClick={() => setMostrarModalAggPre(!mostrarModalAggPre)} />


            {mostrarModalAggPre ? <GlobalModal title='Prestar un libro'>
                <Formik initialValues={{
                    id_lector: 23411
                }}

                    onSubmit={async valores => {
                        await new Promise(r => setTimeout(r, 1000))
                        console.log(selectedStudent)


                        loadInfStudentTwo(valores)

                    }}

                ><Form>
                        <div className="row">
                            <div>
                                <div>
                                    <Field name='id_lector' type='number' placeholder='Id' />
                                </div>
                                <Btn
                                    className='add btn btn-success'
                                    type='submit'
                                    any='Agregar'>
                                </Btn>
                            </div>

                        </div>
                        {/* <Typeahead
                            id='typeahead'
                            onChange={estudiantes => {
                                if (mostrarInBuscador.findIndex(x => x.id === estudiantes[0].id) === -1) {
                                    setMostrarInBuscador([...mostrarInBuscador, estudiantes[0]])
                                }

                                console.log(estudiantes)
                            }}

                            options={mostrarInBuscador}
                            labelKey={estudiante => estudiante.ci}
                            filterBy={['ci']}
                            placeholder='Documento estudiante'
                            minLength={1}
                            flip={true}
                            renderMenuItemChildren={estudiante => (
                                <>
                                    <span>{estudiante.nombre}</span>
                                </>
                            )}
                        /> */}

                    </Form>
                </Formik>

                <Formik initialValues={{
                    id_lector: 0,
                    id_libro: 14,
                    fecha_prestamo: '',
                    fecha_devolucion: ''

                }}
                    onSubmit={async valores => {
                        //Boton desabilitado por un segundo (Evitar no mandar dos veces lo mismo)
                        await new Promise(r => setTimeout(r, 1000))

                        setMostrarModalAggPre(!mostrarModalAggPre)

                        addPrestamo(valores)
                        console.log(valores)
                    }}

                ><Form>
                        {/* <Typeahead
                            id='typeahead'
                            onChange={estudiantes => {
                                if (selectedStudent.findIndex(x => x.id === estudiantes[0].id) === -1) {
                                    setSelectedStudent([...selectedStudent, estudiantes[0]])
                                }

                                console.log(estudiantes)
                            }}

                            options={selectedStudent}
                            labelKey={estudiante => estudiante.nombre}
                            filterBy={['nombre']}
                            placeholder='Documento estudiante'
                            minLength={2}
                            flip={true}
                            renderMenuItemChildren={estudiante => (
                                <>
                                    <span>{estudiante.nombre}</span>
                                </>
                            )}
                        />

                        <ul className='list-group'>
                            {

                                selectedStudent.map(estudiante => <li key={estudiante.id_lector} >{estudiante.nombre}</li>)

                            }
                            <li>{selectedStudent[0].nombre}</li>

                        </ul> */}


                        {/* <div className='form-group'>
                            <TypeAheadPrestamos
                                onAdd={estudiantes => {
                                    setSelectedStudent(estudiantes)
                                }}
                                estudiantes={selectedStudent}
                            />
                        </div> */}



                        <div className='inputs'>
                            <div>
                                <label>Id estudiante</label>
                                <Field className='form-control' name='id_lector' type='number' placeholder='Id' value={selectedStudent.id_lector} />
                            </div>
                            <div>
                                <label>Nombre Estudiante </label>
                                <Field className='form-control' name='nombre' type='text' disabled='disabled' placeholder='Nombre' value={selectedStudent.nombre} />
                            </div>

                            <div>
                                <label>Carrera</label>
                                <Field className='form-control' name='carrera' type='text' disabled='disabled' placeholder='Carrera' value={selectedStudent.carrera} />
                            </div>

                            {/* <div>
                                <Field className='form-control' name='titulo' type='text' placeholder='Libro que desea prestar' />
                            </div> */}
                            <div>
                                <Field className='form-control' name='id_libro' type='number' placeholder='Id' />
                            </div>

                            <div>
                                <Field className='form-control' name='fecha_prestamo' type='string' placeholder='Fecha inicial' />
                            </div>
                            <div>
                                <Field className='form-control' name='fecha_devolucion' type='date' placeholder='Fecha final' />
                            </div>
                        </div>

                        <div className="row">
                            <div>
                                <Btn
                                    className='add btn btn-success'
                                    type='submit'
                                    any='Prestar'>
                                </Btn>
                                <Btn className='cancel btn btn-danger'
                                    type='submit'
                                    onClick={() => setMostrarModalAggPre(!mostrarModalAggPre)}
                                    any='Cancelar'></Btn>
                            </div>

                        </div>
                    </Form>
                </Formik>






            </GlobalModal> : null
            }
        </div >
    )
}

