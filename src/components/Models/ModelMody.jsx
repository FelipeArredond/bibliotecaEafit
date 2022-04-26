import Btn from '../Btn';
import { useState } from "react"
import GlobalModal from "./GlobalModal";
import { Form, Formik, Field } from "formik"

export default function ModelMody(props) {

    const [mostrarModalMody, setMostrarModalMody] = useState(false)

    function modificar(rowOfLibs) {
        const newInvModificado = props.existingLib.map(libro => (
            libro.id === rowOfLibs.id ? rowOfLibs : libro
        ))
        props.onChange(newInvModificado)

    }


    const { modelo } = props

    return (
        <div>
            <Btn className={props.className} onClick={() => setMostrarModalMody(!mostrarModalMody)} any='Mody'></Btn>
            <div>
                {mostrarModalMody ? <GlobalModal title='Modi'>
                    <Formik initialValues={{
                        id: modelo.id,
                        titulo: modelo.titulo,
                        autor: modelo.autor,
                        edicion: modelo.edicion,
                        disponibilidad: modelo.disponibilidad
                    }}

                        onSubmit={async valores => {
                            await new Promise(r => setTimeout(r, 1000))
                            setMostrarModalMody(!mostrarModalMody)//Cerrar Model haciendolo false
                            modificar(valores) //Pasarle los valores de la fila a modyfyProInv(function)
                            console.log(valores)

                        }}

                    ><Form>
                            <div>
                                <Field name='titulo' type='text' />
                            </div>
                            <div>
                                <Field name='autor' type='text' />
                            </div>
                            <div>
                                <Field name='edicion' type='number' />
                            </div>
                            <div>
                                <Field name='disponibilidad' type='number' />
                            </div>
                            <div className="row">
                                <div>
                                    <Btn
                                        className='add btn btn-success'
                                        type='submit'
                                        any='Modificar'>
                                    </Btn>
                                    <Btn className='cancel btn btn-danger' type='submit' onClick={() => setMostrarModalMody(!mostrarModalMody)} any='Cancelar'></Btn>
                                </div>

                            </div>
                        </Form></Formik>
                </GlobalModal> : null}
            </div>
        </div>
    )
}