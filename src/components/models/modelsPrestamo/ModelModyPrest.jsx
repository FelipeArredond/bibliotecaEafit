import { Form, Formik, Field } from "formik"
import { useState } from 'react';
import GlobalModal from '../GlobalModal';


export default function ModelModyPrest(props) {

    const [mostrarModalMody, setMostrarModalMody] = useState(false)

    const modyLibros = async (valueRowOfPrest) => {
        const respuesta = await fetch(`http://localhost:4000/prestamo/${valueRowOfPrest.id_prestamo}`, {
            method: "PUT",
            body: JSON.stringify(valueRowOfPrest),
            headers: { "Content-Type": "application/json" },
        })
        console.log(respuesta)
        console.log(valueRowOfPrest.id_prestamo)

        const newPrestModificado = props.existingPrest.map(prestamo => (
            prestamo.id_prestamo === valueRowOfPrest.id_prestamo ? valueRowOfPrest : prestamo
        ))
        props.onChange(newPrestModificado)
    }


    const { modelo } = props
    return (
        <div>
            <button className='btn btn-primary' onClick={() => setMostrarModalMody(!mostrarModalMody)}>Mody</button>

            {mostrarModalMody ? <GlobalModal title='Modificar'>
                <Formik initialValues={{
                    id_prestamo: modelo.id_prestamo,
                    nombre: modelo.nombre,
                    titulo: modelo.titulo,
                    fecha_prestamo: modelo.fecha_prestamo,
                    fecha_devolucion: modelo.fecha_devolucion,
                    devuelto: modelo.devuelto,
                    multa: modelo.multa
                }}

                    onSubmit={async valores => {
                        await new Promise(r => setTimeout(r, 1000))
                        setMostrarModalMody(!mostrarModalMody)
                        modyLibros(valores)
                        console.log(valores.prestamo)
                    }}

                ><Form>
                        <div>
                            <Field name='id_prestamo' type='text' disabled='disabled' />
                        </div>
                        <div>
                            <Field name='devuelto' type='number'/>
                        </div>
                        <div>
                            <Field name='multa' type='number'/>
                        </div>
                        <div className="row">
                            <div>
                                <button
                                    className='add btn btn-success'
                                    type='submit'
                                >Modificar</button>
                                <button className='cancel btn btn-danger'
                                    type='submit'
                                    onClick={() => setMostrarModalMody(!mostrarModalMody)}
                                >Cancelar</button>
                            </div>
                        </div>

                    </Form>

                </Formik>

            </GlobalModal> : null}
        </div>
    )
}