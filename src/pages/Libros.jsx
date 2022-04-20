import { Table } from "react-bootstrap"
import { useEffect, useState } from "react"

export default function Libros(){
     
    const [books, setBooks] = useState([])

    const loadBook = async () => {
        const response = await fetch('http://localhost:4000/libros')
        const data = await response.json()
        setBooks(data)
    }

    useEffect(() =>{
        loadBook()
    }, [])

    const booksMap =  books.map(book =>{
        return(
            <tr>
                <th scope="row">
                    {book.id_libro}
                </th>
                <td>
                    {book.titulo}
                </td>
                <td>
                    {book.autor}
                </td>
                <td>
                    {book.editorial}
                </td>
                <td>
                    {book.area}
                </td>
            </tr>
        );
    })   

    return(
        <div>
            <div>
                <h3>Libros</h3>
            </div>
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
                        Titulo
                    </th>
                    <th>
                        Autor
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
                    {booksMap}
                </tbody>
            </Table>
        </div>
    )
}