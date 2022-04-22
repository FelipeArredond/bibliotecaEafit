import { Form, FormGroup, FormLabel, FormControl ,Button} from "react-bootstrap"
import Libros from "./Libros"

export default function Prestamos(){

    return(
        <div>
            <h3>Prestamos</h3>
            <Form>
            <FormGroup className="mb-3" controlId="formBasicEmail">
                <FormLabel>Ingresa el ID del libro que deseas prestar</FormLabel>
                <FormControl type="email" placeholder="ID" />
                </FormGroup>
                <FormGroup>    
                <Button variant="primary" type="submit">
                    Buscar
                </Button>
                </FormGroup>    
            </Form>
            <Libros />
        </div>
    )
}