import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ButtonGiveBack({idPrestamo}){

    const navigate = useNavigate()

    const giveBackBook = () =>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
               "devuelto": 1,
               "multa": 1000,
               "id_prestamo": idPrestamo
           });
           
           fetch("http://localhost:4000/prestamoUpdate/", { 
             method: "PUT",
             body: bodyContent,
             headers: headersList
           }).then(function(response) {
             return response.text();
           })

           alert('Libro devuelto correctamente')
           navigate('/inicio')
    }

    return(
        <button className="btn btn-primary" onClick={giveBackBook} >Devolver</button>
    );
}