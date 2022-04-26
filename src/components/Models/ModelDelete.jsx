import Btn from '../Btn';
import { useState } from "react"
import GlobalModal from "./GlobalModal";

export default function ModelDelete(props) {

    const [mostrarModalDelete, setMostrarModalDelete] = useState(false)

    const deleteLibros = async (id_libro) => {
        const respuesta = await fetch(`http://localhost:3032/libro/${id_libro}`, {
            method: "DELETE"
        })
        //const data = await respuesta.json()
        setMostrarModalDelete(!mostrarModalDelete)
        console.log(respuesta)

        //Comparamos el id que nos llega 'id_libro' con los id en nuestra bd, table libro para finalmente actualizar estado de forma correcta
        const newLibActualizado = props.existingLib.filter(libro => libro.id_libro !== id_libro)
        props.onChange(newLibActualizado)
    }


    return (
        <div>
            <Btn className={props.className} onClick={() => setMostrarModalDelete(!mostrarModalDelete)} any='Delete'></Btn>
            <div>
                {mostrarModalDelete ? <GlobalModal title='Delete'>
                    <p>Seguro que deseas eliminar..</p>
                    <div className="row">
                        <div>
                            <Btn className='btn btn-success' type='submit' any='Delete' onClick={() => deleteLibros(props.modelo.id_libro)}></Btn>
                            <Btn className='btn btn-danger' type='submit' any='Cancelar' onClick={() => setMostrarModalDelete(!mostrarModalDelete)}></Btn>
                        </div>
                    </div>
                </GlobalModal> : null}
            </div>
        </div>
    )
}