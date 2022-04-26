import { useState } from "react"
import Btn from '../Btn';
import GlobalModal from "./GlobalModal";
import { Form, Formik, Field } from "formik"

export default function ModelAgg(props) {

    const [mostrarModalAgg, setMostrarModalAgg] = useState(false)

    function agregar(rowOfLibs) {
        const newLibAgg = [...props.existingLib, rowOfLibs]
        props.onChange(newLibAgg)
    }

    return (
        <div>
            <Btn className={props.className} onClick={() => setMostrarModalAgg(!mostrarModalAgg)} any='Agregar'></Btn>

            {mostrarModalAgg ? <GlobalModal title='Agregar'>
                <Formik initialValues={{
                    id_libro: 19,
                    titulo: "MyFirtsBook",
                    editorial: "2",
                    area: "12"
                }}

                    onSubmit={async valores => {
                        await new Promise(r => setTimeout(r, 1000))
                        setMostrarModalAgg(!mostrarModalAgg)//Cerrar Model haciendolo false
                        agregar(valores)

                        const res = await fetch('http://localhost:3032/libro', {
                            method: "POST",
                            body: JSON.stringify(valores), //Convierte el objeto tarea en un string
                            headers: { "Content-Type": "application/json" },
                        })
                        const data = await res.json()
                        console.log(data)

                    }}

                ><Form>
                        <div>
                            <Field name='id_libro' type='number' placeholder='Id' />
                        </div>
                        <div>
                            <Field name='titulo' type='text' placeholder='Titulo' />
                        </div>
                        <div>
                            <Field name='editorial' type='text' placeholder='Editorial' />
                        </div>
                        <div>
                            <Field name='area' type='text' placeholder='Area' />
                        </div>
                        <div className="row">
                            <div>
                                <Btn
                                    className='add btn btn-success'
                                    type='submit'
                                    any='Agregar'>
                                </Btn>
                                <Btn className='cancel btn btn-danger' type='submit' onClick={() => setMostrarModalAgg(!mostrarModalAgg)} any='Cancelar'></Btn>
                            </div>

                        </div>
                    </Form></Formik>
            </GlobalModal> : null}
        </div>
    )
}


