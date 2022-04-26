import { useEffect, useState } from "react"

import './css/libros.css'

import ModelAgg from "../components/Models/ModelAgg"
import ModelDelete from "../components/Models/ModelDelete"
import ModelMody from "../components/Models/ModelMody"

export default function Libros() {

    const [stateLibro, setStateLibro] = useState([])

    const loadLibros = async () => {
        const respuesta = await fetch('http://localhost:3032/libro')
        const data = await respuesta.json()
        setStateLibro(data)
        console.log(data)
    }

    useEffect(() => {
        loadLibros()
    }, [])

    /**Destructuring */
    return (
        <div>
            <h2>Inventario</h2>

            <ModelAgg className='btn btn-success' existingLib={stateLibro} onChange={(libro) => setStateLibro(libro)} />

            <div id="table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Editorial</th>
                            <th scope="col">Area</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Nacionalidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stateLibro.map(libro =>
                            <tr key={libro.id_libro}>
                                <td>{libro.id_libro}</td>
                                <td>{libro.titulo}</td>
                                <td>{libro.editorial}</td>
                                <td>{libro.area}</td>
                                <td>{libro.nombre}</td>
                                <td>{libro.nacionalidad}</td>
                                <td><ModelMody className='btn btn-primary'
                                    modelo={libro}
                                    existingLib={stateLibro}
                                    onChange={(libro) => setStateLibro(libro)}
                                /></td>
                                <td><ModelDelete className='btn btn-danger'
                                    modelo={libro}
                                    existingLib={stateLibro}
                                    onChange={(libro) => setStateLibro(libro)} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>





        </div>

    )
}






