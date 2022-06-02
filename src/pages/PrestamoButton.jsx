import { Button } from "react-bootstrap";

export function PrestamoBoton(props){
    
    const name = props.username
    
    return(
        <>
            <Button type="primary">Prestar</Button>
        </>
    );
}