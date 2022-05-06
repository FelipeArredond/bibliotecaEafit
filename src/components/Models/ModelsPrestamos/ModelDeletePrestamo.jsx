import Btn from '../../Btn';
import { useState } from "react"
import GlobalModal from "../GlobalModal";


export default function ModelDeletePrestamo(props) {

    const [mostrarModalDelete, setMostrarModalDelete] = useState(false)

    const deleteLibros = async (id_lector) => {
        const respuesta = await fetch(`http://localhost:3032/prestamo/${id_lector}`, {
            method: "DELETE"
        })
        const data = await respuesta.json()
        setMostrarModalDelete(!mostrarModalDelete)
        console.log(data)

        //Comparamos el id que nos llega 'id_lector' con los id en nuestra bd, table libro para finalmente actualizar estado de forma correcta
        const newPrestamoActualizado = props.existingPrestamos.filter(prestamo => prestamo.id_lector !== id_lector)
        props.onChange(newPrestamoActualizado)
    }


    return (
        <div>
            <Btn className='btn btn-danger' onClick={() => setMostrarModalDelete(!mostrarModalDelete)} any='Delete'></Btn>
            <div>
                {mostrarModalDelete ? <GlobalModal title='Delete'>
                    <p>Seguro que deseas eliminar..</p>
                    <div className="row">
                        <div>
                            <Btn className='btn btn-success' type='submit' any='Delete' onClick={() => deleteLibros(props.modelo.id_lector)}></Btn>
                            <Btn className='btn btn-danger' type='submit' any='Cancelar' onClick={() => setMostrarModalDelete(!mostrarModalDelete)}></Btn>
                        </div>
                    </div>
                </GlobalModal> : null}
            </div>
        </div>
    )
}

