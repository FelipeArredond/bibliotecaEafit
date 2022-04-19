import { Table } from "react-bootstrap";

export default function ListItem(props){
    return(
            <tr>
                <th scope="row">
                    {props.number}
                </th>
                <td>
                    {props.tittle}
                </td>
                <td>
                    {props.autor}
                </td>
                <td>
                    {props.edicion}
                </td>
                <td>
                    {props.disponibilidad}
                </td>
            </tr>
    );   
}