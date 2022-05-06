import Btn from '../../Btn';
import GlobalModal from "../GlobalModal";
import { Form, Formik, Field } from "formik"
import { useState } from 'react';

export default function ModelModyPre() {

    const [mostrarModalMody, setMostrarModalMody] = useState(false)

    return (
        <div>
            <Btn className='btn btn-primary' any='Mody' onClick={() => setMostrarModalMody(!mostrarModalMody)}></Btn>

            {mostrarModalMody ? <GlobalModal title='Modificar'>
                <Formik initialValues={{
                    id_lector: 0,
                    nombre: 'IsNmae',
                    carrera: 'IsCarrera'

                }}
                    onSubmit={async valores => {
                        //Boton desabilitado por un segundo (Evitar no mandar dos veces lo mismo)
                        await new Promise(r => setTimeout(r, 1000))

                        console.log(valores)
                    }}

                ><Form>
                        <div>
                            <Field name='id_estudiante' type='number' placeholder='Id' />
                        </div>
                        <div>
                            <Field name='nombre' type='text' placeholder='Nombre' />
                        </div>
                        <div>
                            <Field name='carrera' type='text' placeholder='Carrera' />
                        </div>
                        <div className="row">
                            <div>
                                <Btn
                                    className='add btn btn-success'
                                    type='submit'
                                    any='Modificar'>
                                </Btn>
                                <Btn className='cancel btn btn-danger'
                                    type='submit'
                                    onClick={() => setMostrarModalMody(!mostrarModalMody)}
                                    any='Cancelar'></Btn>
                            </div>

                        </div>
                    </Form>
                </Formik>
            </GlobalModal> : null}
        </div>
    )
}