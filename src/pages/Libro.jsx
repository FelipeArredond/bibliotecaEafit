import { Table } from "react-bootstrap"

export default function Libro({book}){

    return(
        <Table
            bordered
            hover
            responsive
            >
            <thead>
                <tr>
                <th>
                    ID
                </th>
                <th>
                    Titulo Libro
                </th>
                <th>
                    Editorial
                </th>
                <th>
                    Area
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">
                    {book.idlibro}
                </th>
                <td>
                    {book.titulolibro}
                </td>
                <td>
                    {book.editoriallibro}
                </td>
                <td>
                    {book.arealibro}
                </td>
                </tr>
            </tbody>
        </Table>
    )
}