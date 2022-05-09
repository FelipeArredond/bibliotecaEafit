import { Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import Menu from "../components/Menu"

export default function Libros(props){
     
    const [books, setBooks] = useState([])

    var num = ''

    const loadBook = async () => {
        const response = await fetch(`http://localhost:4000/libros/${num}`)
        const data = await response.json()
        console.log(data)
        setBooks(data)
    }

    useEffect(() =>{
        loadBook()
    }, [])
    
    const booksMapAll =  books.map(book => {
        return(
            <tr>
                <th scope="row">
                    {book.idlibro}
                </th>
                <td>
                    {book.titulolibro}
                </td>
                <td>
                    {book.nombreautor}
                </td>
                <td>
                    {book.editoriallibro}
                </td>
                <td>
                    {book.arealibro}
                </td>
            </tr>
        );
    })   

    return(
        <div>
            <Menu></Menu>
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
                    {booksMapAll}
                </tbody>
            </Table>
        </div>
    )
}