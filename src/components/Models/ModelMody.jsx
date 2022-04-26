import Btn from '../Btn';
import { useState } from "react"
import GlobalModal from "./GlobalModal";
import { Form, Formik, Field } from "formik"

export default function ModelMody(props) {

    const [mostrarModalMody, setMostrarModalMody] = useState(false)

    const modyLibros = async (valueRowOfbook) => {
        const respuesta = await fetch(`http://localhost:3032/libro/${valueRowOfbook.id_libro}`, {
            method: "PUT",
            body: JSON.stringify(valueRowOfbook), //Convierte el objeto tarea en un string
            headers: { "Content-Type": "application/json" },
        })
        console.log(respuesta)


        const newInvModificado = props.existingLib.map(libro => (
            libro.id_libro === valueRowOfbook.id_libro ? valueRowOfbook : libro
        ))
        props.onChange(newInvModificado)
    }

    /**Destructuring */
    const { modelo } = props
    return (
        <div>
            <Btn className={props.className} onClick={() => setMostrarModalMody(!mostrarModalMody)} any='Mody'></Btn>
            <div>
                {mostrarModalMody ? <GlobalModal title='Modi'>
                    <Formik initialValues={{
                        id_libro: modelo.id_libro,
                        titulo: modelo.titulo,
                        editorial: modelo.editorial,
                        area: modelo.area
                    }}

                        onSubmit={async valores => {
                            await new Promise(r => setTimeout(r, 1000))
                            setMostrarModalMody(!mostrarModalMody)//Cerrar Model haciendolo false
                            modyLibros(valores) //Pasarle los valores de la fila a modyfyProInv(function)
                            console.log(valores)


                        }}

                    ><Form>
                            <div>
                                <Field name='id_libro' type='text' />
                            </div>
                            <div>
                                <Field name='titulo' type='text' />
                            </div>
                            <div>
                                <Field name='editorial' type='number' />
                            </div>
                            <div>
                                <Field name='area' type='number' />
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