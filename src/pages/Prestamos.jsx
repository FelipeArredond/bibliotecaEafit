import { useContext, useEffect, useState } from "react";
import ModelMody from '../components/models/modelsPrestamo/ModelModyPrest';
import Menu from "../components/Menu";
import './css/prestamos.css'
import { authContext } from "../context/authContext";
import { Button } from "react-bootstrap";
import ButtonGiveBack from "../components/ButtonGiveBack";

export default function Prestamos() {

    const [statePrestamos, setStatePrestamos] = useState([])

    const {userData} = useContext(authContext)

    const loadPrestamos = async () => {
        const respuesta = await fetch('http://localhost:4000/prestamo')
        const data = await respuesta.json()
        setStatePrestamos(data)
    }

    const loadSingleLends = async () =>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
               "id_lector": userData.id
           });
           
           fetch("http://localhost:4000/prestamosEstudiante/", { 
             method: "PUT",
             body: bodyContent,
             headers: headersList
           }).then(function(response) {
             return response.json();
           }).then(function(data) {
             setStatePrestamos(data);
           })
    }

    const handleRenderLends = () =>{
        if(userData.admin === false){
            loadSingleLends()
        }else{
            loadPrestamos()
            console.log('admin')
        }
    }

    const renderLends =statePrestamos.map(prestamo =>
        <tr key={prestamo.id_prestamo}>
            <td>{prestamo.nombre}</td>
            <td>{prestamo.titulo}</td>
            <td>{prestamo.fecha_prestamo}</td>
            <td>{prestamo.fecha_devolucion}</td>
            <td>{prestamo.devuelto}</td>
            <td>{prestamo.multa}</td>
            {!userData.admin&&<td><ButtonGiveBack idPrestamo={prestamo.id_prestamo}/></td>}
            {userData.admin&&<td>{<ModelMody modelo={prestamo}
                existingPrest={statePrestamos}
                onClick={console.log('test')}
                onChange={(prestamo) => setStatePrestamos(prestamo)} />}</td>}
        </tr>
    )

    useEffect(() => {
        handleRenderLends()
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
                            {statePrestamos.length===0?<h2>No hay prestamos aun</h2>:renderLends}
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