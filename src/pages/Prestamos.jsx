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
        setSearch({
            titulo: e.target.value
        });
    }

    var prueba = 'Martin Fierro'

    const loadBook = async () => {
        const response = await fetch(`http://localhost:4000/libros/${search.titulo}`)
        const data = await response.json()
        setBook(data)
    }

    useEffect(() =>{
        loadBook()
    }, [])


    let handleSubmit = (event) => {
        event.preventDefault();
        loadBook();
    }

    const lendButton = () => {
        if(book.length > 1  || book.length === 0){
            
        }else{
            return <Button type="primary">Prestar</Button>
        }
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
            {lendButton()}
        </div>
    )
}