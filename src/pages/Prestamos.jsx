import { useEffect, useState } from "react";
import ModelMody from '../components/models/modelsPrestamo/ModelModyPrest';
import Menu from "../components/Menu";

export default function Prestamos() {

    const [statePrestamos, setStatePrestamos] = useState([])

    const loadPrestamos = async () => {
        const respuesta = await fetch('http://localhost:4000/prestamo')
        const data = await respuesta.json()
        setStatePrestamos(data)
    }

    useEffect(() => {
        loadPrestamos()
    }, [])

    return (
        <div>
            <Menu />
            <h2>Prestamos</h2>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th scope="col">Estudiante</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Fecha prestamo</th>
                            <th scope="col">Fecha devolucion</th>
                            <th scope="col">Devuelto</th>
                            <th scope="col">Multa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {statePrestamos.map(prestamo =>
                            <tr key={prestamo.id_prestamo}>
                                <td>{prestamo.nombre}</td>
                                <td>{prestamo.titulo}</td>
                                <td>{prestamo.fecha_prestamo}</td>
                                <td>{prestamo.fecha_devolucion}</td>
                                <td>{prestamo.devuelto}</td>
                                <td>{prestamo.multa}</td>
                                <td>{<ModelMody modelo={prestamo}
                                    existingPrest={statePrestamos}
                                    onChange={(prestamo) => setStatePrestamos(prestamo)} />}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>Total Multas</th>
                            <td className="col-md-2">
                                {
                                    statePrestamos.map(item => item.multa).reduce((prev, curr) => prev + curr, 0)
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}