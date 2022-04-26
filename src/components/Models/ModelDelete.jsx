import Btn from '../Btn';
import { useState } from "react"
import GlobalModal from "./GlobalModal";

export default function ModelDelete(props) {

    const [mostrarModalDelete, setMostrarModalDelete] = useState(false)

    function eliminar (idProduct){
        const newLibActualizado = props.existingLib.filter(libro => libro.id !== idProduct)

        props.onChange(newLibActualizado)
        setMostrarModalDelete(!mostrarModalDelete)
    }

    return (
        <div>
            <Btn className={props.className} onClick={() => setMostrarModalDelete(!mostrarModalDelete)} any='Delete'></Btn>
            <div>
                {mostrarModalDelete ? <GlobalModal title='Delete'>
                    <p>Seguro que deseas eliminar..</p>
                    <div className="row">
                        <div>
                            <Btn className='btn btn-success' type='submit' any='Delete' onClick={() => eliminar(props.modelo.id)}></Btn>
                            <Btn className='btn btn-danger' type='submit' any='Cancelar' onClick={() => setMostrarModalDelete(!mostrarModalDelete)}></Btn>
                        </div>
                    </div>
                </GlobalModal> : null}
            </div>
        </div>
    )
}