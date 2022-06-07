import { Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import Menu from "../components/Menu"
import Libro from "./Libro";
import './css/prestar.css'
import { authContext } from "../context/authContext";

export default function Prestar(props) {

    const username = props.username

    const [search, setSearch] = useState({
        titulo: ''
    });

    const {userData} = useContext(authContext)

    const [book, setBook] = useState([])



    let handleChange = e => {
        setSearch({
            titulo: e.target.value
        });
    }

    const loadBook = async () => {
        const response = await fetch(`http://localhost:4000/libros/${search.titulo}`)
        const data = await response.json()
        setBook(data)
    }

    const lendBook = () =>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
               "id_lector": userData.id,
               "id_libro": book.idlibro
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

    useEffect(() => {
        loadBook()
    }, [])


    let handleSubmit = (event) => {
        event.preventDefault();
        loadBook();
    }

    const lendButton = () => {
        if (book.length > 1 || book.length === 0) {

        } else {
            return <Button variant="primary" type="submit" onClick={lendBook} >Prestar</Button>
        }
    }

    return (
        <div>
            <Menu />
            <div class="cont-page">
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
                {lendButton()}
            </div>
        </div>
    )
}