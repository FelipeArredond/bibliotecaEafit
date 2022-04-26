import { Form, Formik, Field } from "formik"
import Btn from "../Btn"



export default function FormularioInventario(props) {
    return (
        <div>
            <Formik initialValues={props.modelo}

                onSubmit={props.onSubmit}

            >

                {(formikProps) => (
                    <Form>
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
                                <Btn disabled={formikProps.isSubmitting}
                                    className='add btn btn-success'
                                    type='button'>
                                    {props.any}
                                </Btn>
                                <Btn className='cancel btn btn-danger' type='button' onClick={props.onClick}>{props.any}</Btn>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )

}

