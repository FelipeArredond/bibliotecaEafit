import { Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap"
import { useState, useEffect, useRef, useContext } from "react"
import Menu from "../components/Menu"
import Libro from "./Libro";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Prestar(props) {

    const username = props.username

    const [search, setSearch] = useState({
        titulo: ''
    });

    const {userData} = useContext(AuthContext);

    const [book, setBook] = useState({})

    let handleChange = e => {
        setSearch({
            titulo: e.target.value
        });
    }

    const loadBook = async () => {
        const response = await fetch(`http://localhost:4000/libros/${search.titulo}`)
        const data = await response.json()
        setBook(data)
        console.log(data)
    }
    
    const lendBook = () => {
        let headersList = {
            "Content-Type": "application/json"
        }
           
        let bodyContent = JSON.stringify({
            id_prestamo: 6,
            id_lector: userData.id_lector,
            id_libro: book.idlibro
        });
        fetch("http://localhost:4000/prestamo/", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
          }).then(function(response) {
            return response.text();
          }).then(function(data) {
            console.log(data);
          })
    }   

    let handleSubmit = (event) => {
        event.preventDefault();
        loadBook();
    }

    return (
        <div>
            <Menu />
            <h3>Bienvenido de nuevo!</h3>
            <h3>Prestamos</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Ingresa el ID del libro que deseas prestar</FormLabel>
                    <FormControl name="titulo" onChange={handleChange} placeholder="Nombre Libro" />
                </FormGroup>
                <FormGroup>
                    <Button variant="primary" type="submit">
                        Buscar
                    </Button>
                </FormGroup>
            </Form>
            <Libro book={book} />
            <button onClick={lendBook   }>Prestar</button>
        </div>
    )
}