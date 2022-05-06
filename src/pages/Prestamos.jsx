import Btn from "../components/Btn";
import ModelAggPre from "../components/Models/ModelsPrestamos/ModelPrestar";
import ModelDevuelto from "../components/Models/ModelsPrestamos/ModelDevuelto";
import ModelModyPre from "../components/Models/ModelsPrestamos/ModelModyPre";
import { useEffect, useState } from "react";
import ModelDeletePrestamo from "../components/Models/ModelsPrestamos/ModelDeletePrestamo";

export default function Prestamos() {

    const [statePrestamos, setStatePrestamos] = useState([])

    const loadPrestamo = async () => {
        const respuesta = await fetch('http://localhost:3032/prestamo')
        const data = await respuesta.json()
        setStatePrestamos(data)
        console.log(data)
    }

    useEffect(() => {
        loadPrestamo()
    }, [])

    return (
        <div>
            <h3>Prestamos</h3>

            <ModelAggPre existingPrestamos={statePrestamos} onChange={(prestamo) => setStatePrestamos(prestamo)} />
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Carrera</th>
                        <th scope='col'>Libro</th>
                        <th scope='col'>Fecha inicial</th>
                        <th scope='col'>Fecha entrega</th>
                    </tr>
                </thead>
                <tbody>
                    {statePrestamos.map(prestamo =>
                        <tr key={prestamo.fecha_prestamo}>
                            <td>{prestamo.id_lector}</td>
                            <td>{prestamo.nombre}</td>
                            <td>{prestamo.carrera}</td>
                            <td>{prestamo.titulo}</td>
                            <td>{prestamo.fecha_prestamo}</td>
                            <td>{prestamo.fecha_devolucion}</td>
                            <td><ModelDeletePrestamo modelo={prestamo} onChange={(prestamo => setStatePrestamos(prestamo))} existingPrestamos={statePrestamos} /> </td>

                            <td><ModelModyPre /> </td>
                            <td><ModelDevuelto /> </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}