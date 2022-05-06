import { useEffect, useState } from "react"
 
import './css/libros.css'

import ModelAgg from "../components/Models/ModelsLibros/ModelAgg"
import ModelDelete from "../components/Models/ModelsLibros/ModelDelete"
import ModelMody from "../components/Models/ModelsLibros/ModelMody"

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
            <h2>Libros</h2>

            <ModelAgg className='btn btn-success' existingLib={stateLibro} onChange={(libro) => setStateLibro(libro)} />

            <div id="table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Editorial</th>
                            <th scope="col">Area</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stateLibro.map(libro =>
                            <tr key={libro.id_libro}>
                                <td>{libro.id_libro}</td>
                                <td>{libro.titulo}</td>
                                <td>{libro.editorial}</td>
                                <td>{libro.area}</td>
                                <td><ModelMody modelo={libro}
                                    existingLib={stateLibro}
                                    onChange={(libro) => setStateLibro(libro)}
                                /></td>
                                <td><ModelDelete modelo={libro}
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






