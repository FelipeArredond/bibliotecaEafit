import { useEffect, useState } from "react";
import ModelMody from '../components/models/modelsPrestamo/ModelModyPrest';
import Menu from "../components/Menu";
import './css/prestamos.css'

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
            <div class="cont-page">{/* 
                <h2 class="title">Prestamos</h2> */}
                <div>
                    <table className='table table-bordered table-prestamos'>
                        <thead>
                            <tr class="headers-table">
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
                            <tr>
                                <td>Estudiante1</td>
                                <td>Título1</td>
                                <td>18/02/08</td>
                                <td>08/02/18</td>
                                <td>SI</td>
                                <td>0$</td>
                            </tr>
                            <tr>
                                <td>Estudiante2</td>
                                <td>Título2</td>
                                <td>88/04/28</td>
                                <td>28/04/88</td>
                                <td>NO</td>
                                <td>140$</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table table-bordered table-prestamos">
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
        </div>
    )
}