import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ButtonGiveBack({idPrestamo, fechaPrestamo}){

    const navigate = useNavigate()

    const giveBackBook = () =>{
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      var fechaInicio = new Date(fechaPrestamo.slice(0,10)).getTime();
      var fechaFin    = new Date(hoy.toISOString().slice(0,10)).getTime();

      var diff = fechaFin - fechaInicio;
      var diasPrestado = diff/(1000*60*60*24)
      var multa = 0;

      if(diasPrestado>7){
        multa = (diasPrestado - 7) * 2000
      }else{
        multa = 0;
      }

      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
      }
      let bodyContent = JSON.stringify({
        "devuelto": 1,
        "multa": multa,
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