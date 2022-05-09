import { Form, FormGroup, FormLabel, FormControl ,Button} from "react-bootstrap"
import { useState, useEffect } from "react"
import Menu from "../components/Menu"
import Libro from "./Libro";

export default function Prestamos(){

    const [search, setSearch] = useState({
        titulo: ''
    });

    const [book, setBook] = useState([])

    

    let handleChange = e =>{
        console.log(e.target.value)
        setSearch({
            titulo: e.target.value
        });
    }

    var prueba = 'Martin Fierro'

    const loadBook = async () => {
        const response = await fetch(`http://localhost:4000/libros/${search.titulo}`)
        const data = await response.json()
        console.log(data)
        setBook(data)
    }

    useEffect(() =>{
        loadBook()
    }, [])


    let handleSubmit = (event) => {
        event.preventDefault();
        loadBook();
        console.log(book)
    }

    return(
        <div>
            <Menu></Menu>
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
            <Libro book={book}/>
        </div>
    )
}